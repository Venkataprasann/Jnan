import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhyUsSection from '../components/WhyUsSection';
import HowWeWorkSection from '../components/HowWeWorkSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import { useFadeIn } from '../hooks/useFadeIn';

export default function Home() {
  useFadeIn();

  useEffect(() => {
    document.title = 'Jnan-Vexa Technologies | Learn · Build · Grow Together';
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <HowWeWorkSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
