// src/components/Home.jsx (Dengan Wadah Aksi)

import React from 'react';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

import '../styles/Home.css'; 

// ... (Ikon-ikon Anda tidak berubah)
const InstagramIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> );
const LinkedinIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> );
const TiktokIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 6.5a4.5 4.5 0 1 0 4.5 4.5V11H17V6.5a4.5 4.5 0 1 0-4.5 4.5V21h-4V11a4.5 4.5 0 0 0-4.5-4.5S2 11 2 15.5V21H7V11a4.5 4.5 0 0 0-4.5-4.5"/></svg> );
const GithubIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> );
const DownloadIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> );
const SendIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> );

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
        <span className="greeting">Halo, saya</span>
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
        
        {/* WADAH BARU UNTUK SOSIAL MEDIA & TOMBOL CTA */}
        <div className="actions-container">
          <div className="social-links">
            <a href="https://instagram.com/ryhnnas" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href="https://linkedin.com/in/ryhnnas" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
            <a href="https://tiktok.com/@ryhnnas" target="_blank" rel="noopener noreferrer"><TiktokIcon /></a>
            <a href="https://github.com/ryhnnas" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
          </div>
          <div className="cta-buttons">
            <a href="/CV_Reyhan Agra Syihab.pdf" className="cta-button primary" download>
              <DownloadIcon />
              <span>Download CV</span>
            </a>
            <a href="#contact" className="cta-button secondary">
              <SendIcon />
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