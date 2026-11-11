import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, MessageCircle, Share2, Users, Video } from 'lucide-react';
import './Footer.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Training Courses', to: '/training' },
  { label: 'Consultancy', to: '/consultancy' },
  { label: 'IT Services', to: '/it-services' },
  { label: 'Contact Us', to: '/contact' },
];

const VERTICALS = [
  'Training & Education',
  'Professional Consultancy',
  'Technology Services',
];

const SOCIAL = [
  { icon: Globe, label: 'LinkedIn', href: '#' },
  { icon: MessageCircle, label: 'X (Twitter)', href: '#' },
  { icon: Share2, label: 'Facebook', href: '#' },
  { icon: Users, label: 'Instagram', href: '#' },
  { icon: Video, label: 'YouTube', href: '#' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          {/* Brand column */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-wordmark">
                Jnan-<span className="footer__logo-accent">Vexa</span>
                <small>Technologies</small>
              </span>
            </Link>
            <p className="footer__tagline">Learn · Build · Grow Together</p>
            <p className="footer__desc">
              Empowering individuals and businesses through technology training,
              professional consultancy and innovative digital solutions.
            </p>
            <div className="footer__social" aria-label="Social media links">
              {SOCIAL.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="footer__social-link"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={16} strokeWidth={1.75} />
                </a>
              ))}
            </div>
            <p className="footer__social-note">
              [Update social media links after official profiles are created]
            </p>
          </div>

          {/* Navigation */}
          <div className="footer__col">
            <h3 className="footer__col-heading">Quick Links</h3>
            <ul className="footer__links">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="footer__link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Verticals */}
          <div className="footer__col">
            <h3 className="footer__col-heading">Our Services</h3>
            <ul className="footer__links">
              {VERTICALS.map((v) => (
                <li key={v}>
                  <span className="footer__link footer__link--plain">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h3 className="footer__col-heading">Contact</h3>
            <ul className="footer__contact-list">
              <li>
                <Mail size={15} strokeWidth={1.75} />
                <span>
                  <a href="mailto:jnanvexatechnologies@gmail.com" style={{color:'inherit'}}>
                    jnanvexatechnologies@gmail.com
                  </a>
                </span>
              </li>
              <li>
                <Phone size={15} strokeWidth={1.75} />
                <span>
                  <a href="tel:+918861788812" style={{color:'inherit'}}>+91 88617 88812</a>
                </span>
              </li>
              <li>
                <MapPin size={15} strokeWidth={1.75} />
                <span>
                  Saroja Tower, 33, Hosur Rd,<br />Adugodi, Bengaluru – 560030
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {year} Jnan-Vexa Technologies Private Limited. All Rights Reserved.
          </p>
          <p className="footer__legal">
            {/* Privacy Policy and Terms & Conditions links will be added when pages are created */}
            CIN: [Registration Number — Add when available]
          </p>
        </div>
      </div>
    </footer>
  );
}
