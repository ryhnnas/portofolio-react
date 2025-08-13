import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

import logoDark from '../assets/logo-dark.png';
import logoLight from '../assets/logo-light.png';

// --- ikon yang kita gunakan ---
import { TfiUser } from "react-icons/tfi";
import { VscHome, VscCode, VscMail, VscLayers } from "react-icons/vsc";
import { FiBriefcase, FiMoon, FiSun } from "react-icons/fi";
// ------------------------------------

const navLinks = [
  { id: 'home', icon: <VscHome size={25} />, label: 'Home' },
  { id: 'about', icon: <TfiUser size={20} />, label: 'About' },
  { id: 'experience', icon: <FiBriefcase size={20} />, label: 'Experience' },
  { id: 'skill', icon: <VscCode size={25} />, label: 'Skill' },
  { id: 'project', icon: <VscLayers size={25} />, label: 'Project' },
  { id: 'contact', icon: <VscMail size={25} />, label: 'Contact' },
];

const Header = () => {
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
    <>
      <a href="#home" className="site-logo-container" aria-label="Go to homepage">
        <img src={logoDark} alt="Logo RY" className="site-logo logo-dark" />
        <img src={logoLight} alt="Logo RY" className="site-logo logo-light" />
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
            {theme === 'dark' ? <FiSun size={20}/> : <FiMoon size={20} />}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;