import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, Smartphone, Settings, Headphones,
  CheckCircle2, ArrowRight, MessageCircle,
  ChevronDown, ChevronUp, Zap, ShieldCheck,
  Clock, Users, Code2, BarChart3
} from 'lucide-react';
import CTASection from '../components/CTASection';
import { useFadeIn } from '../hooks/useFadeIn';
import './PageStyles.css';
import './ITServicesPage.css';

const WHATSAPP_NUMBER = '910000000000'; // Replace with official WhatsApp number

const SERVICES = [
  {
    id: 'web-dev',
    icon: Globe,
    accent: 'purple',
    badge: 'Most Requested',
    title: 'Web Application Development',
    subtitle: 'Modern · Scalable · Responsive',
    overview:
      'We design and develop high-performance web applications tailored to your business goals — from landing pages and corporate websites to complex enterprise web platforms.',
    techStack: ['React / Next.js', 'Node.js / Express', 'Python / FastAPI', 'PostgreSQL / MongoDB', 'AWS / Azure', 'Docker / CI-CD'],
    features: [
      'Custom UI/UX Design',
      'Responsive Mobile-First Development',
      'API Design & Integration',
      'Performance Optimisation',
      'SEO-Ready Architecture',
      'CMS Integration (Headless / WordPress)',
      'E-commerce Solutions',
      'Progressive Web Apps (PWA)',
    ],
    deliverables: ['Responsive Web App', 'Source Code', 'Deployment Support', 'Basic Documentation'],
    timeline: 'Depends on project scope',
    pricing: 'Project-based / Monthly retainer',
  },
  {
    id: 'mobile-dev',
    icon: Smartphone,
    accent: 'cyan',
    badge: 'Growing Demand',
    title: 'Mobile Application Development',
    subtitle: 'Android · iOS · Cross-Platform',
    overview:
      'We build smooth, feature-rich mobile applications for Android and iOS using modern frameworks — giving your business a powerful presence on every smartphone.',
    techStack: ['React Native', 'Flutter', 'Android (Kotlin)', 'iOS (Swift)', 'Firebase', 'REST APIs'],
    features: [
      'Cross-Platform Development (React Native / Flutter)',
      'Native Android Development',
      'Native iOS Development',
      'Push Notifications',
      'Offline Support',
      'App Store & Play Store Deployment',
      'Third-Party API Integrations',
      'Performance & Security Optimisation',
    ],
    deliverables: ['Published App (Play Store / App Store)', 'Source Code', 'Admin Panel (if needed)', 'Post-launch Support'],
    timeline: 'Depends on app complexity',
    pricing: 'Project-based pricing',
  },
  {
    id: 'custom-software',
    icon: Settings,
    accent: 'teal',
    badge: 'Tailored Solutions',
    title: 'Custom Software & Projects',
    subtitle: 'Built Exactly for Your Requirements',
    overview:
      'Every business is unique. We develop custom software solutions — from internal business tools and automation systems to AI-powered applications and academic projects.',
    techStack: ['Python', 'JavaScript / TypeScript', 'Java', '.NET', 'Databases (SQL / NoSQL)', 'AI / ML Libraries'],
    features: [
      'Business Process Automation',
      'ERP / CRM Custom Modules',
      'Data Dashboards & Reports',
      'AI & Machine Learning Integration',
      'College / Academic Projects',
      'Legacy System Modernisation',
      'API Development & Integration',
      'Internal Productivity Tools',
    ],
    deliverables: ['Custom Software / System', 'Source Code', 'User Manual', 'Technical Documentation'],
    timeline: 'Scoped per requirement',
    pricing: 'Requirement-based quotation',
  },
  {
    id: 'bpo',
    icon: Headphones,
    accent: 'purple',
    badge: 'Business Support',
    title: 'Business Support Services (BPO)',
    subtitle: 'Data Entry · Back Office · Administrative Support',
    overview:
      'Outsource your non-core business operations to our reliable team. We handle data entry, back-office processing and administrative tasks — accurately and on time.',
    techStack: ['MS Excel / Google Sheets', 'CRM Tools', 'Data Processing Platforms', 'Document Management'],
    features: [
      'Data Entry & Digitisation',
      'Data Cleansing & Validation',
      'Document Processing',
      'Back-Office Support',
      'Email & Communication Management',
      'Report Generation',
      'Database Management',
      'Virtual Administrative Assistance',
    ],
    deliverables: ['Processed Data Files', 'Regular Reports', 'Quality Assurance', 'Dedicated Support Team'],
    timeline: 'Ongoing or project-based',
    pricing: 'Per hour / Per project pricing',
  },
];

const PROCESS = [
  { num: '01', title: 'Discovery & Requirement', desc: 'We understand your business goals, technical requirements and project scope in detail.' },
  { num: '02', title: 'Planning & Architecture', desc: 'We create a detailed project plan, technology stack selection and system architecture.' },
  { num: '03', title: 'Design & Development', desc: 'Our team builds your solution using best practices, clean code and iterative delivery.' },
  { num: '04', title: 'Testing & Quality Assurance', desc: 'Thorough testing across devices, browsers and use cases before delivery.' },
  { num: '05', title: 'Deployment & Launch', desc: 'We deploy your project to production with zero downtime and full support.' },
  { num: '06', title: 'Support & Maintenance', desc: 'Post-launch support, updates and ongoing maintenance as needed.' },
];

