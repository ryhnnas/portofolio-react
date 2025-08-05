// src/components/Experience.jsx (Versi Hybrid: Tab Horizontal + Timeline Card)

import React, { useState } from 'react';
import '../styles/Experience.css'; // Impor file CSS

// --- Ikon yang kita gunakan ---
const WorkIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> );
const EducationIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 3 4 5 6 5s6-2 6-5v-5"></path></svg> );
const AchievementIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V2M12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zM8.5 13.5L4 22h16l-4.5-8.5M12 8l-2.5 5.5L4 15l8 2 8-2-5.5-1.5L12 8z"/></svg> );
const ConstructionIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM21 12H3"/><path d="M12 21V3"/><path d="M4 16l-2-4 2-4"/><path d="M20 16l2-4-2-4"/></svg> );
// ----------------------------


const Experience = () => {
  const [activeTab, setActiveTab] = useState('education');

  const renderContent = () => {
    switch (activeTab) {
      case 'education':
        return (
          <div className="content-panel education-timeline">
            {/* Kartu untuk Universitas */}
            <div className="timeline-card">
              <div className="education-header">
                <div className="header-left">
                  <h3>Telkom University</h3>
                  <h4>Informatika</h4>
                </div>
                <div className="header-right">
                  <span className="date">2023 - Sekarang</span>
                  <span className="location">Bandung, Indonesia</span>
                </div>
              </div>
              <p className="description">
                Fokus pada pengembangan perangkat lunak dan ilmu komputer, dengan penekanan khusus pada web development dan teknologi terkini.
              </p>
              <ul>
                <li>Aktif dalam organisasi kampus</li>
                <li>Berpartisipasi dalam project tim</li>
              </ul>
            </div>

            {/* Kartu untuk SMA */}
            <div className="timeline-card">
              <div className="education-header">
                <div className="header-left">
                  <h3>SMA Negeri 3 Kuningan</h3>
                  <h4>MIPA</h4>
                </div>
                <div className="header-right">
                  <span className="date">2020 - 2023</span>
                  <span className="location">Kuningan, Jawa Barat</span>
                </div>
              </div>
              <p className="description">
                Mengembangkan dasar yang kuat dalam matematika dan sains, yang menjadi fondasi penting untuk studi informatika.
              </p>
               <ul>
                <li>Mengikuti perlombaan matematika dan sains</li>
                <li>Partisipasi aktif dalam kegiatan ekstrakurikuler</li>
              </ul>
            </div>
          </div>
        );
      case 'work':
      case 'achievement':
      default:
        return (
          <div className="content-panel coming-soon">
            <ConstructionIcon />
            <h3>Konten Segera Hadir</h3>
            <p>Bagian ini sedang saya persiapkan. Silakan cek kembali nanti.</p>
          </div>
        );
    }
  };

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">My Journey</h2>
      <div className="experience-card">
        <div className="tabs">
          <button className={`tab-button ${activeTab === 'work' ? 'active' : ''}`} onClick={() => setActiveTab('work')}>
            <WorkIcon /><span>Work Experience</span>
          </button>
          <button className={`tab-button ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}>
            <EducationIcon /><span>Education</span>
          </button>
          <button className={`tab-button ${activeTab === 'achievement' ? 'active' : ''}`} onClick={() => setActiveTab('achievement')}>
            <AchievementIcon /><span>Achievement</span>
          </button>
        </div>
        <div className="tab-content-area">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default Experience;