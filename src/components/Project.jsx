import React, { useState } from 'react';
import '../styles/Project.css';

// --- Impor Gambar Proyek ---
import projectImage1 from '../assets/ecommerce.png';
import projectImage2 from '../assets/todo.png';
import projectImage3 from '../assets/respmknn.png';

// --- ikon yang kita gunakan ---
import { TbWorldWww } from "react-icons/tb";
import { FiSmartphone } from "react-icons/fi";
import { IoGameControllerOutline, IoHourglassOutline } from "react-icons/io5";
import { FaGithub, FaExternalLinkAlt, FaReact } from "react-icons/fa"; 

// --- Database Proyek ---
const projectsData = [
  {
    id: 1,
    title: "Trolley",
    image: projectImage1,
    description: "Trolley adalah sebuah platform e-commerce berbasis web yang dibangun menggunakan stack MERN (MySQL, Express.js, React, Node.js). Proyek ini memungkinkan pengguna untuk mendaftar, membeli produk, dan bahkan meng-upgrade akun mereka untuk membuka toko sendiri dan menjual produk mereka.",
    technologies: ["React", "Node", "MySQL"],
    githubLink: "https://github.com/ryhnnas/Trolley",
    demoLink: "#",
    category: "web",
  },
  {
    id: 2,
    title: "Todo List Web",
    image: projectImage2,
    description: "To-Do List full-stack yang sederhana namun tangguh, dibangun menggunakan React.js untuk frontend, Node.js (Express.js) untuk backend, dan MySQL sebagai database.",
    technologies: ["React", "Node", "MySQL"],
    githubLink: "https://github.com/ryhnnas/Full-Stack-To-Do-List-Application",
    demoLink: "#",
    category: "web",
  },
  {
    id: 3,
    title: "Dashboard Resep Masakan",
    image: projectImage3,
    description: "Platform web interaktif yang memungkinkan pengguna menjelajahi berbagai resep lezat, melihat detail bahan dan langkah-langkah, serta mencari resep berdasarkan nama atau bahan. Aplikasi ini juga dilengkapi dengan fitur kategori yang memudahkan pengguna menemukan resep sesuai jenis hidangan.",
    technologies: ["React", "Node", "MySQL"],
    githubLink: "https://github.com/ryhnnas/Full-Stack-Food-Recipe-Application",
    demoLink: "#",
    category: "web",
  },
  // Contoh untuk kategori lain (bisa di-uncomment jika sudah ada proyeknya)
  // {
  //   id: 3,
  //   title: "Dashboard Resep Masakan",
  //   image: projectImage3,
  //   description: "Platform web interaktif yang memungkinkan pengguna menjelajahi berbagai resep lezat, melihat detail bahan dan langkah-langkah, serta mencari resep berdasarkan nama atau bahan. Aplikasi ini juga dilengkapi dengan fitur kategori yang memudahkan pengguna menemukan resep sesuai jenis hidangan.",
  //   technologies: ["React", "Node", "MySQL"],
  //   githubLink: "https://github.com/ryhnnas/Full-Stack-Food-Recipe-Application",
  //   demoLink: "#",
  //   category: "web",
  // },
];

const ProjectCard = ({ project }) => (
    <div className="project-card">
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-overlay">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link"><FaGithub size={28}/></a>
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link"><FaExternalLinkAlt size={28}/></a>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech-stack">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-pill">
              {tech === "React" && <FaReact />}
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
);

const Project = () => {
  const [activeTab, setActiveTab] = useState('web');
  
  const TABS = {
    web: { id: 'web', label: 'Web Projects', icon: <TbWorldWww /> },
    mobile: { id: 'mobile', label: 'Mobile Apps', icon: <FiSmartphone /> },
    game: { id: 'game', label: 'Web Games', icon: <IoGameControllerOutline /> },
  };

  const filteredProjects = projectsData.filter(p => p.category === activeTab);

  return (
    <section id="project" className="project-section">
      <h2 className="section-title">My Projects</h2>
      <div className="project-container-card">
        <div className="project-tabs">
          {Object.keys(TABS).map(tabKey => {
            const tab = TABS[tabKey];
            return (
              <button 
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            )
          })}
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
              <IoHourglassOutline size={50} />
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