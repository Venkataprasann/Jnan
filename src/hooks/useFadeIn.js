import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useFadeIn() {
  const location = useLocation();

  useEffect(() => {
    // Reset all fade-in elements on route change, then re-observe
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => el.classList.remove('visible'));

    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
      );

      const els = document.querySelectorAll('.fade-in');
      els.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 80);

    return () => clearTimeout(timer);
  }, [location.pathname]);
}
