import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2, BarChart3, Shield, Sparkles,
  Clock, IndianRupee, BookOpen, CheckCircle2,
  ArrowRight, ChevronDown, ChevronUp, MessageCircle,
  Users, Award, Zap, Star
} from 'lucide-react';
import CTASection from '../components/CTASection';
import { useFadeIn } from '../hooks/useFadeIn';
import './PageStyles.css';
import './TrainingPage.css';

const WHATSAPP_NUMBER = '910000000000'; // Replace with official WhatsApp number

const COURSES = [
  {
    id: 'fullstack',
    icon: Code2,
    accent: 'cyan',
    badge: 'Most Popular',
    title: 'Full Stack Development with AI Integration',
    subtitle: 'Web Development · AI Integration · Cloud Technologies',
    overview:
      'Master end-to-end web development combined with modern AI tools. Build production-ready applications using the latest frameworks and AI-powered features.',
    duration: '6 Months',
    fee: '₹25,000',
    feeNote: 'EMI available | Early bird discount applicable',
    mode: 'Online + Offline',
    level: 'Beginner to Advanced',
    certifications: ['Course Completion Certificate', 'Project Portfolio', 'Industry-Ready Profile'],
    highlights: ['Hands-on Projects', 'Expert Mentorship', 'Job Assistance', 'Live Sessions'],
    topics: [
      {
        module: 'Module 1 – Web Fundamentals',
        items: ['HTML5 & CSS3', 'Responsive Design', 'JavaScript ES6+', 'TypeScript Basics'],
      },
      {
        module: 'Module 2 – Frontend Development',
        items: ['React.js / Next.js', 'State Management (Redux)', 'Tailwind CSS', 'REST APIs & Axios'],
      },
      {
        module: 'Module 3 – Backend Development',
        items: ['Node.js & Express', 'Python & FastAPI', 'RESTful API Design', 'Authentication & Security'],
      },
      {
        module: 'Module 4 – Database & Cloud',
        items: ['SQL & NoSQL (MongoDB)', 'PostgreSQL', 'AWS / Azure Basics', 'Docker & Deployment'],
      },
      {
        module: 'Module 5 – AI Integration',
        items: ['OpenAI & Gemini APIs', 'AI-Powered Features', 'Prompt Engineering', 'LangChain Basics'],
      },
      {
        module: 'Module 6 – Projects & Placement',
        items: ['Capstone Project', 'GitHub Portfolio', 'Resume Building', 'Mock Interviews'],
      },
    ],
  },
  {
    id: 'data-analytics',
    icon: BarChart3,
    accent: 'teal',
    badge: 'High Demand',
    title: 'Data Analytics',
    subtitle: 'Data Insights · Visualization · Business Intelligence',
    overview:
      'Transform raw data into actionable business insights. Learn industry-standard tools used by top companies to drive data-driven decisions.',
    duration: '4 Months',
    fee: '₹18,000',
    feeNote: 'EMI available | Group discount on batch enrollment',
    mode: 'Online + Offline',
    level: 'Beginner to Intermediate',
    certifications: ['Data Analytics Certificate', 'Project Portfolio', 'Tool Proficiency Badge'],
    highlights: ['Real Datasets', 'Industry Projects', 'Dashboard Building', 'BI Tool Mastery'],
    topics: [
      {
        module: 'Module 1 – Python for Data Analytics',
        items: ['Python Basics', 'NumPy & Pandas', 'Data Cleaning & Wrangling', 'Exploratory Data Analysis'],
      },
      {
        module: 'Module 2 – Data Visualization',
        items: ['Matplotlib & Seaborn', 'Plotly Dashboards', 'Power BI', 'Tableau Fundamentals'],
      },
      {
        module: 'Module 3 – SQL & Databases',
        items: ['SQL for Analytics', 'Advanced SQL Queries', 'Database Design', 'ETL Processes'],
      },
      {
        module: 'Module 4 – Statistics & Analytics',
        items: ['Descriptive Statistics', 'Inferential Statistics', 'A/B Testing', 'Forecasting Basics'],
      },
      {
        module: 'Module 5 – Business Intelligence',
        items: ['BI Report Design', 'KPI Dashboards', 'Business Storytelling', 'Case Studies'],
      },
    ],
  },
  {
    id: 'cybersecurity',
    icon: Shield,
    accent: 'purple',
    badge: 'Career-Critical',
    title: 'Cybersecurity',
    subtitle: 'Protect · Detect · Respond',
    overview:
      'Build expertise in protecting digital assets. Learn offensive and defensive security techniques used by industry professionals worldwide.',
    duration: '5 Months',
    fee: '₹22,000',
    feeNote: 'EMI available | Scholarship for merit candidates',
    mode: 'Online + Offline',
    level: 'Beginner to Advanced',
    certifications: ['Cybersecurity Certificate', 'CEH Exam Prep', 'CompTIA Security+ Prep'],
    highlights: ['Lab Environments', 'Ethical Hacking', 'Certification Prep', 'Industry Projects'],
    topics: [
      {
        module: 'Module 1 – Security Fundamentals',
        items: ['Networking Basics', 'OSI Model & Protocols', 'CIA Triad', 'Threat Landscape'],
      },
      {
        module: 'Module 2 – Ethical Hacking',
        items: ['Reconnaissance', 'Vulnerability Assessment', 'Penetration Testing', 'Kali Linux'],
      },
      {
        module: 'Module 3 – Network Security',
        items: ['Firewalls & VPN', 'Intrusion Detection', 'Wireless Security', 'Network Monitoring'],
      },
      {
        module: 'Module 4 – Application Security',
        items: ['OWASP Top 10', 'Web App Pentesting', 'API Security', 'Secure Coding Practices'],
      },
      {
        module: 'Module 5 – Incident Response',
        items: ['Threat Detection', 'SIEM Tools', 'Digital Forensics', 'Incident Handling'],
      },
    ],
  },
  {
    id: 'gen-ai',
    icon: Sparkles,
    accent: 'cyan',
    badge: 'Future-Ready',
    title: 'Generative AI & Agentic AI',
    subtitle: 'Build Intelligent Applications · AI Automation · Innovation',
    overview:
      'Dive into the most exciting frontier in technology. Build intelligent AI agents, automate workflows and create next-generation AI-powered applications.',
    duration: '3 Months',
    fee: '₹15,000',
    feeNote: 'Early enrollment discount | Corporate batch pricing available',
    mode: 'Online',
    level: 'Intermediate (Basic Python needed)',
    certifications: ['Generative AI Certificate', 'Project Portfolio', 'AI Developer Profile'],
    highlights: ['Cutting-Edge Tools', 'Agent Building', 'Real AI Projects', 'Expert Instructors'],
    topics: [
      {
        module: 'Module 1 – AI & LLM Foundations',
        items: ['What is Generative AI', 'Large Language Models', 'Transformers Architecture', 'Prompt Engineering'],
      },
      {
        module: 'Module 2 – Working with AI APIs',
        items: ['OpenAI GPT APIs', 'Google Gemini API', 'Anthropic Claude', 'API Integration Patterns'],
      },
      {
        module: 'Module 3 – Agentic AI',
        items: ['AI Agents Architecture', 'LangChain & LangGraph', 'Tool Use & Function Calling', 'Multi-Agent Systems'],
      },
      {
        module: 'Module 4 – AI Application Development',
        items: ['RAG (Retrieval-Augmented Generation)', 'Vector Databases', 'AI Chatbots', 'AI Automation Workflows'],
      },
      {
        module: 'Module 5 – Projects',
        items: ['Capstone AI Project', 'Portfolio Building', 'Deployment to Production', 'Business Use Cases'],
      },
    ],
  },
];

