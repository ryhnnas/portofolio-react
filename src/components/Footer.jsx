import React from 'react';
import '../styles/Footer.css';

// --- ikon yang kita gunakan ---
import { FaInstagram, FaLinkedin, FaTiktok, FaGithub } from "react-icons/fa";
import { TfiUser } from "react-icons/tfi";
import { VscHome, VscCode, VscMail, VscLayers } from "react-icons/vsc";
import { FiBriefcase, FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
// ----------------------------------------------------

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Kolom 1: About Brand */}
        <div className="footer-about">
          <h3 className="footer-brand">Rey.</h3>
          <p>Membuat solusi digital yang inovatif dan estetik untuk kebutuhan modern.</p>
          <div className="footer-socials">
            <a href="https://github.com/ryhnnas" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com/in/ryhnnas" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://instagram.com/ryhnnas" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://tiktok.com/@ryhnnas" aria-label="TikTok"><FaTiktok /></a>
          </div>
        </div>

        {/* Kolom 2: Quick Links (Sekarang berisi 2 kolom) */}
        <div className="footer-links-container">
          <h4>Quick Links</h4>
          <div className="links-columns">
            <ul>
              <li><a href="#home"><VscHome size={20} /> Home</a></li>
              <li><a href="#about"><TfiUser size={18} /> About</a></li>
              <li><a href="#experience"><FiBriefcase size={20} /> Experience</a></li>
            </ul>
            <ul>
              <li><a href="#project"><VscLayers size={20} /> Projects</a></li>
              <li><a href="#skill"><VscCode size={20} /> Skills</a></li>
              <li><a href="#contact"><VscMail size={20} /> Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Kolom 3: Get in Touch */}
        <div className="footer-contact">
          <h4>Get in touch</h4>
          <ul>
            <li><VscMail size={20} /> <span>agrahans@gmail.com</span></li>
            <li><FiPhone size={20} /> <span>+62 895-3308-80053</span></li>
            <li><SlLocationPin size={20} /> <span>Bandung, Jawa Barat</span></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Reyhan Agra Syihab. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;