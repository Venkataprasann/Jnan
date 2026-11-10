import { Link } from 'react-router-dom';
import {
  Code2, BarChart3, Shield, Sparkles,
  Briefcase, Plane, Award, BookMarked,
  Globe, Smartphone, Settings, Headphones,
  ArrowRight, CheckCircle2
} from 'lucide-react';
import './ServicesSection.css';

const VERTICALS = [
  {
    id: 'training',
    accent: 'cyan',
    label: 'Vertical 01',
    heading: 'Build Skills for Tomorrow',
    desc: 'Learn in-demand technologies through practical training, expert mentorship and real-world projects.',
    highlight: ['Hands-on Training', 'Expert Mentors', 'Real Projects', 'Certification Support'],
    cta: 'Explore Training',
    ctaLink: '/training',
    items: [
      {
        icon: Code2,
        title: 'Full Stack Development with AI',
        tags: ['Web Development', 'AI Integration', 'Cloud Technologies'],
      },
      {
        icon: BarChart3,
        title: 'Data Analytics',
        tags: ['Data Insights', 'Visualization', 'Business Intelligence'],
      },
      {
        icon: Shield,
        title: 'Cybersecurity',
        tags: ['Protect', 'Detect', 'Respond'],
      },
      {
        icon: Sparkles,
        title: 'Generative AI & Agentic AI',
        tags: ['Intelligent Apps', 'AI Automation', 'Innovation'],
      },
    ],
  },
  {
    id: 'consultancy',
    accent: 'teal',
    label: 'Vertical 02',
    heading: 'Your Career & Global Opportunities Partner',
    desc: 'We support individuals in achieving their professional, educational and international career goals.',
    highlight: ['Expert Guidance', 'Career Support', 'End-to-End Assistance'],
    cta: 'Explore Consultancy',
    ctaLink: '/consultancy',
    items: [
      {
        icon: Briefcase,
        title: 'Job Assistance',
        tags: ['Resume Prep', 'Interview Prep', 'Placement Assistance'],
      },
      {
        icon: Plane,
        title: 'Abroad Assistance',
        tags: ['Study Abroad', 'Work Opportunities', 'PR Guidance'],
      },
      {
        icon: Award,
        title: 'Certification Exam Assistance',
        tags: ['Microsoft', 'AWS', 'Google', 'Professional Certs'],
      },
      {
        icon: BookMarked,
        title: 'International & Higher Education Exams',
        tags: ['IELTS', 'GRE', 'Language Exams'],
      },
    ],
  },
  {
    id: 'technology',
    accent: 'purple',
    label: 'Vertical 03',
    heading: 'Transform Your Ideas into Powerful Solutions',
    desc: 'We build modern, scalable and reliable digital solutions that help businesses innovate and grow.',
    highlight: ['Your Vision', 'Our Technology', 'Reliable', 'On Time'],
    cta: 'Explore IT Services',
    ctaLink: '/it-services',
    items: [
      {
        icon: Globe,
        title: 'Web Application Development',
        tags: ['Modern', 'Scalable', 'Responsive'],
      },
      {
        icon: Smartphone,
        title: 'Mobile Application Development',
        tags: ['Android', 'iOS', 'Cross-Platform'],
      },
      {
        icon: Settings,
        title: 'Custom Software & Projects',
        tags: ['Tailored Solutions', 'Your Requirements'],
      },
      {
        icon: Headphones,
        title: 'Business Support Services (BPO)',
        tags: ['Data Entry', 'Back Office', 'Admin Support'],
      },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="services section" id="services" aria-labelledby="services-heading">
      <div className="container">
        {/* Header */}
        <div className="services__header">
          <span className="section-label">What We Offer</span>
          <h2 className="section-heading" id="services-heading">
            Three Ways We Help You Succeed
          </h2>
          <p className="section-desc">
            From skill development to global career support and cutting-edge digital solutions —
            we cover everything you need to move forward.
          </p>
        </div>

        {/* Verticals */}
        <div className="services__verticals">
          {VERTICALS.map((v, vi) => (
            <div
              key={v.id}
              id={v.id}
              className={`services__vertical services__vertical--${v.accent} fade-in`}
              style={{ transitionDelay: `${vi * 0.1}s` }}
            >
              {/* Vertical header */}
              <div className="services__v-header">
                <div className="services__v-meta">
                  <span className={`services__v-label services__v-label--${v.accent}`}>
                    {v.label}
                  </span>
                  <h3 className="services__v-heading">{v.heading}</h3>
                  <p className="services__v-desc">{v.desc}</p>
                </div>

                {/* Highlights */}
                <div className="services__v-highlights">
                  {v.highlight.map((h) => (
                    <span key={h} className={`services__v-tag services__v-tag--${v.accent}`}>
                      <CheckCircle2 size={13} strokeWidth={2.5} />
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service items grid */}
              <div className="services__v-grid">
                {v.items.map(({ icon: Icon, title, tags }) => (
                  <div key={title} className={`services__item services__item--${v.accent}`}>
                    <div className={`services__item-icon services__item-icon--${v.accent}`}>
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <div className="services__item-body">
                      <h4 className="services__item-title">{title}</h4>
                      <div className="services__item-tags">
                        {tags.map((t) => (
                          <span key={t} className="services__item-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="services__v-cta">
                <Link
                  to={v.ctaLink}
                  className={`btn services__v-btn services__v-btn--${v.accent}`}
                >
                  {v.cta}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
