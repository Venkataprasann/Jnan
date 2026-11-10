import { useEffect } from 'react';
import ContactSection from '../components/ContactSection';
import { useFadeIn } from '../hooks/useFadeIn';
import './PageStyles.css';

export default function ContactPage() {
  useFadeIn();

  useEffect(() => {
    document.title = 'Contact Us – Jnan-Vexa Technologies';
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
          <span className="section-label" style={{ color: 'var(--cyan)' }}>Reach Out</span>
          <h1 className="page-hero__title">Contact Us</h1>
          <p className="page-hero__desc">
            Have a question? We'd love to hear from you. Send us a message and
            our team will get back to you as soon as possible.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
