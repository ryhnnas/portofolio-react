import React from 'react';
import '../styles/About.css';

// Impor foto profil
import profilePic from '../assets/foto-saya.jpg'; 

// --- ikon yang kita gunakan ---
import { FiPhone, FiUser } from "react-icons/fi";
import { VscMail, VscMortarBoard } from "react-icons/vsc";
import { SlLocationPin, SlDoc } from "react-icons/sl";
import { FaReact } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg"; 
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
            <div className="info-item-box"><FiUser /><div><strong>Nama:</strong><span>Reyhan Agra Syihab</span></div></div>
            <div className="info-item-box"><VscMortarBoard /><div><strong>Pendidikan:</strong><span>S1 Informatika, Tel-U</span></div></div>
            <div className="info-item-box"><FiPhone /><div><strong>Phone:</strong><span>+62 895-3308-80053</span></div></div>
            <div className="info-item-box"><SlLocationPin /><div><strong>Domisili:</strong><span>Bandung, Jawa Barat</span></div></div>
            <div className="info-item-box"><VscMail /><div><strong>Email:</strong><span>agrahans@gmail.com</span></div></div>
            <div className="info-item-box"><SlDoc /><div><strong>Status:</strong><span>Mahasiswa Aktif</span></div></div>
          </div>

          <hr className="separator" />

          <div className="focus-section">
            <h3>Interest & Focus</h3>
            <div className="focus-pills">
              <div className="focus-pill"> < CgWebsite size={20} /> Frontend Development</div>
              <div className="focus-pill"><FaReact size={20} /> React.js</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;