import { Link } from 'react-router-dom';
import {
  ArrowRight, GraduationCap, Users, Lightbulb
} from 'lucide-react';
import './HeroSection.css';

const HIGHLIGHTS = [
  { icon: GraduationCap, text: 'Industry-Focused Training' },
  { icon: Users,         text: 'Professional Guidance'    },
  { icon: Lightbulb,     text: 'Innovative Tech Solutions' },
];

const ORBIT_ITEMS = [
  { label: 'Full Stack Dev', color: 'cyan'   },
  { label: 'Data Analytics', color: 'teal'   },
  { label: 'Cybersecurity',  color: 'purple' },
  { label: 'Generative AI',  color: 'cyan'   },
  { label: 'Study Abroad',   color: 'teal'   },
  { label: 'Mobile Apps',    color: 'purple' },
];

export default function HeroSection() {
  return (
    <section className="hero" aria-label="Hero">

      {/* ── Background Layer ── */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-base" />

        {/* SVG dot grid */}
        <svg className="hero__bg-grid" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="heroGrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(0,207,255,0.05)" strokeWidth="1"/>
            </pattern>
            <pattern id="heroDots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(0,207,255,0.14)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
          <rect width="100%" height="100%" fill="url(#heroDots)" />
        </svg>

        {/* Glowing blobs */}
        <div className="hero__blob hero__blob--cyan"   />
        <div className="hero__blob hero__blob--purple" />
        <div className="hero__blob hero__blob--teal"   />

        {/* Accent lines */}
        <div className="hero__accent-line hero__accent-line--1" />
        <div className="hero__accent-line hero__accent-line--2" />
      </div>

      {/* ── Desktop layout ── */}
      <div className="container hero__container">

        {/* Left — text content */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Technology · Training · Consultancy
          </div>

          <h1 className="hero__headline">
            Your Growth.<br />
            <span className="hero__headline-accent">Our Mission.</span>
          </h1>

          <p className="hero__subheadline">
            Learn New Skills. Build Your Future. Grow Your Business.
          </p>

          <p className="hero__desc">
            At Jnan-Vexa Technologies, we empower individuals and businesses
            through industry-relevant technology training, professional consultancy
            and innovative digital solutions.
          </p>

          <div className="hero__actions">
            <Link to="/services" className="btn hero__btn-primary">
              Explore Our Services
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn hero__btn-secondary">
              Contact Us
            </Link>
          </div>

          <div className="hero__highlights">
            {HIGHLIGHTS.map(({ icon: Icon, text }) => (
              <div key={text} className="hero__highlight">
                <span className="hero__highlight-icon" aria-hidden="true">
                  <Icon size={14} strokeWidth={2.5} />
                </span>
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Right — Visual (desktop only) */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__orb-wrap">
            {/* Pulsing rings */}
            <div className="hero__ring hero__ring--1" />
            <div className="hero__ring hero__ring--2" />
            <div className="hero__ring hero__ring--3" />

            {/* Logo centrepiece */}
            <div className="hero__logo-centre">
              <img src="/logo-mark.svg" alt="" className="hero__logo-img" />
            </div>

            {/* Orbiting cards */}
            <div className="hero__orbit hero__orbit--outer">
              {ORBIT_ITEMS.map((item, i) => (
                <div
                  key={item.label}
                  className={`hero__orbit-item hero__orbit-item--${item.color}`}
                  style={{ '--i': i, '--total': 6 }}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MOBILE HERO — Full redesign with logo
          ══════════════════════════════════════════ */}
      <div className="hero__mobile-visual" aria-hidden="true">

        {/* Background glow rings behind logo */}
        <div className="hero__m-glow hero__m-glow--outer" />
        <div className="hero__m-glow hero__m-glow--mid"   />
        <div className="hero__m-glow hero__m-glow--inner" />

        {/* Pulsing scan rings */}
        <div className="hero__m-ring hero__m-ring--1" />
        <div className="hero__m-ring hero__m-ring--2" />
        <div className="hero__m-ring hero__m-ring--3" />

        {/* Full company logo — fits perfectly on dark bg */}
        <div className="hero__m-logo-wrap">
          <img
            src="/logo.png"
            alt="Jnan-Vexa Technologies"
            className="hero__m-logo-img"
          />
        </div>

        {/* Floating service chips */}
        <span className="hero__m-chip hero__m-chip--1">🎓 Training</span>
        <span className="hero__m-chip hero__m-chip--2">🌍 Consultancy</span>
        <span className="hero__m-chip hero__m-chip--3">💻 IT Services</span>
        <span className="hero__m-chip hero__m-chip--4">🤖 AI & Cloud</span>

        {/* Tagline banner below logo */}
        <div className="hero__m-tagline">
          <span>Learn</span>
          <span className="hero__m-tagline-sep">|</span>
          <span>Build</span>
          <span className="hero__m-tagline-sep">|</span>
          <span>Grow Together</span>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z" fill="#F5F8FC" />
        </svg>
      </div>
    </section>
  );
}
