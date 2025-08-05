// src/components/Project.jsx (Dengan Sistem Tabulasi)

import React, { useState } from 'react';
import '../styles/Project.css';

// --- Impor Gambar Proyek ---
import projectImage1 from '../assets/ecommerce.png';
import projectImage2 from '../assets/todo.png';
import projectImage3 from '../assets/respmknn.png';

// --- Ikon-ikon ---
const GithubIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> );
const ExternalLinkIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg> );
const ReactIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" width="20" height="20" fill="currentColor"><circle cx="0" cy="0" r="2.05"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse></g></svg> );
const ComingSoonIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM21 12H3"/><path d="M12 21V3"/><path d="M4 16l-2-4 2-4"/><path d="M20 16l2-4-2-4"/></svg> );

// --- DATABASE PROYEK ---
// Tambahkan properti 'category': 'web', 'mobile', atau 'design'
const projectsData = [
  {
    id: 1,
    title: "Website Portofolio Pribadi",
    image: projectImage1,
    description: "Portofolio interaktif yang dibangun dari awal untuk menampilkan proyek dan keahlian.",
    technologies: ["React", "Vite", "CSS"],
    githubLink: "https://github.com/username/portofolio",
    demoLink: "#",
    category: "web",
  },
  {
    id: 2,
    title: "Aplikasi E-Commerce",
    image: projectImage2,
    description: "Platform e-commerce dengan fitur keranjang belanja dan halaman produk.",
    technologies: ["React", "Node.js"],
    githubLink: "https://github.com/username/ecommerce",
    demoLink: "#",
    category: "web",
  },
  {
    id: 3,
    title: "Aplikasi Resep Masakan",
    image: projectImage3,
    description: "Aplikasi mobile untuk mencari dan menyimpan resep masakan favorit.",
    technologies: ["React Native", "Firebase"],
    githubLink: "https://github.com/username/resep-app",
    demoLink: "#",
    category: "web",
  },
  // Contoh untuk kategori lain (bisa di-uncomment jika sudah ada proyeknya)
  // {
  //   id: 3,
  //   title: "Aplikasi Resep Masakan",
  //   image: projectImageMobile,
  //   description: "Aplikasi mobile untuk mencari dan menyimpan resep masakan favorit.",
  //   technologies: ["React Native", "Firebase"],
  //   githubLink: "https://github.com/username/resep-app",
  //   demoLink: "#",
  //   category: "mobile",
  // },
];

const ProjectCard = ({ project }) => (
    <div className="project-card">
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-overlay">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link"><GithubIcon /></a>
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link"><ExternalLinkIcon /></a>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech-stack">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-pill">
              {tech === "React" && <ReactIcon />}
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
);

const Project = () => {
  const [activeTab, setActiveTab] = useState('web');
  const TABS = ['web', 'mobile', 'design'];
  const TAB_LABELS = {
    web: 'Web Projects',
    mobile: 'Mobile Apps',
    design: 'UI/UX Design'
  };

  const filteredProjects = projectsData.filter(p => p.category === activeTab);

  return (
    <section id="project" className="project-section">
      <h2 className="section-title">My Projects</h2>
      <div className="project-container-card">
        <div className="project-tabs">
          {TABS.map(tab => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {TAB_LABELS[tab]}
            </button>
          ))}
        </div>
        <div className="project-tab-content">
          {filteredProjects.length > 0 ? (
            <div className="project-grid">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="coming-soon-panel">
              <ComingSoonIcon />
              <h3>Proyek Segera Hadir</h3>
              <p>Saya sedang menyiapkan proyek-proyek terbaik saya untuk kategori ini.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;