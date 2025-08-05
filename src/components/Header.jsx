// src/components/Header.jsx (Solusi 1: Logo Terpisah)

import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import logo from '../assets/logo-ry.png';

// --- Ikon-ikon Navigasi (tetap sama) ---
const HomeIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> );
const UserIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> );
const ExperienceIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> );
const SkillIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5v-17"/><path d="M18.5 15v-6"/><path d="M5.5 15v-6"/></svg> );
const ProjectIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg> );
const ContactIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> );
const SunIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> );
const MoonIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> );
// ------------------------------------

const navLinks = [
  { id: 'home', icon: <HomeIcon />, label: 'Home' },
  { id: 'about', icon: <UserIcon />, label: 'About' },
  { id: 'experience', icon: <ExperienceIcon />, label: 'Experience' },
  { id: 'skill', icon: <SkillIcon />, label: 'Skill' },
  { id: 'project', icon: <ProjectIcon />, label: 'Project' },
  { id: 'contact', icon: <ContactIcon />, label: 'Contact' },
];

const Header = () => {
  // Semua state dan useEffect tetap sama, tidak perlu diubah
  const [theme, setTheme] = useState('light');
  const [activeLink, setActiveLink] = useState('home');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };
  
  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, []);
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      let current = 'home';
      sections.forEach(section => {
        if (section) {
          if (window.scrollY >= section.offsetTop - 150) {
            current = section.id;
          }
        }
      });
      setActiveLink(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Kita gunakan React Fragment (<>) untuk membungkus dua elemen yang terpisah
    <>
      <a href="#home" className="site-logo-container" aria-label="Go to homepage">
        <img src={logo} alt="Logo RY" className="site-logo" />
      </a>

      <header className="header-pill-container">
        <nav className="header-pill">
          <div className="nav-links">
            {navLinks.map(link => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
                aria-label={link.label}
              >
                {link.icon}
                <span className="link-label">{link.label}</span>
              </a>
            ))}
          </div>

          <button onClick={toggleTheme} className="theme-toggle-button" aria-label="Toggle theme">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;