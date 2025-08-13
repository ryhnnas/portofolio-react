import React from 'react';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import '../styles/Home.css'; 

// --- ikon yang kita gunakan ---
import { FaInstagram, FaLinkedin, FaTiktok, FaGithub } from "react-icons/fa";
import { RiDownloadFill } from "react-icons/ri";
import { FiSend } from "react-icons/fi";

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const options = {
      strings: ['Enthusiastic Web Developer','Mahasiswa Informatika'],
      typeSpeed: 75, backSpeed: 50, backDelay: 2000, loop: true,
    };
    const typed = new Typed(el.current, options);
    return () => { typed.destroy(); };
  }, []);

  return (
    <section id="home" className="home-container">
      <div className="home-content">
        <span className="greeting">👋 Halo, saya</span>
        <h1 className="name">
          <span className="highlight">Reyhan Agra</span> Syihab
        </h1>
        <h2 className="typing-effect-container">
          <span ref={el}></span>
        </h2>
        <p className="bio">
          Seorang mahasiswa yang passionate dalam pengembangan web dan teknologi, 
          selalu mencari cara untuk menciptakan solusi kreatif melalui kode.
        </p>
        
        <div className="actions-container">
          <div className="social-links">
            <a href="https://github.com/ryhnnas" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/ryhnnas" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://instagram.com/ryhnnas" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://tiktok.com/@ryhnnas" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          </div>
          <div className="cta-buttons">
            <a href="/CV_Reyhan Agra Syihab.pdf" className="cta-button primary" download>
              <RiDownloadFill size={25} />
              <span>Download CV</span>
            </a>
            <a href="#contact" className="cta-button secondary">
              <FiSend size={25} />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

      </div>
      <div className="home-image">
        <Spline scene="https://prod.spline.design/seF0jymfmDXIaYLg/scene.splinecode" />
      </div>
    </section>
  );
};

export default Home;