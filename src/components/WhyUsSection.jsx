import { Target, Users, Lightbulb, Heart } from 'lucide-react';
import './WhyUsSection.css';

const FEATURES = [
  {
    icon: Target,
    color: 'cyan',
    title: 'Practical Learning',
    desc: 'Focus on real-world skills, practical knowledge and project-based experience.',
  },
  {
    icon: Users,
    color: 'purple',
    title: 'Professional Guidance',
    desc: 'Get structured guidance to achieve your career and professional goals.',
  },
  {
    icon: Lightbulb,
    color: 'teal',
    title: 'Innovation-Driven Solutions',
    desc: 'Use modern technologies to develop efficient and scalable digital solutions.',
  },
  {
    icon: Heart,
    color: 'cyan',
    title: 'Customer-Centric Approach',
    desc: 'We focus on understanding your requirements and delivering reliable solutions.',
  },
];

export default function WhyUsSection() {
  return (
    <section className="whyus section" id="why-us" aria-labelledby="whyus-heading">
      <div className="container">
        <div className="whyus__header">
          <span className="section-label">Our Advantage</span>
          <h2 className="section-heading" id="whyus-heading">Why Choose Us?</h2>
          <p className="section-desc">
            We combine knowledge, professional guidance and technology to help people and businesses move forward.
          </p>
        </div>

        <div className="whyus__grid">
          {FEATURES.map(({ icon: Icon, color, title, desc }, i) => (
            <div
              key={title}
              className={`whyus__card fade-in fade-in-delay-${i + 1}`}
            >
              <div className={`whyus__icon whyus__icon--${color}`}>
                <Icon size={24} strokeWidth={1.75} />
              </div>
              <h3 className="whyus__title">{title}</h3>
              <p className="whyus__desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
