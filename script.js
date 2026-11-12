/* ==========================================================================
   PORTFOLIO AZZA KHAIRUL IMAM - JAVASCRIPT & SPACE ANIMATIONS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Data Dinamis dari data.js
  initDynamicData();

  // 2. Inisialisasi Efek Mengetik Otomatis (Typewriter Effect)
  initTypewriter();

  // 3. Inisialisasi Background Luar Angkasa Interaktif (Canvas Stars & Meteors)
  initSpaceCanvas();

  // 4. Inisialisasi Navbar Melayang & Navigasi Scroll
  initNavbar();

  // 5. Inisialisasi Formulir Kontak & Fitur Interaktif
  initContactInteractions();
});

/* ==========================================================================
   1. INISIALISASI DATA DINAMIS (MUDAH DIUBAH DARI data.js)
   ========================================================================== */
function initDynamicData() {
  if (typeof portfolioData === 'undefined') {
    console.warn('portfolioData belum dimuat, menggunakan data default');
    return;
  }

  // Nama & Info Pribadi
  const nameElements = document.querySelectorAll('.dynamic-name');
  nameElements.forEach(el => el.textContent = portfolioData.personal.fullName);

  const nicknameElements = document.querySelectorAll('.dynamic-nickname');
  nicknameElements.forEach(el => el.textContent = portfolioData.personal.nickname);

  const profileImg = document.getElementById('profile-img');
  if (profileImg && portfolioData.personal.profileImage) {
    profileImg.src = portfolioData.personal.profileImage;
    profileImg.alt = portfolioData.personal.fullName;
  }

  const statusBadge = document.getElementById('hero-status-badge');
  if (statusBadge && portfolioData.personal.status) {
    statusBadge.textContent = portfolioData.personal.status;
  }

  // Bio / Deskripsi Diri
  const bioContainer = document.getElementById('bio-container');
  if (bioContainer && portfolioData.personal.bio) {
    bioContainer.innerHTML = portfolioData.personal.bio
      .map(p => `<p class="text-slate-300 leading-relaxed text-base md:text-lg mb-3">${p}</p>`)
      .join('');
  }

  // Statistik Pribadi
  const statsContainer = document.getElementById('stats-container');
  if (statsContainer && portfolioData.personal.stats) {
    statsContainer.innerHTML = portfolioData.personal.stats
      .map(stat => `
        <div class="cosmic-card p-4 text-center border border-cyan-500/20 bg-slate-900/40">
          <div class="text-2xl md:text-3xl font-extrabold text-cyan-400 font-orbitron">${stat.value}</div>
          <div class="text-xs md:text-sm text-slate-400 mt-1">${stat.label}</div>
        </div>
      `).join('');
  }

  // Riwayat Pendidikan (Gampang diubah di data.js)
  const eduContainer = document.getElementById('education-list');
  if (eduContainer && portfolioData.education) {
    eduContainer.innerHTML = portfolioData.education
      .map(edu => `
        <div class="relative pl-10 pb-8 last:pb-2 group">
          <div class="timeline-node"></div>
          <div class="cosmic-card p-6 border-l-4 border-l-cyan-400 hover:border-cyan-400">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span class="star-badge text-xs"><i class="fas fa-graduation-cap"></i> ${edu.period}</span>
              <span class="text-xs px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-medium">
                ${edu.status}
              </span>
            </div>
            <h4 class="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-orbitron">
              ${edu.institution}
            </h4>
            <p class="text-cyan-400 font-medium text-sm mb-3">${edu.degree}</p>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">${edu.description}</p>
            ${edu.achievements && edu.achievements.length ? `
              <ul class="space-y-1.5 text-xs text-slate-400">
                ${edu.achievements.map(ach => `
                  <li class="flex items-start gap-2">
                    <i class="fas fa-satellite text-cyan-400 text-[10px] mt-1"></i>
                    <span>${ach}</span>
                  </li>
                `).join('')}
              </ul>
            ` : ''}
          </div>
        </div>
      `).join('');
  }

  // Pengalaman Kerja & Organisasi (Gampang diubah di data.js)
  const expContainer = document.getElementById('experience-list');
  if (expContainer && portfolioData.experience) {
    expContainer.innerHTML = portfolioData.experience
      .map(exp => `
        <div class="relative pl-10 pb-8 last:pb-2 group">
          <div class="timeline-node" style="border-color: #818cf8; box-shadow: 0 0 15px #818cf8;"></div>
          <div class="cosmic-card p-6 border-l-4 border-l-indigo-400 hover:border-indigo-400">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span class="star-badge text-xs" style="color: #818cf8; border-color: rgba(129, 140, 248, 0.4); background: rgba(129, 140, 248, 0.1);">
                <i class="fas fa-briefcase"></i> ${exp.period}
              </span>
              <span class="text-xs px-2.5 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/60 font-medium">
                ${exp.type}
              </span>
            </div>
            <h4 class="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors font-orbitron">
              ${exp.role}
            </h4>
            <p class="text-indigo-300 font-medium text-sm mb-3">@ ${exp.company}</p>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">${exp.description}</p>
            
            ${exp.highlights && exp.highlights.length ? `
              <ul class="space-y-1.5 text-xs text-slate-400 mb-4">
                ${exp.highlights.map(hl => `
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle text-indigo-400 text-[11px] mt-0.5"></i>
                    <span>${hl}</span>
                  </li>
                `).join('')}
              </ul>
            ` : ''}

            ${exp.technologies && exp.technologies.length ? `
              <div class="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
                ${exp.technologies.map(tech => `
                  <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-800/80 text-cyan-300 border border-cyan-500/20">
                    #${tech}
                  </span>
                `).join('')}
              </div>
            ` : ''}
          </div>
        </div>
      `).join('');
  }

  // Keahlian / Skills
  const skillsContainer = document.getElementById('skills-grid');
  if (skillsContainer && portfolioData.skills) {
    skillsContainer.innerHTML = portfolioData.skills
      .map(skill => `
        <div class="cosmic-card p-5 group hover:border-cyan-400/50">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-3">
              <span class="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-lg group-hover:scale-110 transition-transform">
                <i class="${skill.icon}"></i>
              </span>
              <div>
                <h4 class="font-bold text-white text-sm md:text-base">${skill.name}</h4>
                <span class="text-[11px] text-slate-400 uppercase tracking-wider">${skill.category}</span>
              </div>
            </div>
            <span class="text-sm font-orbitron font-semibold text-cyan-400">${skill.level}%</span>
          </div>
          <div class="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden p-0.5">
            <div class="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-1000" style="width: ${skill.level}%"></div>
          </div>
        </div>
      `).join('');
  }

  // Proyek Portofolio
  const projectsContainer = document.getElementById('projects-grid');
  if (projectsContainer && portfolioData.projects) {
    projectsContainer.innerHTML = portfolioData.projects
      .map(proj => `
        <div class="cosmic-card flex flex-col group h-full">
          <div class="relative h-48 overflow-hidden">
            <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            <span class="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-cyan-300 border border-cyan-500/30 font-medium">
              ${proj.category}
            </span>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h4 class="text-xl font-bold text-white mb-2 font-orbitron group-hover:text-cyan-400 transition-colors">
                ${proj.title}
              </h4>
              <p class="text-slate-300 text-sm leading-relaxed mb-4">
                ${proj.description}
              </p>
              <div class="flex flex-wrap gap-1.5 mb-6">
                ${proj.tags.map(t => `<span class="text-xs px-2.5 py-0.5 rounded-md bg-cyan-950/70 text-cyan-300 border border-cyan-500/20">${t}</span>`).join('')}
              </div>
            </div>
            <div class="flex items-center gap-3 pt-3 border-t border-slate-800/80">
              <a href="${proj.demoUrl}" class="flex-1 text-center py-2 px-3 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 hover:text-white border border-cyan-500/30 text-xs font-semibold transition-all">
                <i class="fas fa-external-link-alt mr-1.5"></i> Live Demo
              </a>
              <a href="${proj.githubUrl}" class="flex-1 text-center py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-all">
                <i class="fab fa-github mr-1.5"></i> Repository
              </a>
            </div>
          </div>
        </div>
      `).join('');
  }

  // Kontak Link & Teks
  const emailEl = document.getElementById('contact-email-text');
  if (emailEl && portfolioData.contact.email) {
    emailEl.textContent = portfolioData.contact.email;
    const emailLink = document.getElementById('contact-email-link');
    if (emailLink) emailLink.href = `mailto:${portfolioData.contact.email}`;
  }

  const waLink = document.getElementById('contact-whatsapp-link');
  if (waLink && portfolioData.contact.whatsapp) {
    const cleanNumber = portfolioData.contact.whatsapp.replace(/[^0-9]/g, '');
    waLink.href = `https://wa.me/${cleanNumber}?text=Halo%20Azza%2C%20saya%20melihat%20portfolio%20website%20Anda`;
  }
}

