import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Code2, ArrowRight } from 'lucide-react';
import './AboutSection.css';

const FEATURES = [
  {
    icon: BookOpen,
    color: 'cyan',
    title: 'Learn',
    desc: 'Build industry-relevant skills through practical, career-focused training.',
  },
  {
    icon: TrendingUp,
    color: 'teal',
    title: 'Grow',
    desc: 'Get professional guidance, career assistance and global opportunities.',
  },
  {
    icon: Code2,
    color: 'purple',
    title: 'Build',
    desc: 'Transform ideas into scalable digital products and business solutions.',
  },
];

export default function AboutSection() {
  return (
    <section className="about section" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about__layout">
          {/* Left content */}
          <div className="about__content">
            <span className="section-label">Who We Are</span>
            <h2 className="section-heading" id="about-heading">
              Building the Future,<br />One Skill at a Time
            </h2>
            <p className="about__desc">
              Jnan-Vexa Technologies Private Limited is a technology-driven company committed to
              empowering individuals, supporting career growth and delivering innovative digital solutions.
            </p>
            <p className="about__desc about__desc--mt">
              Through our three core business verticals – Training, Consultancy and Technology Services –
              we help students develop future-ready skills, professionals explore global opportunities
              and businesses turn their ideas into powerful digital solutions.
            </p>
            <Link to="/services" className="btn btn-outline about__cta">
              Discover Our Services
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right feature blocks */}
          <div className="about__features">
            {FEATURES.map(({ icon: Icon, color, title, desc }, i) => (
              <div
                key={title}
                className={`about__feature about__feature--${color} fade-in fade-in-delay-${i + 1}`}
              >
                <div className={`about__feature-icon about__feature-icon--${color}`}>
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="about__feature-title">{title}</h3>
                  <p className="about__feature-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
