import { useEffect } from 'react';
import ServicesSection from '../components/ServicesSection';
import CTASection from '../components/CTASection';
import { useFadeIn } from '../hooks/useFadeIn';
import './PageStyles.css';

export default function ServicesPage() {
  useFadeIn();

  useEffect(() => {
    document.title = 'Our Services – Jnan-Vexa Technologies';

    // Handle hash scrolling
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
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
          <span className="section-label" style={{ color: 'var(--cyan)' }}>What We Offer</span>
          <h1 className="page-hero__title">Our Services</h1>
          <p className="page-hero__desc">
            Three powerful business verticals designed to help you learn, grow and build —
            all under one trusted technology company.
          </p>
        </div>
      </section>

      <ServicesSection />
      <CTASection />
    </>
  );
}