function ServiceCard({ service }) {
  const [expanded, setExpanded] = useState(false);
  const { icon: Icon, accent, badge, title, subtitle, overview,
    techStack, features, deliverables, timeline, pricing } = service;

  const waMessage = encodeURIComponent(
    `Hello Jnan-Vexa Technologies! 👋\n\nI am interested in the following IT service:\n\n💻 Service: ${title}\n⏱ Timeline: ${timeline}\n💰 Pricing: ${pricing}\n\nPlease share more details about your process, pricing and how we can get started.\n\nThank you!`
  );

  return (
    <div className={`its-card its-card--${accent} fade-in`}>
      <div className="its-card__header">
        <div className="its-card__header-left">
          <div className={`its-card__icon its-card__icon--${accent}`}>
            <Icon size={26} strokeWidth={1.75} />
          </div>
          <div>
            <div className="its-card__title-row">
              <h2 className="its-card__title">{title}</h2>
              <span className={`its-card__badge its-card__badge--${accent}`}>{badge}</span>
            </div>
            <p className="its-card__subtitle">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="its-card__meta">
        <div className="its-meta-item">
          <Clock size={15} strokeWidth={2} />
          <span><strong>Timeline:</strong> {timeline}</span>
        </div>
        <div className="its-meta-item">
          <Zap size={15} strokeWidth={2} />
          <span><strong>Pricing:</strong> {pricing}</span>
        </div>
      </div>

      <p className="its-card__overview">{overview}</p>

      {/* Tech Stack */}
      <div className="its-tech">
        <span className="its-tech__label">
          <Code2 size={14} strokeWidth={2} /> Technologies:
        </span>
        <div className="its-tech__tags">
          {techStack.map((t) => (
            <span key={t} className={`its-tech__tag its-tech__tag--${accent}`}>{t}</span>
          ))}
        </div>
      </div>

      {/* Toggle */}
      <button
        className={`its-toggle its-toggle--${accent}`}
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <BarChart3 size={16} strokeWidth={2} />
        {expanded ? 'Hide Details' : 'View Full Service Details'}
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {expanded && (
        <div className="its-expanded">
          <div className="its-features">
            <h3 className="its-features__heading">What We Deliver</h3>
            <div className="its-features__grid">
              {features.map((f) => (
                <div key={f} className="its-feature-item">
                  <CheckCircle2 size={14} strokeWidth={2.5} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="its-deliverables">
            <h3 className="its-deliverables__heading">Project Deliverables</h3>
            <div className="its-deliverables__list">
              {deliverables.map((d) => (
                <span key={d} className={`its-deliverable its-deliverable--${accent}`}>
                  <ShieldCheck size={13} strokeWidth={2.5} />
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="its-card__actions">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn its-btn-whatsapp"
        >
          <MessageCircle size={18} />
          Discuss on WhatsApp
        </a>
        <Link to="/contact" className="btn btn-outline its-btn-contact">
          Get a Free Quote
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}

export default function ITServicesPage() {
  useFadeIn();

  useEffect(() => {
    document.title = 'IT Services – Jnan-Vexa Technologies';
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 300);
    }
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
          <span className="section-label" style={{ color: 'var(--purple)' }}>Technology & IT Services</span>
          <h1 className="page-hero__title">Transform Your Ideas into Powerful Solutions</h1>
          <p className="page-hero__desc">
            We build modern, scalable and reliable digital solutions — from web and mobile apps to custom
            software and business support services.
          </p>
          <div className="its-hero-badges">
            {['Web Development', 'Mobile Apps', 'Custom Software', 'BPO Support'].map((b) => (
              <span key={b} className="its-hero-badge">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp quick bar */}
      <div className="its-quick-bar">
        <div className="container its-quick-bar__inner">
          <span>
            <MessageCircle size={18} />
            Have a project idea? Let's discuss it on WhatsApp — quick response guaranteed.
          </span>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I have a project idea and would like to discuss IT services with Jnan-Vexa Technologies.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="its-quick-bar__btn"
          >
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Services */}
      <section className="its-section section" id="technology">
        <div className="container">
          <div className="its-section__header">
            <span className="section-label">Our IT Solutions</span>
            <h2 className="section-heading">Our Technology Services</h2>
            <p className="section-desc">
              Click <strong>"View Full Service Details"</strong> to explore what each service includes,
              then contact us for a free consultation.
            </p>
          </div>
          <div className="its-cards">
            {SERVICES.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="its-process-header">
            <span className="section-label">How We Work</span>
            <h2 className="section-heading">Our Development Process</h2>
            <p className="section-desc">A transparent, structured approach that keeps you informed at every stage.</p>
          </div>
          <div className="its-process-grid">
            {PROCESS.map(({ num, title, desc }, i) => (
              <div key={num} className={`its-process-step fade-in fade-in-delay-${(i % 4) + 1}`}>
                <div className="its-process-num">{num}</div>
                <h3 className="its-process-title">{title}</h3>
                <p className="its-process-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose our tech services */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Our Advantage</span>
            <h2 className="section-heading">Why Build With Us?</h2>
          </div>
          <div className="its-why-grid">
            {[
              { icon: Code2, color: 'purple', title: 'Modern Tech Stack', desc: 'We use current, industry-standard technologies — no outdated or unsupported frameworks.' },
              { icon: ShieldCheck, color: 'teal', title: 'Quality & Security', desc: 'Security best practices and thorough testing are built into our development process.' },
              { icon: Clock, color: 'cyan', title: 'On-Time Delivery', desc: 'We respect your timelines and communicate proactively about project progress.' },
              { icon: Users, color: 'purple', title: 'Dedicated Support', desc: 'From kickoff to launch and beyond — our team is always available to support you.' },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="its-why-card fade-in">
                <div className={`its-why-icon its-why-icon--${color}`}>
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
