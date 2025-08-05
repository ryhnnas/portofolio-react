// src/components/About.jsx (Versi Baru)

import React from 'react';

// Impor file CSS dari folder styles
import '../styles/About.css';

// Impor foto profil
import profilePic from '../assets/foto-saya.jpg'; 

// --- Koleksi Ikon SVG untuk Informasi Personal ---
const UserIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> );
const EducationIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 3 4 5 6 5s6-2 6-5v-5"></path></svg> );
const PhoneIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> );
const LocationIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> );
const EmailIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> );
const StatusIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg> );
const ReactIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" width="24" height="24" fill="currentColor"><circle cx="0" cy="0" r="2.05"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse></g></svg> );
// ----------------------------------------------------


const About = () => {
  return (
    <section id="about" className="about-container">
      <h2 className="section-title">About Me</h2>

      <div className="about-main-content">
        <div className="about-image">
          <img src={profilePic} alt="Foto Reyhan Agra Syihab" />
        </div>

        <div className="about-info-card">
          <p className="bio-paragraph">
            Saya adalah mahasiswa Informatika di Telkom University dengan passion mendalam di bidang pengembangan web dan teknologi. Dengan latar belakang yang kuat di Matematika dan Sains, saya selalu berusaha menggabungkan logika dengan kreativitas dalam setiap proyek yang saya kerjakan.
          </p>

          <div className="info-grid">
            <div className="info-item-box"><UserIcon /><div><strong>Nama:</strong><span>Reyhan Agra Syihab</span></div></div>
            <div className="info-item-box"><EducationIcon /><div><strong>Pendidikan:</strong><span>S1 Informatika, Tel-U</span></div></div>
            <div className="info-item-box"><PhoneIcon /><div><strong>Phone:</strong><span>+62 812-3456-7890</span></div></div>
            <div className="info-item-box"><LocationIcon /><div><strong>Domisili:</strong><span>Bandung, Jawa Barat</span></div></div>
            <div className="info-item-box"><EmailIcon /><div><strong>Email:</strong><span>agrahans@gmail.com</span></div></div>
            <div className="info-item-box"><StatusIcon /><div><strong>Status:</strong><span>Mahasiswa Aktif</span></div></div>
          </div>

          <hr className="separator" />

          <div className="focus-section">
            <h3>Interest & Focus</h3>
            <div className="focus-pills">
              <div className="focus-pill">Frontend Development</div>
              <div className="focus-pill"><ReactIcon /> React.js</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;