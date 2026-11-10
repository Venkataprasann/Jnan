import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, ChevronDown } from 'lucide-react';
import './ContactSection.css';

const SERVICE_OPTIONS = [
  'Training Courses',
  'Professional Consultancy',
  'Web Application Development',
  'Mobile Application Development',
  'Custom Projects',
  'Business Support (BPO)',
  'Other',
];

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@jnanvexa.com',
    href: 'mailto:your.email@jnanvexa.com',
    note: '[Replace with official email]',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 00000 00000',
    href: 'tel:+910000000000',
    note: '[Replace with official phone number]',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Registered Office Address, City, State, India',
    href: null,
    note: '[Replace with registered office address]',
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!/^[+\d\s()-]{7,20}$/.test(form.phone)) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!form.service) errs.service = 'Please select a service.';
    if (!form.message.trim()) errs.message = 'Please enter a message.';
    else if (form.message.trim().length < 10) errs.message = 'Message should be at least 10 characters.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // Mailto fallback (replace with backend/Formspree/EmailJS when ready)
    const subject = encodeURIComponent(`Inquiry – ${form.service || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService Interested In: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:your.email@jnanvexa.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="contact section" id="contact" aria-labelledby="contact-heading">
        <div className="container">
          <div className="contact__success">
            <div className="contact__success-icon">
              <Send size={36} strokeWidth={1.5} />
            </div>
            <h3>Message Ready to Send!</h3>
            <p>Your default email client will open with the pre-filled message. Send it to reach our team.</p>
            <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        {/* Header */}
        <div className="contact__header">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-heading" id="contact-heading">
            Let's Start a Conversation
          </h2>
          <p className="section-desc">
            Have a question about our training programs, consultancy services or technology solutions?
            Get in touch with our team.
          </p>
        </div>

        <div className="contact__layout">
          {/* Form */}
          <div className="contact__form-wrapper">
            <form
              className="contact__form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="name" className="contact__label">
                    Full Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={`contact__input${errors.name ? ' error' : ''}`}
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    aria-required="true"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p className="contact__error" id="name-error" role="alert">{errors.name}</p>
                  )}
                </div>

                <div className="contact__field">
                  <label htmlFor="email" className="contact__label">
                    Email Address <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`contact__input${errors.email ? ' error' : ''}`}
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p className="contact__error" id="email-error" role="alert">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="phone" className="contact__label">
                    Phone Number <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={`contact__input${errors.phone ? ' error' : ''}`}
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    aria-required="true"
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p className="contact__error" id="phone-error" role="alert">{errors.phone}</p>
                  )}
                </div>

                <div className="contact__field">
                  <label htmlFor="service" className="contact__label">
                    Service Interested In <span aria-hidden="true">*</span>
                  </label>
                  <div className="contact__select-wrapper">
                    <select
                      id="service"
                      name="service"
                      className={`contact__select${errors.service ? ' error' : ''}`}
                      value={form.service}
                      onChange={handleChange}
                      aria-required="true"
                      aria-describedby={errors.service ? 'service-error' : undefined}
                    >
                      <option value="" disabled>Select a service</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <ChevronDown className="contact__select-arrow" size={16} aria-hidden="true" />
                  </div>
                  {errors.service && (
                    <p className="contact__error" id="service-error" role="alert">{errors.service}</p>
                  )}
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="message" className="contact__label">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`contact__textarea${errors.message ? ' error' : ''}`}
                  placeholder="Tell us about your requirement..."
                  value={form.message}
                  onChange={handleChange}
                  aria-required="true"
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p className="contact__error" id="message-error" role="alert">{errors.message}</p>
                )}
              </div>

              <button type="submit" className="btn btn-primary contact__submit">
                <Send size={16} />
                Send Message
              </button>

              <p className="contact__note">
                * This form opens your email client with a pre-filled message.
                We'll connect a backend submission system soon.
              </p>
            </form>
          </div>

          {/* Contact info sidebar */}
          <div className="contact__info">
            <div className="contact__info-card">
              <h3 className="contact__info-heading">Contact Information</h3>
              <p className="contact__info-company">
                Jnan-Vexa Technologies Private Limited
              </p>

              <div className="contact__info-items">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href, note }) => (
                  <div key={label} className="contact__info-item">
                    <div className="contact__info-icon">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="contact__info-label">{label}</p>
                      {href ? (
                        <a href={href} className="contact__info-value contact__info-link">
                          {value}
                        </a>
                      ) : (
                        <p className="contact__info-value">{value}</p>
                      )}
                      <p className="contact__info-note">{note}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/910000000000?text=Hello%2C%20I%27m%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="contact__whatsapp"
                aria-label="Contact us on WhatsApp"
              >
                <span className="contact__whatsapp-icon">
                  <MessageCircle size={20} strokeWidth={1.75} />
                </span>
                <span>
                  <strong>WhatsApp Us</strong>
                  <small>Quick response on WhatsApp</small>
                </span>
              </a>
              <p className="contact__whatsapp-note">
                [Replace WhatsApp number in code after official number is confirmed]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
