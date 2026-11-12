import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Users, Lightbulb } from 'lucide-react';
import './HeroSection.css';

const HIGHLIGHTS = [
  { icon: GraduationCap, text: 'Industry-Focused Training' },
  { icon: Users,         text: 'Professional Guidance'    },
  { icon: Lightbulb,     text: 'Innovative Tech Solutions' },
];

const CHIPS = [
  { label: 'Full Stack Dev', color: 'cyan',   pos: 1 },
  { label: 'Data Analytics', color: 'teal',   pos: 2 },
  { label: 'Cybersecurity',  color: 'purple', pos: 3 },
  { label: 'Generative AI',  color: 'cyan',   pos: 4 },
  { label: 'Study Abroad',   color: 'teal',   pos: 5 },
  { label: 'Mobile Apps',    color: 'purple', pos: 6 },
];

export default function HeroSection() {
  return (
    <section className="hero" aria-label="Hero">

      {/* ── Background Layer ── */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-base" />
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
        <div className="hero__blob hero__blob--cyan"   />
        <div className="hero__blob hero__blob--purple" />
        <div className="hero__blob hero__blob--teal"   />
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

        {/* ── Right — 3D Logo Visual (desktop) ── */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__stage">

            {/* Atmospheric glow behind everything */}
            <div className="hero__stage-aura hero__stage-aura--cyan"   />
            <div className="hero__stage-aura hero__stage-aura--purple" />

            {/* Concentric pulse rings */}
            <div className="hero__stage-ring hero__stage-ring--1" />
            <div className="hero__stage-ring hero__stage-ring--2" />
            <div className="hero__stage-ring hero__stage-ring--3" />

            {/* 3D Logo platform */}
            <div className="hero__logo-platform">
              <img
                src="/logo-3d-transparent.png"
                alt="Jnan-Vexa Technologies JV Logo"
                className="hero__logo-3d-img"
                loading="eager"
              />
              {/* Ground reflection glow */}
              <div className="hero__logo-ground" />
            </div>

            {/* Floating service chips */}
            {CHIPS.map(({ label, color, pos }) => (
              <span
                key={label}
                className={`hero__chip hero__chip--${pos} hero__chip--${color}`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MOBILE HERO — 3D Logo Visual
          ══════════════════════════════════════ */}
      <div className="hero__mobile-visual" aria-hidden="true">

        {/* Atmospheric halos */}
        <div className="hero__m-halo hero__m-halo--outer" />
        <div className="hero__m-halo hero__m-halo--mid"   />
        <div className="hero__m-halo hero__m-halo--inner" />

        {/* Pulsing scan rings */}
        <div className="hero__m-ring hero__m-ring--1" />
        <div className="hero__m-ring hero__m-ring--2" />
        <div className="hero__m-ring hero__m-ring--3" />

        {/* 3D Logo */}
        <div className="hero__m-platform">
          <img
            src="/logo-3d-transparent.png"
            alt="Jnan-Vexa Technologies"
            className="hero__m-logo-img"
          />
          <div className="hero__m-ground" />
        </div>

        {/* Floating chips */}
        <span className="hero__m-chip hero__m-chip--1">🎓 Training</span>
        <span className="hero__m-chip hero__m-chip--2">🌍 Consultancy</span>
        <span className="hero__m-chip hero__m-chip--3">💻 IT Services</span>
        <span className="hero__m-chip hero__m-chip--4">🤖 AI & Cloud</span>

        {/* Tagline */}
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
