import React, { useState } from 'react';
import '../styles/Skill.css';

// --- Ikon-ikon untuk Skill Card ---
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaFigma } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

// --- Ikon-ikon untuk Tombol Tab ---
import { CgWebsite } from "react-icons/cg"; 
import { FaServer } from "react-icons/fa";        
import { FiTool } from "react-icons/fi";         

// --- Database Skill ---
const skillsData = [
  { name: "HTML", icon: <FaHtml5 />, category: "frontend" },
  { name: "CSS", icon: <FaCss3Alt />, category: "frontend" },
  { name: "JavaScript", icon: <FaJs />, category: "frontend" },
  { name: "React", icon: <FaReact />, category: "frontend" },

  { name: "Node.js", icon: <FaNodeJs />, category: "backend" },
  { name: "Python", icon: <FaPython />, category: "backend" },
  { name: "Java", icon: <FaJava />, category: "backend" },
  { name: "Go", icon: <FaGolang />, category: "backend" },
  
  { name: "Figma", icon: <FaFigma />, category: "tools" },
  { name: "VS Code", icon: <VscVscode />, category: "tools" },
];

// Komponen Kartu Skill 
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
  const [activeTab, setActiveTab] = useState('frontend');

  const TABS = {
    frontend: { id: 'frontend', label: 'Frontend', icon: <CgWebsite /> },
    backend: { id: 'backend', label: 'Backend', icon: <FaServer /> },
    tools: { id: 'tools', label: 'Tools', icon: <FiTool /> },
  };

  return (
    <section id="skill" className="skill-section">
      <h2 className="section-title">My Skills</h2>
      
      <div className="skill-container-card">
        <div className="skill-tabs">
          {Object.values(TABS).map(tab => (
            <button 
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
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