// src/App.jsx (dengan tombol Back to Top)

import React, { useState, useEffect } from 'react'; // <-- Impor useState dan useEffect

// Impor semua komponenmu (tetap sama)
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Ikon untuk tombol Back to Top
const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

function App() {
  // --- LOGIKA UNTUK TOMBOL BACK TO TOP ---
  // 1. State untuk melacak visibilitas tombol
  const [isVisible, setIsVisible] = useState(false);

  // 2. Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Scroll ke atas dengan mulus
    });
  };

  // 3. Efek untuk memunculkan/menyembunyikan tombol berdasarkan posisi scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) { // Muncul setelah scroll 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup: Hapus event listener saat komponen tidak lagi ditampilkan
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  // ------------------------------------

  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Experience />
        <Skill />
        <Project />
        <Contact />
      </main>
      <Footer />

      {/* --- Tampilkan tombol jika isVisible bernilai true --- */}
      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top-button" aria-label="Go to top">
          <ArrowUpIcon />
        </button>
      )}
    </div>
  );
}

export default App;