/* ==========================================================================
   2. EFEK TEKS MENGETIK OTOMATIS (TYPEWRITER EFFECT)
   ========================================================================== */
function initTypewriter() {
  const typewriterElement = document.getElementById('typewriter-text');
  if (!typewriterElement) return;

  const roles = (typeof portfolioData !== 'undefined' && portfolioData.typewriterRoles && portfolioData.typewriterRoles.length > 0)
    ? portfolioData.typewriterRoles
    : ["Junior Developer", "Web Enthusiast", "Full Stack Explorer", "Creative Problem Solver"];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 100;
  const deleteSpeed = 50;
  const pauseTime = 1800;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let nextTimeout = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
      // Selesai mengetik satu kata, tunggu jeda sebelum menghapus
      nextTimeout = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Selesai menghapus, lanjut ke kata berikutnya
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      nextTimeout = 400;
    }

    setTimeout(type, nextTimeout);
  }

  type();
}

/* ==========================================================================
   3. BACKGROUND LUAR ANGKASA (CANVAS DENGAN BINTANG & METEOR)
   ========================================================================== */
function initSpaceCanvas() {
  const canvas = document.getElementById('space-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initStars();
  });

  // Bintang
  const starCount = Math.floor((width * height) / 3800);
  let stars = [];

  function initStars() {
    stars = [];
    const count = Math.min(260, Math.max(80, Math.floor((width * height) / 4500)));
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleDirection: Math.random() > 0.5 ? 1 : -1,
        color: ['#ffffff', '#bae6fd', '#7dd3fc', '#c084fc', '#e0e7ff'][Math.floor(Math.random() * 5)]
      });
    }
  }

  initStars();

  // Mouse interaction
  let mouse = { x: null, y: null, maxDist: 120 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Meteor / Shooting Stars
  let meteors = [];

  function spawnMeteor() {
    if (Math.random() < 0.035 && meteors.length < 3) {
      const startX = Math.random() * width;
      const startY = Math.random() * (height * 0.4);
      const length = Math.random() * 120 + 80;
      const speed = Math.random() * 9 + 8;
      const angle = (Math.PI / 4) + (Math.random() * 0.2 - 0.1); // ~45 derajat

      meteors.push({
        x: startX,
        y: startY,
        length: length,
        speed: speed,
        angle: angle,
        opacity: 1,
        fadeSpeed: 0.015 + Math.random() * 0.01
      });
    }
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // 1. Gambar Bintang
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];

      // Twinkle effect
      s.alpha += s.twinkleSpeed * s.twinkleDirection;
      if (s.alpha >= 0.95) {
        s.alpha = 0.95;
        s.twinkleDirection = -1;
      } else if (s.alpha <= 0.15) {
        s.alpha = 0.15;
        s.twinkleDirection = 1;
      }

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.globalAlpha = s.alpha;
      ctx.shadowBlur = s.radius > 1.2 ? 6 : 0;
      ctx.shadowColor = s.color;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Hubungkan bintang dekat mouse
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - s.x;
        const dy = mouse.y - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.maxDist) {
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.35 * (1 - dist / mouse.maxDist)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    // 2. Gambar Meteor
    spawnMeteor();
    for (let i = meteors.length - 1; i >= 0; i--) {
      const m = meteors[i];
      const tailX = m.x - Math.cos(m.angle) * m.length;
      const tailY = m.y - Math.sin(m.angle) * m.length;

      const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
      grad.addColorStop(0, `rgba(255, 255, 255, ${m.opacity})`);
      grad.addColorStop(0.2, `rgba(56, 189, 248, ${m.opacity * 0.9})`);
      grad.addColorStop(0.7, `rgba(99, 102, 241, ${m.opacity * 0.4})`);
      grad.addColorStop(1, 'rgba(15, 23, 42, 0)');

      ctx.beginPath();
      ctx.moveTo(m.x, m.y);
      ctx.lineTo(tailX, tailY);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2.2;
      ctx.stroke();

      // Kepala meteor bersinar
      ctx.beginPath();
      ctx.arc(m.x, m.y, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${m.opacity})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#38bdf8';
      ctx.fill();
      ctx.shadowBlur = 0;

      // Update posisi
      m.x += Math.cos(m.angle) * m.speed;
      m.y += Math.sin(m.angle) * m.speed;
      m.opacity -= m.fadeSpeed;

      // Hapus meteor jika selesai
      if (m.opacity <= 0 || m.x > width + 100 || m.y > height + 100) {
        meteors.splice(i, 1);
      }
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   4. NAVBAR MELAYANG & SMOOTH SCROLLING
   ========================================================================== */
function initNavbar() {
  const navContainer = document.querySelector('.floating-navbar-container');
  const mobileBtn = document.getElementById('mobile-toggle-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-item a, .mobile-menu a');
  const rocketBtn = document.getElementById('rocket-top-btn');

  // Toggle Mobile Menu
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('show');
      const icon = mobileBtn.querySelector('i');
      if (icon) {
        if (mobileMenu.classList.contains('show')) {
          icon.className = 'fas fa-times';
        } else {
          icon.className = 'fas fa-bars';
        }
      }
    });

    // Tutup mobile menu saat klik di luar
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
        mobileMenu.classList.remove('show');
        const icon = mobileBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      }
    });
  }

  // Smooth scroll & close mobile menu on click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) {
        mobileMenu.classList.remove('show');
        if (mobileBtn) {
          const icon = mobileBtn.querySelector('i');
          if (icon) icon.className = 'fas fa-bars';
        }
      }
    });
  });

  // Active link highlighter on scroll
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Tampilkan tombol roket kembali ke atas jika scroll > 400px
    if (rocketBtn) {
      if (scrollY > 400) {
        rocketBtn.classList.add('show');
      } else {
        rocketBtn.classList.remove('show');
      }
    }

    // Scroll spy
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Tombol roket kembali ke atas
  if (rocketBtn) {
    rocketBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/* ==========================================================================
   5. INTERAKSI FORMULIR KONTAK & TOAST FEEDBACK
   ========================================================================== */
function initContactInteractions() {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('cosmic-toast');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const msgInput = document.getElementById('form-message');

      const name = nameInput ? nameInput.value : '';
      const email = emailInput ? emailInput.value : '';
      const message = msgInput ? msgInput.value : '';

      // Tampilkan toast konfirmasi pengiriman
      showToast(`Pesan dari ${name || 'Anda'} siap dikirim ke Azza Khairul Imam! 🚀`);

      // Buka klien email otomatis
      setTimeout(() => {
        const mailtoUrl = `mailto:${portfolioData.contact.email}?subject=Halo%20Azza%20dari%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AEmail%20Pengirim:%20${encodeURIComponent(email)}`;
        window.location.href = mailtoUrl;
      }, 1200);

      form.reset();
    });
  }

  // Tombol Salin Email
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = portfolioData.contact.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email berhasil disalin ke papan klip! 📋');
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  }
}

function showToast(message) {
  let toast = document.getElementById('cosmic-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cosmic-toast';
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/90 text-cyan-300 px-6 py-3 rounded-full border border-cyan-500/50 shadow-2xl backdrop-blur-xl z-50 text-sm font-medium transition-all duration-300 opacity-0 pointer-events-none flex items-center gap-2';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fas fa-check-circle text-cyan-400"></i> <span>${message}</span>`;
  toast.style.opacity = '1';
  toast.style.transform = 'translate(-50%, 0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translate(-50%, 20px)';
  }, 3500);
}
