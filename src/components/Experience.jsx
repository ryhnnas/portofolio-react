import React, { useState } from 'react';
import '../styles/Experience.css';

// --- Ikon yang kita gunakan ---
import { VscMortarBoard } from "react-icons/vsc";
import { FiBriefcase } from "react-icons/fi";
import { TfiMedall } from "react-icons/tfi";
import { MdApartment } from "react-icons/md";
import { IoHourglassOutline } from "react-icons/io5";
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
                  <h3> < MdApartment /> Telkom University</h3>
                  <h4>Informatika</h4>
                </div>
                <div className="header-right">
                  <span className="date">2023 - Sekarang</span>
                  <span className="location">Bandung, Jawa Barat</span>
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
                  <h3> < MdApartment /> SMA Negeri 3 Kuningan</h3>
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
            <IoHourglassOutline size={50} />
            <h3>Konten Segera Hadir</h3>
            <p>Bagian ini sedang saya persiapkan. Silakan cek kembali nanti.</p>
          </div>
        );
    }
  };

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">My Experience</h2>
      <div className="experience-card">
        <div className="tabs">
          <button className={`tab-button ${activeTab === 'work' ? 'active' : ''}`} onClick={() => setActiveTab('work')}>
            <FiBriefcase /><span>Work Experience</span>
          </button>
          <button className={`tab-button ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}>
            <VscMortarBoard /><span>Education</span>
          </button>
          <button className={`tab-button ${activeTab === 'achievement' ? 'active' : ''}`} onClick={() => setActiveTab('achievement')}>
            <TfiMedall /><span>Certificate</span>
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