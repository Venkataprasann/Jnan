import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase, Plane, Award, BookMarked,
  CheckCircle2, ArrowRight, MessageCircle,
  Users, Globe, FileText, GraduationCap,
  ChevronDown, ChevronUp, Phone, Star, Zap,
  ClipboardList, Target
} from 'lucide-react';
import CTASection from '../components/CTASection';
import { useFadeIn } from '../hooks/useFadeIn';
import './PageStyles.css';
import './ConsultancyPage.css';

const WHATSAPP_NUMBER = '910000000000'; // Replace with official WhatsApp number

const SERVICES = [
  {
    id: 'job-assistance',
    icon: Briefcase,
    accent: 'cyan',
    badge: 'Career Support',
    title: 'Job Assistance',
    subtitle: 'Resume · Interview · Placement',
    overview:
      'We help freshers and experienced professionals land their dream jobs through structured career support, from building a standout resume to acing interviews.',
    process: [
      { step: '01', title: 'Profile Review', desc: 'Detailed review of your skills, experience and career goals.' },
      { step: '02', title: 'Resume Building', desc: 'Professional ATS-friendly resume crafted by our experts.' },
      { step: '03', title: 'Interview Prep', desc: 'Mock interviews, common Q&A and confidence building.' },
      { step: '04', title: 'Job Matching & Placement', desc: 'Job referrals, company connections and placement support.' },
    ],
    features: [
      'ATS-Optimised Resume Writing',
      'LinkedIn Profile Optimisation',
      'Mock Technical & HR Interviews',
      'Job Portal Registration & Profile Setup',
      'Referral to Partner Companies',
      'Soft Skills & Communication Coaching',
      'Salary Negotiation Guidance',
      'Post-Placement Follow-up Support',
    ],
    whoFor: ['Fresh Graduates', 'Career Changers', 'Experienced Professionals', 'Non-IT to IT Switchers'],
    fee: 'Consultation-based pricing',
    timeline: '2–8 Weeks',
  },
  {
    id: 'abroad-assistance',
    icon: Plane,
    accent: 'teal',
    badge: 'Global Opportunities',
    title: 'Abroad Assistance',
    subtitle: 'Study Abroad · Work · PR Guidance',
    overview:
      'Your trusted partner for navigating international education, overseas work opportunities and permanent residency processes across top countries.',
    process: [
      { step: '01', title: 'Profile Assessment', desc: 'Evaluate your eligibility for your chosen country and goal.' },
      { step: '02', title: 'Country & Course Selection', desc: 'Guidance on the best countries, universities or job markets.' },
      { step: '03', title: 'Documentation Support', desc: 'Full support for SOP, LOR, visa documents and applications.' },
      { step: '04', title: 'Application & Follow-up', desc: 'Application submission, visa guidance and pre-departure support.' },
    ],
    features: [
      'Study Abroad – Country & University Selection',
      'Statement of Purpose (SOP) Writing',
      'Letter of Recommendation (LOR) Guidance',
      'University Application Assistance',
      'Student Visa Guidance',
      'Work Abroad Opportunities Research',
      'Permanent Residency (PR) Pathway Guidance',
      'Pre-Departure Orientation & Support',
    ],
    countries: ['Canada', 'Australia', 'UK', 'Germany', 'USA', 'New Zealand', 'Ireland', 'Singapore'],
    whoFor: ['Students Seeking Abroad Education', 'Professionals Seeking Work Abroad', 'PR Aspirants', 'Families Seeking Migration'],
    fee: 'Service-based pricing | Free initial consultation',
    timeline: '3–12 Months',
  },
  {
    id: 'certification',
    icon: Award,
    accent: 'purple',
    badge: 'Career Boost',
    title: 'Certification Exam Assistance',
    subtitle: 'Microsoft · AWS · Google · Professional Certs',
    overview:
      'Structured preparation support for globally recognised professional certifications. We guide you through the right certification path and help you pass with confidence.',
    process: [
      { step: '01', title: 'Certification Roadmap', desc: 'Identify the right certification for your career goals.' },
      { step: '02', title: 'Study Plan Creation', desc: 'Customised study plan with resources, timelines and milestones.' },
      { step: '03', title: 'Practice & Mock Tests', desc: 'Practice exams, mock tests and performance analysis.' },
      { step: '04', title: 'Exam Registration Support', desc: 'Help with exam registration, vouchers and scheduling.' },
    ],
    features: [
      'Microsoft Azure / 365 Certifications',
      'AWS Cloud Certifications',
      'Google Cloud & Workspace Certifications',
      'CompTIA (A+, Security+, Network+)',
      'Cisco CCNA / CCNP',
      'PMP / Project Management Certifications',
      'Digital Marketing Certifications',
      'Customised Study Plan & Resources',
    ],
    whoFor: ['IT Professionals', 'Fresh Graduates', 'Working Professionals Upskilling', 'Career Changers into IT'],
    fee: 'Per certification programme pricing',
    timeline: '1–3 Months',
  },
  {
    id: 'exam-prep',
    icon: BookMarked,
    accent: 'teal',
    badge: 'Education Abroad',
    title: 'International & Higher Education Exams',
    subtitle: 'IELTS · GRE · Language & Higher Education Exams',
    overview:
      'Comprehensive preparation support for English proficiency and graduate admission tests required for studying or working abroad at top global institutions.',
    process: [
      { step: '01', title: 'Diagnostic Test', desc: 'Assess current level and identify strengths and weaknesses.' },
      { step: '02', title: 'Personalised Study Plan', desc: 'Structured preparation plan based on target score and timeline.' },
      { step: '03', title: 'Practice & Mock Tests', desc: 'Full-length mock tests with detailed feedback and improvement tips.' },
      { step: '04', title: 'Exam Registration Support', desc: 'Guidance on booking, test centres and what to expect on exam day.' },
    ],
    features: [
      'IELTS (Academic & General Training)',
      'TOEFL Preparation',
      'GRE Preparation (Verbal, Quantitative, Analytical)',
      'GMAT Preparation',
      'PTE Academic Preparation',
      'German (A1–B2 Level) Preparation',
      'French / Other Language Exam Support',
      'Target Score Planning & Strategy',
    ],
    whoFor: ['Students Applying Abroad', 'Work Visa Aspirants', 'PR Applicants', 'Higher Education Seekers'],
    fee: 'Course-wise pricing | Bundle packages available',
    timeline: '1–4 Months',
  },
];

