// src/components/Skill.jsx (Versi Tabulasi)

import React, { useState } from 'react';
import '../styles/Skill.css'; // Impor file CSS

// --- Ikon-ikon Skill (tetap sama) ---
const ReactIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor"><circle cx="0" cy="0" r="2.05"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse></g></svg> );
const HtmlIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m10 13-2 2 2 2"/><path d="m14 17 2-2-2-2"/></svg> );
const CssIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9.5V2.62a1 1 0 0 0-1.54-.85L3.3 8.3a1 1 0 0 0-.22 1.14l3.53 7.07a1 1 0 0 0 1.7 0l3.54-7.07a1 1 0 0 0 .22-1.14L9.5 2.62a1 1 0 0 1 2.08 0l2.25 4.5Z"/><path d="M12 14.5V22"/></svg> );
const JsIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 20v-6M7 20v-2.17a2 2 0 0 1 .586-1.414l5.455-5.455A2 2 0 0 1 14.455 9H17a2 2 0 0 1 2 2v2M7 16H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"/></svg> );
const NodeIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.49 14.286c.629-.08 1.139-1.21 1.139-2.286s-.51-2.206-1.14-2.286m-18.98 4.572C1.88 14.206 1.37 13.076 1.37 12s.51-2.206 1.14-2.286M12 2.876V21.125"/><path d="M12 2.876c-4.97 0-9 1.522-9 4.238 0 2.23 2.53 3.65 6.13 4.14m2.87 0c3.6.49 6.13 1.91 6.13 4.14 0 2.716-4.03 4.238-9 4.238"/></svg> );
const GitIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v4"/><path d="M12 20v-4"/><path d="M20 12h-4"/><path d="M4 12h4"/><path d="m19.07 4.93-3.53 3.53"/><path d="m4.93 19.07 3.53-3.53"/></svg> );
const FigmaIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M12 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/><path d="M12 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"/><path d="M12 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/><path d="M12 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/></svg> );
const GoIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 133 133" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M60.67 63.33H19.33v-10h41.34v10Zm1.22-22.5-9-9-19.5 19.5 19.5 19.5 9-9-10.5-10.5 10.5-10.5Zm20.44 22.5h41.34v-10H82.33v10Zm-1.22-22.5 9-9 19.5 19.5-19.5 19.5-9-9 10.5-10.5-10.5-10.5Z" fill="currentColor"/></svg> );
const JavaIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 12A.5.5 0 0 1 3 11.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm4.5.5a.5.5 0 0 0 0-1h1a.5.5 0 0 0 0 1h-1ZM14.5 12a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-3.5.5a.5.5 0 0 0 0-1h1a.5.5 0 0 0 0 1h-1Z" fill="currentColor"/><path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm.5-11a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 1 0V10Zm-4 1.5a.5.5 0 0 0-1 0V13a.5.5 0 0 0 1 0v-1.5Zm8 0a.5.5 0 0 0-1 0V13a.5.5 0 0 0 1 0v-1.5Z" fill="currentColor"/></svg> );
const PythonIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 13.5v-1a2 2 0 1 1 4 0v1m-4 1v1a2 2 0 1 0 4 0v-1m-4-7v-1a2 2 0 1 0-4 0v1m4 1v1a2 2 0 1 1-4 0v-1m10-2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM7 15a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" fill="currentColor"/></svg> );

// --- Database Skill (tetap sama) ---
const skillsData = [
  { name: "HTML", icon: <HtmlIcon />, category: "frontend" },
  { name: "CSS", icon: <CssIcon />, category: "frontend" },
  { name: "JavaScript", icon: <JsIcon />, category: "frontend" },
  { name: "React", icon: <ReactIcon />, category: "frontend" },

  { name: "Node.js", icon: <NodeIcon />, category: "backend" },
  { name: "Python", icon: <PythonIcon />, category: "backend" }, // <-- TAMBAHKAN INI
  { name: "Java", icon: <JavaIcon />, category: "backend" },     // <-- TAMBAHKAN INI
  { name: "Go", icon: <GoIcon />, category: "backend" },
  
  { name: "Git", icon: <GitIcon />, category: "tools" },
  { name: "Figma", icon: <FigmaIcon />, category: "tools" },
];

// Komponen Kartu Skill (tetap sama)
const SkillCard = ({ skill }) => (
  <div className="skill-card">
    <div className="skill-card-inner">
      <div className="skill-card-front">
        {skill.icon}
        <p>{skill.name}</p>
      </div>
      <div className="skill-card-back">
        {skill.icon}
        <p>{skill.name}</p>
      </div>
    </div>
  </div>
);

const Skill = () => {
  // State untuk melacak tab aktif, default 'frontend'
  const [activeTab, setActiveTab] = useState('frontend');

  const TABS = ['frontend', 'backend', 'tools'];

  return (
    <section id="skill" className="skill-section">
      <h2 className="section-title">My Skills</h2>
      
      <div className="skill-container-card">
        <div className="skill-tabs">
          {TABS.map(tab => (
            <button 
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {/* Mengubah 'frontend' menjadi 'Frontend', dst. */}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="skill-tab-content">
          <div className="skill-grid">
            {skillsData
              .filter(skill => skill.category === activeTab)
              .map((skill, index) => <SkillCard key={index} skill={skill} />)
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;