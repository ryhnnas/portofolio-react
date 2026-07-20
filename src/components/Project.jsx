import React, { useState, useEffect, useRef } from 'react';
import '../styles/Project.css';

// --- Impor Gambar Proyek Yang Ada di Assets ---
import projectImage1 from '../assets/nexera.png';
import projectImage2 from '../assets/washpro.png';
import projectImage3 from '../assets/aspira.png';
import projectImage4 from '../assets/mcrew.png';

// --- Ikon yang kita gunakan ---
import { TbWorldWww } from "react-icons/tb";
import { FiSmartphone, FiMonitor } from "react-icons/fi";
import { IoHourglassOutline, IoCloseOutline, IoCheckmarkCircleOutline, IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { FaGithub, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiSupabase, SiPostgresql, SiMysql, SiExpress, SiFlutter } from "react-icons/si";

// --- Database Proyek Lengkap (Tanpa Tautan Live Demo) ---
const projectsData = [
  {
    id: 1,
    title: "Nexera POS",
    category: "web",
    image: projectImage1, // Gunakan gambar lokal yang ada sebagai gambar utama
    description: "Sistem Kasir (Point of Sale) modern berbasis web yang dilengkapi dengan manajemen stok, analisis penjualan, dan AI Chatbot untuk kemudahan operasional bisnis.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL"],
    githubLink: "#",
    longDescription: "Nexera POS adalah sistem kasir berbasis web yang dirancang khusus untuk mengoptimalkan operasional bisnis retail maupun F&B. Dibangun menggunakan Next.js dan Supabase, platform ini menyajikan sinkronisasi data yang cepat, laporan penjualan yang akurat, serta antarmuka yang sangat responsif baik di desktop maupun perangkat tablet.",
    features: [
      "Manajemen Produk & Kategori (SKU, Harga Beli, Harga Jual, Stok Minimum)",
      "Sistem Kasir Interaktif (Transaksi dengan metode pembayaran Cash/QRIS)",
      "Dashboard Analisis Penjualan Real-time dengan Grafik Interaktif",
      "Sistem Diskon Fleksibel (Diskon per Transaksi, Kategori, atau Produk)",
      "Pengelolaan Sesi Laci Kasir (Cash Drawer Session) untuk pelaporan shift"
    ],
    fullTechStack: {
      frontend: "Next.js 16 (App Router), React 19, Tailwind CSS v4, Radix UI, Material UI",
      backend: "Hono API Framework, Next.js Server Actions",
      database: "Supabase PostgreSQL",
      tools: "ExcelJS (Export Laporan), Recharts (Visualisasi Data)"
    },
    screenshots: [
      {
        fileName: "nexera-main.png",
        title: "Landing Page POS",
        instruction: "Ambil screenshot pada landing page atau halaman utama aplikasi Nexera POS."
      },
      {
        fileName: "nexera-dashboard.png",
        title: "Sales Analytics Dashboard",
        instruction: "Ambil screenshot pada bagian dashboard utama yang menampilkan grafik penjualan bulanan dan produk terlaris."
      },
      {
        fileName: "nexera-pos.png",
        title: "Cashier POS Interface",
        instruction: "Ambil screenshot pada halaman POS (kasir) saat keranjang belanja terisi produk dan modal pembayaran terbuka."
      },
      {
        fileName: "nexera-discounts.png",
        title: "Discount Rules Management",
        instruction: "Ambil screenshot pada halaman daftar diskon/promosi aktif untuk menunjukkan skema diskon fleksibel."
      }
    ]
  },
  {
    id: 2,
    title: "Washpro",
    category: "web",
    image: projectImage2,
    description: "Platform SaaS laundry multi-tenant dengan fitur POS kasir terintegrasi, tracking pesanan real-time, membership kuota, dan notifikasi otomatis WhatsApp.",
    technologies: ["React", "Express.js", "MySQL", "Prisma ORM", "Tailwind CSS"],
    githubLink: "#",
    longDescription: "WashPro adalah aplikasi Point of Sale (POS) laundry berbasis SaaS multi-tenant. Setiap outlet laundry mendapatkan workspace terisolasi untuk mengelola data operasional mereka sendiri. Keunggulan utama dari WashPro adalah notifikasi otomatis WhatsApp yang langsung mengirimkan nota digital dan update status cucian ke nomor pelanggan secara real-time.",
    features: [
      "Arsitektur Multi-tenant SaaS dengan isolasi database/skema untuk tiap outlet",
      "Kasir POS dengan dukungan layanan laundry kiloan, satuan, dan paket membership kuota",
      "Notifikasi otomatis via WhatsApp untuk nota digital dan pembaruan status pengerjaan",
      "CRM Pelanggan lengkap dengan pelacakan riwayat cucian dan deposit kuota",
      "Manajemen multi-staff dengan pembedaan hak akses Owner dan Staff",
      "SuperAdmin Portal untuk peninjauan pembayaran langganan bulanan tenant"
    ],
    fullTechStack: {
      frontend: "React 19 (Vite), Tailwind CSS v4, Axios",
      backend: "Node.js, Express.js 5, Prisma ORM, Zod Validation",
      database: "MySQL",
      integration: "WhatsApp API via GOWA (Go-WhatsApp-Web-MultiDevice)",
      testing: "Playwright (E2E), CI/CD GitHub Actions"
    },
    screenshots: [
      {
        fileName: "washpro-main.png",
        title: "Washpro Landing Page",
        instruction: "Ambil screenshot halaman login atau gerbang utama workspace tenant WashPro."
      },
      {
        fileName: "washpro-dashboard.png",
        title: "Tenant Owner Dashboard",
        instruction: "Ambil screenshot dashboard admin laundry (owner) yang memperlihatkan statistik harian, grafik cuci kiloan, dan status keuangan."
      },
      {
        fileName: "washpro-pos.png",
        title: "Laundry Order Entry",
        instruction: "Ambil screenshot halaman entri order baru untuk memilih berat cucian kiloan, jenis layanan satuan, dan total harga."
      },
      {
        fileName: "washpro-tracking.png",
        title: "Order Process Tracker",
        instruction: "Ambil screenshot halaman pelacakan cucian yang menunjukkan progress step: antrean -> cuci -> setrika -> selesai."
      },
      {
        fileName: "washpro-whatsapp-invoice.png",
        title: "WhatsApp Digital Receipt",
        instruction: "Ambil screenshot atau mockup chat WA di HP/web saat menerima pesan nota laundry otomatis dari WashPro."
      }
    ]
  },
  {
    id: 3,
    title: "ASPIRA",
    category: "web",
    image: projectImage3,
    description: "Sistem pelaporan dan pengaduan kemahasiswaan Universitas Bung Hatta yang mendukung anonimitas pelapor, real-time chat dengan admin, serta visualisasi data laporan.",
    technologies: ["React", "Express.js", "PostgreSQL", "Prisma ORM", "Socket.io"],
    githubLink: "#",
    longDescription: "ASPIRA adalah platform pengaduan mahasiswa Universitas Bung Hatta untuk melaporkan masalah akademik maupun sarana kampus. Sistem ini menjamin kerahasiaan pelapor dengan fitur anonimitas mutlak, di mana identitas pelapor disembunyikan bahkan dari SuperAdmin sekalipun. Proses penanganan keluhan dilakukan secara kolaboratif melalui ruang chat real-time antara mahasiswa pelapor dan admin divisi terkait.",
    features: [
      "Pengajuan laporan pengaduan akademik & fasilitas kampus dengan nomor tiket unik",
      "Fitur Laporan Anonim: menyembunyikan identitas pelapor secara kriptografis demi keamanan",
      "Real-time Chat berbasis Socket.IO antara pelapor dan admin (dengan indikator sedang mengetik & status dibaca)",
      "Dashboard tracking alur status laporan terintegrasi: PENDING -> IN_REVIEW -> IN_PROGRESS -> RESOLVED",
      "Governance & Scoping: Admin hanya dapat memproses pengaduan sesuai kategori divisinya",
      "Sistem Audit Log terperinci dan verifikasi registrasi mahasiswa menggunakan KTM"
    ],
    fullTechStack: {
      frontend: "React 19 (Vite), Material UI 7, Zustand, Socket.IO Client, Recharts",
      backend: "Node.js, Express.js 4, Prisma ORM 6, Socket.IO Server",
      database: "PostgreSQL, Redis (Rate Limit Store)",
      security: "JWT Access + Refresh Token, Device Fingerprinting, Sharp Image Compression"
    },
    screenshots: [
      {
        fileName: "aspira-main.png",
        title: "ASPIRA Landing Portal",
        instruction: "Ambil screenshot halaman depan sistem pelaporan ASPIRA."
      },
      {
        fileName: "aspira-dashboard.png",
        title: "Student Reports Overview",
        instruction: "Ambil screenshot dari panel mahasiswa yang menampilkan riwayat laporan pengaduan yang telah diajukan beserta statusnya."
      },
      {
        fileName: "aspira-chat.png",
        title: "Real-time Discussion Chat",
        instruction: "Ambil screenshot antarmuka chat diskusi antara mahasiswa (anonim) dan admin kampus mengenai tindak lanjut laporan."
      },
      {
        fileName: "aspira-admin-panel.png",
        title: "Admin Analytics Dashboard",
        instruction: "Ambil screenshot dashboard admin utama yang memperlihatkan grafik pie pembagian kategori laporan masuk dan log audit aktivitas."
      },
      {
        fileName: "aspira-verification.png",
        title: "KTM Verification Portal",
        instruction: "Ambil screenshot menu administrasi verifikasi berkas KTM (Kartu Tanda Mahasiswa) untuk aktivasi akun mahasiswa baru."
      }
    ]
  },
  {
    id: 4,
    title: "Mcrew Management",
    category: "web",
    image: projectImage4,
    description: "Aplikasi manajemen operasional internal organisasi M-Crew yang mengintegrasikan KPI kru, presensi presisi menggunakan QR Code, serta pencatatan kas bulanan.",
    technologies: ["Next.js", "React", "PostgreSQL", "ExcelJS", "Html5-Qrcode"],
    githubLink: "#",
    longDescription: "M-Crew adalah sistem manajemen internal kru organisasi yang dirancang untuk merampingkan proses administrasi dan koordinasi divisi. Aplikasi ini memungkinkan anggota untuk mencatat kehadiran event melalui pemindaian QR Code secara instan, menyetor iuran kas organisasi secara digital, serta memasukkan penilaian Key Performance Indicator (KPI) bulanan yang terintegrasi secara otomatis.",
    features: [
      "Penilaian dan Rekapitulasi KPI (Key Performance Indicator) bulanan kru sesuai divisi",
      "Sistem Kehadiran Presensi menggunakan QR Code scanner kamera real-time",
      "Pencatatan kas bulanan anggota (iuran) secara terpusat dengan update saldo otomatis",
      "Akses Workspace Departemen terdistribusi (Finance, Secretary, Manager, Direktur, PR, dll)",
      "Ekspor rekap data KPI dan log keuangan kas ke file format Excel (.xlsx)"
    ],
    fullTechStack: {
      frontend: "Next.js 16 (App Router), React 19, Tailwind CSS v4",
      backend: "Next.js API Routes, Node-Postgres (pg)",
      database: "PostgreSQL",
      libraries: "html5-qrcode, qrcode, exceljs"
    },
    screenshots: [
      {
        fileName: "mcrew-main.png",
        title: "M-Crew Portal Entry",
        instruction: "Ambil screenshot halaman login / portal pembuka mcrew."
      },
      {
        fileName: "mcrew-dashboard.png",
        title: "M-Crew Member Area",
        instruction: "Ambil screenshot halaman beranda utama kru yang menampilkan grafik skor KPI, kalender event terdekat, dan info kas."
      },
      {
        fileName: "mcrew-kpi-input.png",
        title: "KPI Assessment Form",
        instruction: "Ambil screenshot halaman pengisian KPI bulanan oleh manajer atau anggota divisi."
      },
      {
        fileName: "mcrew-scan-qr.png",
        title: "QR Attendance Scanner",
        instruction: "Ambil screenshot ketika kamera aktif memindai QR Code untuk presensi kehadiran rapat/event."
      },
      {
        fileName: "mcrew-finance-sheet.png",
        title: "Cash Ledger Management",
        instruction: "Ambil screenshot halaman kas yang menunjukkan list pembayaran bulanan kru dan status iuran kas."
      }
    ]
  },
  {
    id: 5,
    title: "Kopsis Stok Management",
    category: "mobile",
    image: "/images/projects/kopsis-main.png",
    description: "Aplikasi PWA mobile-first untuk Koperasi Patriot yang mempermudah pencatatan inventaris.",
    technologies: ["Next.js", "React", "Supabase", "PostgreSQL", "Lucide Icons"],
    githubLink: "#",
    longDescription: "Kopsis (Koperasi Patriot) adalah aplikasi mobile-responsive berbasis Progressive Web App (PWA) yang memadukan fitur inventaris barang koperasi. Aplikasi ini dirancang dengan antarmuka bergaya viewport smartphone (Notch island & system bar mock) untuk memberikan pengalaman layaknya menggunakan aplikasi mobile native.",
    features: [
      "Tampilan PWA Mobile-First dengan notch island",
      "Portal Karyawan: Fitur input, edit stok inventaris barang, dan rekap omzet harian",
      "Portal Owner: Halaman filter pemantauan barang dengan tingkat stok kritis (menipis)",
      "Portal Admin: Pendaftaran barang dagangan baru dan pengelolaan kategori"
    ],
    fullTechStack: {
      frontend: "Next.js 16 (App Router), React 19",
      backend: "Next.js Route Handlers / Server APIs",
      database: "Supabase PostgreSQL (Row Level Security)",
      icons: "Lucide React Icons",
      styling: "Custom CSS Mobile UI Viewport Layout"
    },
    screenshots: [
      {
        fileName: "kopsis-main.png",
        title: "Kopsis Main Frame",
        instruction: "Ambil screenshot beranda awal Kopsis yang mensimulasikan layar HP."
      },
      {
        fileName: "kopsis-portal-select.png",
        title: "Mobile Portal Entry",
        instruction: "Ambil screenshot viewport HP yang menampilkan pemilihan portal masuk (Karyawan, Owner, Admin)."
      },
      {
        fileName: "kopsis-karyawan-dashboard.png",
        title: "Cashier Stock Counter",
        instruction: "Ambil screenshot dari menu portal karyawan yang memperlihatkan daftar stok inventaris barang dan form tambah barang."
      },
      {
        fileName: "kopsis-owner-alerts.png",
        title: "Owner Low Stock Monitoring",
        instruction: "Ambil screenshot dari menu portal owner yang memfilter dan menampilkan barang dengan status stok kritis di bawah batas minimal."
      },
      {
        fileName: "kopsis-savings.png",
        title: "Savings Ledgers Tracker",
        instruction: "Ambil screenshot riwayat tabungan digital (pokok, wajib, sukarela) yang tersimpan di dalam database koperasi."
      }
    ]
  },
  {
    id: 6,
    title: "MyTelUv2",
    category: "mobile",
    image: "/images/projects/mytelu-main.png",
    description: "Aplikasi mobile smart-campus berbasis Flutter terintegrasi dengan AI Python Service untuk absensi biometrik wajah, OCR plat kendaraan, dan analisis anomali kehadiran.",
    technologies: ["Flutter", "Dart", "GetX", "Node.js", "Express.js", "Python Flask", "PostgreSQL", "Prisma ORM", "IoT"],
    githubLink: "#",
    longDescription: "MyTelUV2 adalah aplikasi mobile Smart Campus yang komprehensif bagi mahasiswa dan staf akademik. Aplikasi ini berfokus pada integrasi Internet of Things (IoT) dan Artificial Intelligence (AI) untuk menghadirkan sistem absensi berbasis biometrik wajah (Face Recognition & Liveness Detection), sistem parkir pintar otomatis berbasis OCR plat nomor kendaraan dengan Raspberry Pi, serta analisis anomali kehadiran kelas berbasis AI.",
    features: [
      "Aplikasi Mobile Native Flutter dengan manajemen state GetX",
      "Absensi Biometrik Wajah: Face detection & embedding terintegrasi dengan AI Python Service",
      "Verifikasi Liveness: Verifikasi keaktifan wajah real-time untuk mencegah bypass foto pada absensi",
      "Parkir Pintar IoT: Deteksi OCR plat nomor kendaraan otomatis di gerbang kampus menggunakan Raspberry Pi",
      "Notifikasi Pintu Gerbang: Komunikasi Socket.io instan untuk sinkronisasi pembukaan palang pintu gerbang parkir",
      "AI Anomaly Attendance: Deteksi pola kecurangan/anomali kehadiran kelas dosen menggunakan Machine Learning",
      "Object Storage: Unggah & simpan berkas/foto biometrik terenkripsi menggunakan Cloudflare R2"
    ],
    fullTechStack: {
      mobile: "Flutter, Dart, GetX, Flutter Secure Storage",
      backend: "Node.js, Express.js, Prisma ORM, Socket.IO, PostgreSQL",
      ai_microservices: "Python (Flask/Gunicorn), InsightFace (Face AI), YOLO/Tesseract (Plate OCR), Scikit-Learn/PyOD (Anomaly)",
      iot_hardware: "Raspberry Pi Client, Edge Camera module",
      cloud_storage: "Cloudflare R2 Bucket"
    },
    screenshots: [
      {
        fileName: "mytelu-main.png",
        title: "MyTelU Main App Mock",
        instruction: "Ambil screenshot di HP/emulator saat aplikasi Flutter terbuka di halaman menu utama."
      },
      {
        fileName: "mytelu-home.png",
        title: "Smart Campus Mobile Dashboard",
        instruction: "Ambil screenshot beranda aplikasi Flutter di HP yang memuat shortcut menu perkuliahan, profil mahasiswa, dan status parkir."
      },
      {
        fileName: "mytelu-face-scan.png",
        title: "Face Biometrics Scanning",
        instruction: "Ambil screenshot layar HP saat scanner wajah aktif memproses liveness verification untuk absensi kelas."
      },
      {
        fileName: "mytelu-parking-history.png",
        title: "Gate OCR Entry History",
        instruction: "Ambil screenshot menu riwayat masuk parkir yang menampilkan log plat nomor kendaraan yang terdeteksi sensor kamera."
      },
      {
        fileName: "mytelu-anomaly-dashboard.png",
        title: "AI Attendance Anomalies",
        instruction: "Ambil screenshot menu laporan anomali kelas pada dashboard admin/dosen yang dianalisis oleh AI Python Service."
      }
    ]
  }
];

