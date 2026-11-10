import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Training', to: '/training' },
  { label: 'Consultancy', to: '/consultancy' },
  { label: 'IT Services', to: '/it-services' },
  { label: 'Contact', to: '/contact' },
];

function Logo({ onClick }) {
  return (
    <Link to="/" className="navbar__logo" aria-label="Jnan-Vexa Technologies Home" onClick={onClick}>
      <img
        src="/logo-mark.svg"
        alt=""
        className="navbar__logo-mark"
        aria-hidden="true"
        loading="eager"
        width="40"
        height="40"
      />
      <span className="navbar__logo-wordmark">
        <span className="navbar__logo-name">
          Jnan-<span className="navbar__logo-accent">Vexa</span>
        </span>
        <small className="navbar__logo-sub">Technologies</small>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="navbar__container container">

        <Logo />

        {/* Desktop Nav */}
        <nav className="navbar__nav" aria-label="Primary navigation">
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `navbar__link${isActive ? ' active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/contact" className="btn btn-primary navbar__cta">
          Get in Touch
        </Link>

        <button
          className="navbar__hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="navbar__overlay"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`navbar__mobile${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        <div className="navbar__mobile-header">
          <Logo onClick={() => setMenuOpen(false)} />
          <button
            className="navbar__hamburger"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <nav aria-label="Mobile navigation">
          <ul className="navbar__mobile-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `navbar__mobile-link${isActive ? ' active' : ''}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__mobile-cta">
          <Link
            to="/contact"
            className="btn btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Get in Touch
          </Link>
        </div>

        <p className="navbar__mobile-footer">Learn · Build · Grow Together</p>
      </div>
    </header>
  );
}
