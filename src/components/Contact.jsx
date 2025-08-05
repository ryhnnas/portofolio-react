// src/components/Contact.jsx (Revisi Final)

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Contact.css'; // Impor file CSS

// --- Ikon-ikon yang kita butuhkan ---
const LinkedinIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> );
const GithubIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> );
const InstagramIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> );
const TiktokIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 6.5a4.5 4.5 0 1 0 4.5 4.5V11H17V6.5a4.5 4.5 0 1 0-4.5 4.5V21h-4V11a4.5 4.5 0 0 0-4.5-4.5S2 11 2 15.5V21H7V11a4.5 4.5 0 0 0-4.5-4.5"/></svg> );
const ConnectIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg> );
const MessageIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> );
const SendIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> );
// -----------------------------

const ContactForm = () => {
  // 2. Gunakan hook useForm dengan ID unik Anda
  const [state, handleSubmit] = useForm("mldnzngv"); // <-- GANTI DENGAN ID FORMSPREE ANDA

  // 3. Tampilkan pesan sukses jika state.succeeded bernilai true
  if (state.succeeded) {
    return (
      <div className="success-message">
        <h3>Pesan Terkirim!</h3>
        <p>Terima kasih telah menghubungi saya. Saya akan segera membalasnya.</p>
      </div>
    );
  }

  return (
    // 4. Hubungkan form dengan handleSubmit
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
            <SendIcon />
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
          <h3 className="column-title"><ConnectIcon /> Connect with me</h3>
          <div className="social-links-grid">
            <a href="https://linkedin.com/in/ryhnnas" target="_blank" rel="noopener noreferrer" className="social-card">
              <div className="social-icon"><LinkedinIcon /></div>
              <div className="social-text">
                <div className="social-handle"><strong>LinkedIn</strong><span>@ryhnnas</span></div>
                <p>Connect with me professionally and see my career journey.</p>
              </div>
            </a>
            <a href="https://github.com/ryhnnas" target="_blank" rel="noopener noreferrer" className="social-card">
              <div className="social-icon"><GithubIcon /></div>
              <div className="social-text">
                <div className="social-handle"><strong>GitHub</strong><span>@ryhnnas</span></div>
                <p>Follow my coding projects and contributions.</p>
              </div>
            </a>
            <a href="https://instagram.com/ryhnnas" target="_blank" rel="noopener noreferrer" className="social-card">
              <div className="social-icon"><InstagramIcon /></div>
              <div className="social-text">
                <div className="social-handle"><strong>Instagram</strong><span>@ryhnnas</span></div>
                <p>See my creative side and daily life snapshots.</p>
              </div>
            </a>
            <a href="https://tiktok.com/@ryhnnas" target="_blank" rel="noopener noreferrer" className="social-card">
              <div className="social-icon"><TiktokIcon /></div>
              <div className="social-text">
                <div className="social-handle"><strong>TikTok</strong><span>@ryhnnas</span></div>
                <p>Join me for short-form tech content and fun.</p>
              </div>
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Form Kontak */}
        <div className="form-column">
          <h3 className="column-title"><MessageIcon /> Send a message</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;