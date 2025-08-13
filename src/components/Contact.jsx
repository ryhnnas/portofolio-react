import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Contact.css';

// --- ikon yang kita gunakan ---
import { FaInstagram, FaLinkedin, FaTiktok, FaGithub } from "react-icons/fa";
import { VscMail } from "react-icons/vsc";
import { FiSend, FiLink } from "react-icons/fi";
// -----------------------------

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mldnzngv");

  if (state.succeeded) {
    return (
      <div className="success-message">
        <h3>Pesan Terkirim!</h3>
        <p>Terima kasih telah menghubungi saya. Saya akan segera membalasnya.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Nama</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your@example.com" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="error-message" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subjek</label>
        <input type="text" id="subject" name="subject" placeholder="Diskusi Proyek" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Pesan</label>
        <textarea id="message" name="message" placeholder="Halo, saya tertarik untuk..." rows="5" required></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} className="error-message" />
      </div>
      <button type="submit" className="submit-button" disabled={state.submitting}>
        {state.submitting ? 'Mengirim...' : (
          <>
            <span>Send Message</span>
            <FiSend />
          </>
        )}
      </button>
    </form>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-layout">
        {/* Kolom Kiri: Info Kontak & Sosial Media */}
        <div className="connect-column">
          <h3 className="column-title"><FiLink /> Connect with me</h3>
          <div className="social-links-grid">
            <a href="https://github.com/ryhnnas" target="_blank" rel="noopener noreferrer" className="social-card">
              <div className="social-icon"><FaGithub /></div>
              <div className="social-text">
                <div className="social-handle"><strong>GitHub</strong><span>@ryhnnas</span></div>
                <p>Follow my coding projects and contributions.</p>
              </div>
            </a>
            <a href="https://linkedin.com/in/ryhnnas" target="_blank" rel="noopener noreferrer" className="social-card">
              <div className="social-icon"><FaLinkedin /></div>
              <div className="social-text">
                <div className="social-handle"><strong>LinkedIn</strong><span>@ryhnnas</span></div>
                <p>Connect with me professionally and see my career journey.</p>
              </div>
            </a>
            <a href="https://instagram.com/ryhnnas" target="_blank" rel="noopener noreferrer" className="social-card">
              <div className="social-icon"><FaInstagram /></div>
              <div className="social-text">
                <div className="social-handle"><strong>Instagram</strong><span>@ryhnnas</span></div>
                <p>See my creative side and daily life snapshots.</p>
              </div>
            </a>
            <a href="https://tiktok.com/@ryhnnas" target="_blank" rel="noopener noreferrer" className="social-card">
              <div className="social-icon"><FaTiktok /></div>
              <div className="social-text">
                <div className="social-handle"><strong>TikTok</strong><span>@ryhnnas</span></div>
                <p>Join me for short-form tech content and fun.</p>
              </div>
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Form Kontak */}
        <div className="form-column">
          <h3 className="column-title"><VscMail /> Send a message</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;