function ServiceCard({ service }) {
  const [expanded, setExpanded] = useState(false);
  const { icon: Icon, accent, badge, title, subtitle, overview, process, features,
    whoFor, countries, fee, timeline } = service;

  const waMessage = encodeURIComponent(
    `Hello Jnan-Vexa Technologies! 👋\n\nI am interested in your consultancy service:\n\n🎯 Service: ${title}\n⏱ Timeline: ${timeline}\n\nPlease share more details about the process, fees and next steps.\n\nThank you!`
  );

  return (
    <div className={`cc-card cc-card--${accent} fade-in`}>
      {/* Card header */}
      <div className="cc-card__header">
        <div className="cc-card__header-left">
          <div className={`cc-card__icon cc-card__icon--${accent}`}>
            <Icon size={26} strokeWidth={1.75} />
          </div>
          <div>
            <div className="cc-card__header-row">
              <h2 className="cc-card__title">{title}</h2>
              <span className={`cc-card__badge cc-card__badge--${accent}`}>{badge}</span>
            </div>
            <p className="cc-card__subtitle">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Quick info */}
      <div className="cc-card__meta">
        <div className="cc-meta-item">
          <Phone size={15} strokeWidth={2} />
          <span><strong>Fee:</strong> {fee}</span>
        </div>
        <div className="cc-meta-item">
          <Target size={15} strokeWidth={2} />
          <span><strong>Timeline:</strong> {timeline}</span>
        </div>
      </div>

      <p className="cc-card__overview">{overview}</p>

      {/* Who is this for */}
      <div className="cc-who-for">
        <span className="cc-who-for__label">
          <Users size={14} strokeWidth={2} /> Who is this for?
        </span>
        <div className="cc-who-tags">
          {whoFor.map((w) => (
            <span key={w} className={`cc-who-tag cc-who-tag--${accent}`}>{w}</span>
          ))}
        </div>
      </div>

      {/* Countries for abroad */}
      {countries && (
        <div className="cc-countries">
          <span className="cc-countries__label">
            <Globe size={14} strokeWidth={2} /> Top Destinations:
          </span>
          <div className="cc-country-tags">
            {countries.map((c) => (
              <span key={c} className="cc-country-tag">{c}</span>
            ))}
          </div>
        </div>
      )}

      {/* Process steps toggle */}
      <button
        className={`cc-toggle cc-toggle--${accent}`}
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <ClipboardList size={16} strokeWidth={2} />
        {expanded ? 'Hide Process & Features' : 'View Our Process & Features'}
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {expanded && (
        <div className="cc-expanded" aria-hidden={!expanded}>
          {/* How we work */}
          <div className="cc-process">
            <h3 className="cc-process__heading">Our Process</h3>
            <div className="cc-process__steps">
              {process.map((p) => (
                <div key={p.step} className="cc-process__step">
                  <div className={`cc-process__num cc-process__num--${accent}`}>{p.step}</div>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="cc-features">
            <h3 className="cc-features__heading">What's Included</h3>
            <div className="cc-features__grid">
              {features.map((f) => (
                <div key={f} className="cc-feature-item">
                  <CheckCircle2 size={15} strokeWidth={2.5} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp CTA */}
      <div className="cc-card__actions">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn cc-btn-whatsapp"
        >
          <MessageCircle size={18} />
          Enquire on WhatsApp
        </a>
        <Link to="/contact" className="btn btn-outline cc-btn-contact">
          Book Free Consultation
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}

export default function ConsultancyPage() {
  useFadeIn();

  useEffect(() => {
    document.title = 'Professional Consultancy – Jnan-Vexa Technologies';
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
          <span className="section-label" style={{ color: 'var(--teal)' }}>Professional Consultancy</span>
          <h1 className="page-hero__title">Your Career &amp; Global Opportunities Partner</h1>
          <p className="page-hero__desc">
            Expert guidance for career growth, international education, professional certifications
            and global work opportunities. We walk with you every step of the way.
          </p>
          <div className="cc-hero-badges">
            {['Job Assistance', 'Abroad Assistance', 'Certification Prep', 'Education Exams'].map((b) => (
              <span key={b} className="cc-hero-badge">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Free consultation bar */}
      <div className="cc-consult-bar">
        <div className="container cc-consult-bar__inner">
          <span>
            <Star size={16} />
            Free initial consultation available. Talk to our experts before you decide.
          </span>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I would like to book a free initial consultation with Jnan-Vexa Technologies for professional consultancy services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cc-consult-bar__btn"
          >
            <MessageCircle size={15} />
            Book Free Consultation
          </a>
        </div>
      </div>

      {/* Services */}
      <section className="cc-section section">
        <div className="container">
          <div className="cc-section__header">
            <span className="section-label">Our Consultancy Services</span>
            <h2 className="section-heading">How We Help You Succeed</h2>
            <p className="section-desc">
              Click <strong>"View Our Process & Features"</strong> on any service to see the full details,
              then contact us via WhatsApp for a free consultation.
            </p>
          </div>

          <div className="cc-cards">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Our Commitment</span>
            <h2 className="section-heading">Why Trust Jnan-Vexa for Consultancy?</h2>
          </div>
          <div className="cc-trust-grid">
            {[
              { icon: FileText, color: 'cyan', title: 'Personalised Guidance', desc: 'No one-size-fits-all. Every plan is tailored to your individual goals and background.' },
              { icon: GraduationCap, color: 'teal', title: 'Expert Knowledge', desc: 'Our consultants have deep expertise in career development, global education and certification pathways.' },
              { icon: Globe, color: 'purple', title: 'End-to-End Support', desc: 'We support you from the first consultation all the way to your final goal — step by step.' },
              { icon: Zap, color: 'teal', title: 'Transparent Process', desc: 'Clear timelines, honest advice and no hidden fees. We prioritise your success.' },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="cc-trust-card fade-in">
                <div className={`cc-trust-icon cc-trust-icon--${color}`}>
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
