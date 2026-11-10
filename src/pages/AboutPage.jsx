import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen, TrendingUp, Code2, ArrowRight,
  Target, Users, Lightbulb, Heart,
  Globe2, Rocket, Shield, Award
} from 'lucide-react';
import CTASection from '../components/CTASection';
import { useFadeIn } from '../hooks/useFadeIn';
import './PageStyles.css';

const MILESTONES = [
  { icon: Globe2, color: 'cyan', label: 'Technology-Driven', desc: 'Leveraging modern technology for every solution we deliver.' },
  { icon: Rocket, color: 'purple', label: 'Innovation-Focused', desc: 'Always exploring new approaches to stay ahead.' },
  { icon: Shield, color: 'teal', label: 'Trustworthy Partner', desc: 'Building long-term relationships through reliable delivery.' },
  { icon: Award, color: 'cyan', label: 'Quality-First', desc: 'Never compromising on the quality of training or solutions.' },
];

const FEATURES = [
  { icon: BookOpen, color: 'cyan', title: 'Learn', desc: 'Build industry-relevant skills through practical, career-focused training.' },
  { icon: TrendingUp, color: 'teal', title: 'Grow', desc: 'Get professional guidance, career assistance and global opportunities.' },
  { icon: Code2, color: 'purple', title: 'Build', desc: 'Transform ideas into scalable digital products and business solutions.' },
];

export default function AboutPage() {
  useFadeIn();

  useEffect(() => {
    document.title = 'About Us – Jnan-Vexa Technologies';
  }, []);

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__shape page-hero__shape--1" />
          <div className="page-hero__shape page-hero__shape--2" />
        </div>
        <div className="container page-hero__content">
          <span className="section-label" style={{ color: 'var(--cyan)' }}>About Jnan-Vexa</span>
          <h1 className="page-hero__title">Who We Are</h1>
          <p className="page-hero__desc">
            A technology-driven company committed to empowering individuals, supporting career growth
            and delivering innovative digital solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="about-page__mv-grid">
            <div className="about-page__mv-card about-page__mv-card--mission fade-in">
              <span className="about-page__mv-label">Our Mission</span>
              <h2>What Drives Us</h2>
              <p>
                To empower individuals, students, professionals and businesses through technology education,
                career guidance and innovative digital solutions.
              </p>
            </div>
            <div className="about-page__mv-card about-page__mv-card--vision fade-in fade-in-delay-2">
              <span className="about-page__mv-label about-page__mv-label--purple">Our Vision</span>
              <h2>Where We're Headed</h2>
              <p>
                To become a trusted technology and professional development partner, helping people
                learn new skills, achieve global opportunities and transform ideas into successful digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="about-page__story">
            <div className="about-page__story-content fade-in">
              <span className="section-label">Our Story</span>
              <h2 className="section-heading">
                Building the Future, One Skill at a Time
              </h2>
              <p>
                Jnan-Vexa Technologies Private Limited is a technology-driven company committed to
                empowering individuals, supporting career growth and delivering innovative digital solutions.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Through our three core business verticals – Training, Consultancy and Technology Services –
                we help students develop future-ready skills, professionals explore global opportunities
                and businesses turn their ideas into powerful digital solutions.
              </p>
              <p style={{ marginTop: '1rem' }}>
                The brand name <strong>Jnan-Vexa</strong> reflects our core belief: Jnan (Knowledge) combined with Vexa
                (Innovation and Excellence) represents our commitment to delivering knowledge-led,
                innovation-driven solutions.
              </p>
              <Link to="/services" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
                Discover Our Services <ArrowRight size={16} />
              </Link>
            </div>

            <div className="about-page__features fade-in fade-in-delay-2">
              {FEATURES.map(({ icon: Icon, color, title, desc }) => (
                <div key={title} className={`about-feature about-feature--${color}`}>
                  <div className={`about-feature__icon about-feature__icon--${color}`}>
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="about-feature__title">{title}</h3>
                    <p className="about-feature__desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="about-page__values-header">
            <span className="section-label">What We Stand For</span>
            <h2 className="section-heading">Our Core Values</h2>
          </div>
          <div className="about-page__values-grid">
            {MILESTONES.map(({ icon: Icon, color, label, desc }, i) => (
              <div key={label} className={`about-value fade-in fade-in-delay-${i + 1}`}>
                <div className={`about-value__icon about-value__icon--${color}`}>
                  <Icon size={24} strokeWidth={1.75} />
                </div>
                <h3 className="about-value__title">{label}</h3>
                <p className="about-value__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="about-page__tagline fade-in">
            <h2 className="about-page__tagline-text">
              Learn <span className="about-page__tagline-dot">·</span>{' '}
              Build <span className="about-page__tagline-dot">·</span>{' '}
              Grow Together
            </h2>
            <p>This is more than a tagline — it's our promise to every individual and business we serve.</p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
