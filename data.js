// Data Portofolio Azza Khairul Imam
// Edit data di bawah ini untuk mengubah konten website secara mudah!

const portfolioData = {
  // Informasi Pribadi
  personal: {
    fullName: "AZZA KHAIRUL IMAM",
    nickname: "Azza",
    tagline: "Junior Developer & Creative Tech Explorer",
    // Ganti tautan foto ini dengan file lokal Anda (misal "assets/foto-azza.jpg") atau gunakan avatar kosmik bawaan "assets/profile-avatar.svg"
    profileImage: "assets/profile-avatar.svg",
    location: "Indonesia",
    status: "Siap Menerima Proyek & Kolaborasi",
    bio: [
      "Halo! Saya Azza Khairul Imam, seorang Junior Developer yang memiliki antusiasme mendalam dalam menjelajahi semesta rekayasa web dan teknologi perangkat lunak.",
      "Saya berdedikasi membangun aplikasi modern yang cepat, responsif, dan memberikan pengalaman pengguna yang berkesan. Selalu bersemangat mempelajari framework baru, memecahkan masalah logika pemrograman, dan mengembangkan solusi digital yang berdampak nyata."
    ],
    stats: [
      { label: "Tahun Belajar & Koding", value: "2+" },
      { label: "Proyek Selesai", value: "10+" },
      { label: "Dedikasi & Komitmen", value: "100%" }
    ]
  },

  // Teks yang mengetik sendiri di Halaman Utama (Hero Section)
  typewriterRoles: [
    "Junior Developer",
    "Frontend Web Enthusiast",
    "Full Stack Explorer",
    "Creative Problem Solver",
    "Lifelong Tech Learner"
  ],

  // Riwayat Pendidikan (Gampang diubah, ditambah, atau dikurangi)
  education: [
    {
      institution: "Universitas / Perguruan Tinggi Anda",
      degree: "S1 - Teknik Informatika / Sistem Informasi",
      period: "2021 - Sekarang",
      status: "Mahasiswa Aktif",
      description: "Mempelajari fundamental ilmu komputer, algoritma pemrograman, struktur data, rekayasa perangkat lunak, serta arsitektur basis data.",
      achievements: [
        "Fokus pada pengembangan web modern dan arsitektur perangkat lunak",
        "Aktif dalam kelompok riset teknologi dan workshop pemrograman"
      ]
    },
    {
      institution: "SMA / SMK Pilihan Anda",
      degree: "Jurusan Rekayasa Perangkat Lunak / IPA",
      period: "2018 - 2021",
      status: "Lulus",
      description: "Memulai perjalanan dalam dunia teknologi informasi, logika dasar algoritma, dan perancangan web dasar.",
      achievements: [
        "Mendalami dasar HTML, CSS, JavaScript dan konsep database relasional",
        "Menyelesaikan proyek tugas akhir web statis dan dinamis"
      ]
    }
  ],

  // Pengalaman Kerja & Organisasi (Gampang diubah, ditambah, atau dikurangi)
  experience: [
    {
      role: "Junior Web Developer",
      company: "Tech Studio / Freelance",
      period: "2023 - Sekarang",
      type: "Pekerjaan / Proyek",
      description: "Bertanggung jawab dalam merancang antarmuka website responsif, mengoptimalkan kinerja loading, dan mengintegrasikan API frontend ke backend.",
      highlights: [
        "Membangun antarmuka pengguna interaktif menggunakan HTML5, Tailwind CSS, dan JavaScript modern",
        "Mengoptimalkan performa halaman web sehingga mencapai skor Core Web Vitals yang memuaskan",
        "Bekerjasama dalam tim pengembang untuk mereview kode dan memastikan konsistensi desain"
      ],
      technologies: ["JavaScript", "Tailwind CSS", "React/HTML5", "Git", "REST API"]
    },
    {
      role: "Web Development Intern",
      company: "Digital Agency / Startup",
      period: "2022 - 2023",
      type: "Magang",
      description: "Membantu tim senior dalam slicing desain UI/UX menjadi komponen web fungsional serta memperbaiki bug pada sistem yang sudah berjalan.",
      highlights: [
        "Mengonversi desain Figma menjadi kode web yang bersih dan mobile-friendly",
        "Menguji fungsionalitas formulir dan interaksi pengguna di berbagai browser",
        "Mempelajari version control (Git) dan workflow kolaboratif modern"
      ],
      technologies: ["HTML5", "CSS3 / Sass", "JavaScript", "Figma", "GitHub"]
    },
    {
      role: "Divisi IT & Publikasi",
      company: "Organisasi Mahasiswa / Komunitas Kampus",
      period: "2022 - 2023",
      type: "Organisasi",
      description: "Mengelola aset digital organisasi, membuat landing page kegiatan seminar, dan memelihara sistem informasi kegiatan.",
      highlights: [
        "Merancang landing page registrasi peserta seminar teknologi berskala kampus",
        "Menangani dokumentasi teknis dan publikasi digital"
      ],
      technologies: ["Web Design", "WordPress / HTML", "Content Management"]
    }
  ],

  // Keahlian / Tech Stack
  skills: [
    { name: "HTML5 & Modern CSS3", level: 90, category: "Frontend", icon: "fab fa-html5" },
    { name: "JavaScript (ES6+)", level: 85, category: "Frontend", icon: "fab fa-js" },
    { name: "Tailwind CSS & Bootstrap", level: 88, category: "Frontend", icon: "fab fa-css3-alt" },
    { name: "React.js / Web Components", level: 78, category: "Frontend", icon: "fab fa-react" },
    { name: "Node.js & Express Basics", level: 75, category: "Backend", icon: "fab fa-node-js" },
    { name: "MySQL / PostgreSQL", level: 76, category: "Database", icon: "fas fa-database" },
    { name: "Git & GitHub", level: 82, category: "Tools", icon: "fab fa-github" },
    { name: "Figma to Code / UI UX", level: 80, category: "Design", icon: "fab fa-figma" },
    { name: "RESTful API Integration", level: 84, category: "Architecture", icon: "fas fa-network-wired" }
  ],

  // Proyek Portofolio
  projects: [
    {
      title: "Cosmic Personal Portfolio",
      category: "Web Development",
      description: "Website portofolio bertema antariksa dengan animasi canvas interaktif, efek glassmorphism, dan tata letak responsif masa depan.",
      image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80",
      tags: ["HTML5", "Tailwind CSS", "JavaScript", "Canvas API"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Galactic E-Commerce Dashboard",
      category: "Web Application",
      description: "Dashboard analitik interaktif dengan grafik data penjualan real-time, manajemen produk, dan visual dark mode yang elegan.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["JavaScript", "Tailwind CSS", "Chart.js", "REST API"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Space Mission Explorer App",
      category: "Frontend Exploration",
      description: "Aplikasi eksplorasi data astronomi dan misi penjelajahan luar angkasa dengan integrasi NASA Open API.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      tags: ["API NASA", "JavaScript", "Async/Await", "CSS Grid"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ],

  // Kontak & Media Sosial
  contact: {
    email: "azza.khairul.imam@example.com",
    whatsapp: "+62 812-3456-7890",
    telegram: "@azzakhairul",
    location: "Indonesia",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    }
  }
};
