import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

const WHATSAPP_NUMBER = '910000000000'; // Replace with official WhatsApp number

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    'Hello! I would like to know more about Jnan-Vexa Technologies\' services.'
  );

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="floating-wa__pulse" aria-hidden="true" />
      <MessageCircle size={26} strokeWidth={2} />
      <span className="floating-wa__label">Chat with us</span>
    </a>
  );
}
