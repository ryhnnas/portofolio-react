import React, { useState, useEffect } from 'react';

// Impor semua komponen
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Ikon untuk tombol Back to Top
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

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
          <FaArrowUp size={25} />
        </button>
      )}
    </div>
  );
}

export default App;