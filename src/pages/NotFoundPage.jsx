import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import './PageStyles.css';

export default function NotFoundPage() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: 'var(--navy-dark)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem 1.25rem',
      }}
    >
      <div>
        <div
          style={{
            fontSize: 'clamp(5rem, 20vw, 8rem)',
            fontWeight: 800,
            fontFamily: 'var(--font-heading)',
            lineHeight: 1,
            background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem',
          }}
        >
          404
        </div>
        <h1
          style={{
            fontSize: 'clamp(1.4rem, 4vw, 2rem)',
            color: 'var(--white)',
            fontFamily: 'var(--font-heading)',
            marginBottom: '1rem',
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '1rem',
            maxWidth: '400px',
            margin: '0 auto 2rem',
            lineHeight: 1.75,
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={18} />
            Go Home
          </Link>
          <Link to="/contact" className="btn btn-ghost">
            <ArrowLeft size={18} />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