function CourseCard({ course }) {
  const [expanded, setExpanded] = useState(false);
  const { icon: Icon, accent, badge, title, subtitle, overview, duration, fee, feeNote,
    mode, level, certifications, highlights, topics } = course;

  const waMessage = encodeURIComponent(
    `Hello Jnan-Vexa Technologies! 👋\n\nI am interested in enrolling for the following course:\n\n📚 Course: ${title}\n⏱ Duration: ${duration}\n💰 Fee: ${fee}\n\nPlease share more details about the next batch, schedule and enrollment process.\n\nThank you!`
  );

  return (
    <div className={`tc-card tc-card--${accent} fade-in`}>
      {/* Card header */}
      <div className="tc-card__header">
        <div className="tc-card__header-left">
          <div className={`tc-card__icon tc-card__icon--${accent}`}>
            <Icon size={24} strokeWidth={1.75} />
          </div>
          <div>
            <div className="tc-card__header-row">
              <h2 className="tc-card__title">{title}</h2>
              <span className={`tc-card__badge tc-card__badge--${accent}`}>{badge}</span>
            </div>
            <p className="tc-card__subtitle">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Quick info row */}
      <div className="tc-card__meta">
        <div className="tc-meta-item">
          <Clock size={15} strokeWidth={2} />
          <span><strong>Duration:</strong> {duration}</span>
        </div>
        <div className="tc-meta-item">
          <IndianRupee size={15} strokeWidth={2} />
          <span><strong>Fee:</strong> {fee}</span>
        </div>
        <div className="tc-meta-item">
          <Users size={15} strokeWidth={2} />
          <span><strong>Mode:</strong> {mode}</span>
        </div>
        <div className="tc-meta-item">
          <Star size={15} strokeWidth={2} />
          <span><strong>Level:</strong> {level}</span>
        </div>
      </div>

      <p className="tc-card__overview">{overview}</p>

      {/* Fee note */}
      <div className={`tc-fee-note tc-fee-note--${accent}`}>
        <Zap size={13} strokeWidth={2.5} />
        {feeNote}
      </div>

      {/* Highlights */}
      <div className="tc-highlights">
        {highlights.map((h) => (
          <span key={h} className={`tc-highlight tc-highlight--${accent}`}>
            <CheckCircle2 size={13} strokeWidth={2.5} />
            {h}
          </span>
        ))}
      </div>

      {/* Certifications */}
      <div className="tc-certs">
        <Award size={15} strokeWidth={1.75} />
        <span>
          {certifications.join(' · ')}
        </span>
      </div>

      {/* Curriculum toggle */}
      <button
        className={`tc-toggle tc-toggle--${accent}`}
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <BookOpen size={16} strokeWidth={2} />
        {expanded ? 'Hide Curriculum' : 'View Full Curriculum'}
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {expanded && (
        <div className="tc-curriculum">
          {topics.map((t) => (
            <div key={t.module} className="tc-module">
              <h4 className="tc-module__heading">{t.module}</h4>
              <ul className="tc-module__items">
                {t.items.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={13} strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* WhatsApp booking CTA */}
      <div className="tc-card__actions">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn tc-btn-enroll tc-btn-enroll--${accent}`}
        >
          <MessageCircle size={18} />
          Book This Course on WhatsApp
        </a>
        <Link to="/contact" className="btn btn-outline tc-btn-contact">
          Ask a Question
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}

export default function TrainingPage() {
  useFadeIn();

  useEffect(() => {
    document.title = 'Training Courses – Jnan-Vexa Technologies';
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
          <span className="section-label" style={{ color: 'var(--cyan)' }}>Training & Education</span>
          <h1 className="page-hero__title">Build Skills for Tomorrow</h1>
          <p className="page-hero__desc">
            Learn in-demand technologies through practical training, expert mentorship and real-world projects.
            Industry-focused courses designed for career success.
          </p>
          <div className="tc-hero-stats">
            <div className="tc-hero-stat">
              <strong>4+</strong>
              <span>Specialised Courses</span>
            </div>
            <div className="tc-hero-stat-divider" />
            <div className="tc-hero-stat">
              <strong>Hands-on</strong>
              <span>Project-Based Learning</span>
            </div>
            <div className="tc-hero-stat-divider" />
            <div className="tc-hero-stat">
              <strong>Expert</strong>
              <span>Industry Mentors</span>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp quick contact bar */}
      <div className="tc-whatsapp-bar">
        <div className="container tc-whatsapp-bar__inner">
          <span>
            <MessageCircle size={18} />
            Have questions about any course? Chat with us instantly on WhatsApp.
          </span>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I would like to know more about your training courses at Jnan-Vexa Technologies.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="tc-whatsapp-bar__btn"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Courses */}
      <section className="tc-section section">
        <div className="container">
          <div className="tc-section__header">
            <span className="section-label">Our Programmes</span>
            <h2 className="section-heading">Our Training Courses</h2>
            <p className="section-desc">
              Click <strong>"View Full Curriculum"</strong> on any course to see detailed topics,
              then book directly via WhatsApp.
            </p>
          </div>

          <div className="tc-cards">
            {COURSES.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why train with us */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Why Choose Our Training</span>
            <h2 className="section-heading">What Makes Us Different</h2>
          </div>
          <div className="tc-why-grid">
            {[
              { icon: Users, color: 'cyan', title: 'Expert Instructors', desc: 'Learn from industry professionals with real-world experience.' },
              { icon: BookOpen, color: 'teal', title: 'Structured Curriculum', desc: 'Carefully designed modules that progress logically from basics to advanced.' },
              { icon: Award, color: 'purple', title: 'Certification Support', desc: 'Guidance for industry certifications like AWS, Google, Microsoft.' },
              { icon: CheckCircle2, color: 'cyan', title: 'Job Assistance', desc: 'Resume prep, mock interviews and placement support after course completion.' },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className={`tc-why-card fade-in`}>
                <div className={`tc-why-icon tc-why-icon--${color}`}>
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