// --- Komponen Gambar Dengan Fallback Placeholder Otomatis ---
const ProjectImageWithFallback = ({ src, alt, placeholderText, className }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setError(false);
    setLoaded(false);
  }, [src]);

  return (
    <div className="project-image-fallback-container">
      {!loaded && !error && (
        <div className="project-image-loading">
          <div className="spinner"></div>
        </div>
      )}
      {error ? (
        <div className="project-image-placeholder-card">
          <div className="placeholder-info">
            <span className="placeholder-icon"><IoHourglassOutline size={30} /></span>
            <span className="placeholder-filename">{src ? src.split('/').pop() : 'screenshot.png'}</span>
            <p className="placeholder-text">{placeholderText || 'Screenshot belum diunggah'}</p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${className} ${loaded ? 'image-loaded' : 'image-loading'}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
};

// --- Komponen Modal Detail Proyek ---
const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;

  // Prevent background scroll when modal is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="project-modal-close" onClick={onClose} aria-label="Close modal">
          <IoCloseOutline size={30} />
        </button>

        <div className="project-modal-header">
          <span className="modal-category-badge">
            {project.category === 'web' ? 'Web Project' : 'Mobile Apps'}
          </span>
          <h2>{project.title}</h2>
        </div>

        <div className="project-modal-body">
          <div className="project-modal-info-col">
            <div className="info-section">
              <h3>Tentang Proyek</h3>
              <p className="long-description">{project.longDescription}</p>
            </div>

            <div className="info-section">
              <h3>Fitur Utama</h3>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index}>
                    <span className="check-icon"><IoCheckmarkCircleOutline size={18} /></span>
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="info-section">
              <h3>Tech Stack Terperinci</h3>
              <div className="tech-stack-details">
                {Object.entries(project.fullTechStack).map(([layer, tech], idx) => (
                  <div key={idx} className="tech-stack-row">
                    <div className="tech-layer-name">{layer.replace('_', ' ')}</div>
                    <div className="tech-layer-val">{tech}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-links" style={{ marginTop: '1rem' }}>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="modal-btn btn-github"
                style={{ width: '100%', maxWidth: '300px', margin: '1rem auto 0 auto' }}
              >
                <FaGithub /> Repository GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Komponen Kartu Proyek Utama ---
const ProjectCard = ({ project, onOpenDetail, index }) => (
  <div
    className="project-card"
    style={{ '--card-index': index }}
    onClick={onOpenDetail}
  >
    <div className="project-image-container">
      <ProjectImageWithFallback
        src={project.image}
        alt={project.title}
        placeholderText={`Screenshot Utama (${project.title})`}
        className="project-image"
      />
      <div className="project-overlay" onClick={(e) => e.stopPropagation()}>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub Repository"><FaGithub size={26} /></a>
        <button onClick={onOpenDetail} className="project-link-btn" title="Detail Proyek"><FiMonitor size={26} /></button>
      </div>
    </div>
    <div className="project-content">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tech-stack">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="tech-pill">
            {tech === "React" && <FaReact />}
            {tech === "Next.js" && <SiNextdotjs />}
            {tech === "Tailwind CSS" && <SiTailwindcss />}
            {tech === "Supabase" && <SiSupabase />}
            {tech === "PostgreSQL" && <SiPostgresql />}
            {tech === "MySQL" && <SiMysql />}
            {tech === "Express.js" && <SiExpress />}
            {tech === "Flutter" && <SiFlutter />}
            {tech}
          </span>
        ))}
      </div>
      <button className="read-more-btn" onClick={(e) => { e.stopPropagation(); onOpenDetail(); }}>
        Detail Proyek &rarr;
      </button>
    </div>
  </div>
);

// --- Komponen Proyek Utama (Slider Carousel Melayang Loop Tak Terbatas) ---
const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const sliderRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const animationFrameRef = useRef(null);

  // Buat Triple Array Buffer untuk perputaran infinite scroll
  const tripledProjects = [...projectsData, ...projectsData, ...projectsData];

  // Fungsi Teleportasi untuk Scroll Manual/Swipe
  const checkScrollPosition = () => {
    const slider = sliderRef.current;
    if (slider && !isAnimatingRef.current) {
      const { scrollLeft, scrollWidth } = slider;
      const singleSetWidth = scrollWidth / 3;

      if (scrollLeft < singleSetWidth - 50) {
        slider.scrollLeft = scrollLeft + singleSetWidth;
      } else if (scrollLeft >= (singleSetWidth * 2) - 50) {
        slider.scrollLeft = scrollLeft - singleSetWidth;
      }
    }
  };

  // Batalkan animasi jika pengguna menyentuh/mengklik slider secara manual
  const handleTouchStart = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      isAnimatingRef.current = false;
    }
  };

  // Kustom Smooth Scroll untuk Sinkronisasi Teleportasi Saat Animasi Berjalan
  const smoothScrollTo = (targetOffset, duration) => {
    const slider = sliderRef.current;
    if (!slider) return;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    isAnimatingRef.current = true;
    let start = slider.scrollLeft;
    let target = start + targetOffset;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentScrollLeft = start + (target - start) * ease;
      slider.scrollLeft = currentScrollLeft;

      // Pengecekan Batas & Teleportasi Selama Animasi Berjalan
      const { scrollLeft, scrollWidth } = slider;
      const singleSetWidth = scrollWidth / 3;

      if (scrollLeft < singleSetWidth - 50) {
        slider.scrollLeft = scrollLeft + singleSetWidth;
        start += singleSetWidth;
        target += singleSetWidth;
      } else if (scrollLeft >= (singleSetWidth * 2) - 50) {
        slider.scrollLeft = scrollLeft - singleSetWidth;
        start -= singleSetWidth;
        target -= singleSetWidth;
      }

      if (elapsed < duration) {
        animationFrameRef.current = requestAnimationFrame(step);
      } else {
        isAnimatingRef.current = false;
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      // Inisialisasi awal geser ke tengah (set kedua)
      const singleSetWidth = slider.scrollWidth / 3;
      slider.scrollLeft = singleSetWidth;
    }
    
    // Resize handler untuk memastikan scroll tetap di tengah jika dimensi viewport berubah
    const handleResize = () => {
      if (slider) {
        const singleSetWidth = slider.scrollWidth / 3;
        if (slider.scrollLeft < singleSetWidth - 100 || slider.scrollLeft >= singleSetWidth * 2 - 100) {
          slider.scrollLeft = singleSetWidth;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section id="project" className="project-section">
      <h2 className="section-title">My Projects</h2>
      
      <div className="project-slider-wrapper">
        {/* Tombol Kiri (Selalu Muncul karena Loop Tak Terbatas) */}
        <button 
          className="slider-arrow arrow-left" 
          onClick={() => smoothScrollTo(-380, 350)}
          aria-label="Scroll left"
        >
          <IoChevronBackOutline size={26} />
        </button>

        {/* Slider Kontainer */}
        <div 
          className="project-slider" 
          ref={sliderRef}
          onScroll={checkScrollPosition}
          onTouchStart={handleTouchStart}
          onMouseDown={handleTouchStart}
        >
          {tripledProjects.map((project, index) => (
            <ProjectCard 
              key={`${project.id}-${index}`} 
              project={project} 
              index={index}
              onOpenDetail={() => setSelectedProject(project)} 
            />
          ))}
        </div>

        {/* Tombol Kanan (Selalu Muncul karena Loop Tak Terbatas) */}
        <button 
          className="slider-arrow arrow-right" 
          onClick={() => smoothScrollTo(380, 350)}
          aria-label="Scroll right"
        >
          <IoChevronForwardOutline size={26} />
        </button>
      </div>

      {/* Modal Detail Proyek Interaktif */}
      {selectedProject && (
        <ProjectDetailModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Project;