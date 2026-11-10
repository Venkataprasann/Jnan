import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './CTASection.css';

export default function CTASection() {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-section__bg" aria-hidden="true">
        <div className="cta-section__shape cta-section__shape--1" />
        <div className="cta-section__shape cta-section__shape--2" />
      </div>
      <div className="container">
        <div className="cta-section__content">
          <span className="cta-section__label">Ready to Get Started?</span>
          <h2 className="cta-section__heading" id="cta-heading">
            Ready to Learn, Grow or Build Something Amazing?
          </h2>
          <p className="cta-section__desc">
            Whether you want to upgrade your skills, explore global opportunities or build your
            next digital solution, Jnan-Vexa Technologies is here to help.
          </p>
          <div className="cta-section__actions">
            <Link to="/contact" className="btn btn-primary cta-section__btn-primary">
              Let's Talk
              <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn-ghost">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
