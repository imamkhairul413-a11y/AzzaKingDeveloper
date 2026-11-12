# 🚀 Panduan Kustomisasi Portofolio Azza Khairul Imam

Selamat datang di website portofolio pribadi Anda dengan tema **Dark Mode Luar Angkasa (Cosmic Space Edition)**!

Website ini dirancang secara modular dan **sangat mudah diubah**. Anda cukup membuka file **`data.js`** untuk mengubah semua data tanpa perlu mengubah struktur HTML yang rumit.

---

## 📁 Struktur File Proyek

```
c:\AzzaCeoDeveloper\
│
├── index.html               # File utama halaman web portofolio
├── style.css                # Tampilan styling tema luar angkasa, glow biru & animasi
├── script.js                # Animasi bintang canvas, meteor, & efek teks mengetik
├── data.js                  # PUSAT DATA: Ganti nama, foto, pendidikan & pengalaman di sini!
│
├── assets/
│   └── profile-avatar.svg   # Avatar astronot kosmik bawaan (vektor SVG)
│
└── PANDUAN_MENGUBAH_DATA.md # Dokumen panduan ini
```

---

## ✏️ Cara Mengubah Data di `data.js`

Buka file **`data.js`** dengan text editor (VS Code, Notepad, dll). Anda akan menemukan bagian-bagian berikut:

### 1. Mengubah Foto Profil
Letakkan foto Anda di folder `assets/` (misalnya `assets/foto-saya.jpg`), lalu ganti pada baris `profileImage`:
```javascript
personal: {
  fullName: "AZZA KHAIRUL IMAM",
  // Ganti dengan file Anda:
  profileImage: "assets/foto-saya.jpg", 
  // Atau bisa juga URL online:
  // profileImage: "https://your-domain.com/photo.jpg",
  ...
}
```

### 2. Mengubah Teks yang Mengetik Sendiri (Typewriter Effect)
Di bagian `typewriterRoles`, Anda bisa menambah, mengurangi, atau mengganti gelar/keahlian yang akan diketik otomatis secara bergantian:
```javascript
typewriterRoles: [
  "Junior Developer",
  "Frontend Web Enthusiast",
  "Full Stack Explorer",
  "React & JavaScript Enthusiast",
  "Creative Problem Solver"
],
```

### 3. Mengubah Riwayat Pendidikan
Di bagian `education`, Anda bisa mengubah nama institusi, jurusan, tahun, dan deskripsi:
```javascript
education: [
  {
    institution: "Universitas Indonesia", // Ganti nama kampus
    degree: "S1 - Teknik Informatika",    // Ganti jurusan
    period: "2021 - 2025",                // Ganti periode tahun
    status: "Lulusan Baru / Mahasiswa",   // Status
    description: "Fokus mendalami rekayasa perangkat lunak dan pemrograman web modern.",
    achievements: [
      "IPK: 3.85 / 4.00",
      "Ketua Tim Proyek Akhir Sistem Informasi"
    ]
  },
  // Anda bisa menambah kotak pendidikan baru dengan menduplikasi format di atas!
]
```

### 4. Mengubah Pengalaman Kerja & Organisasi
Di bagian `experience`, sesuaikan posisi, perusahaan, periode, dan teknologi:
```javascript
experience: [
  {
    role: "Junior Web Developer",
    company: "Nama Perusahaan Anda",
    period: "2023 - Sekarang",
    type: "Penuh Waktu / Magang / Freelance",
    description: "Deskripsi tanggung jawab dan pencapaian Anda.",
    highlights: [
      "Mengembangkan fitur antarmuka responsif",
      "Meningkatkan kecepatan loading website hingga 40%"
    ],
    technologies: ["JavaScript", "Tailwind CSS", "React", "Git"]
  }
]
```

### 5. Mengubah Keahlian (Skills) & Proyek (Projects)
- Pada array `skills`: Ubah nama skill, kategori, dan persentase `level: 85`.
- Pada array `projects`: Tambahkan judul proyek, link demo, dan link repository GitHub Anda.

### 6. Mengubah Kontak & WhatsApp
Di bagian `contact`:
```javascript
contact: {
  email: "emailanda@gmail.com",
  whatsapp: "+62 812-3456-7890", // Ganti dengan nomor WhatsApp Anda
  ...
}
```
*Ketika pengunjung mengklik link WhatsApp di website, mereka akan otomatis diarahkan ke chat WhatsApp dengan nomor Anda!*

---

## 🌐 Cara Menjalankan Website

1. Cukup **klik dua kali (double click)** file **`index.html`** di File Explorer komputer Anda.
2. Website akan langsung terbuka di browser (Chrome, Edge, Firefox, dll) dengan animasi luar angkasa penuh tanpa memerlukan instalasi software tambahan!
3. Jika ingin meng-online-kan (hosting gratis), Anda bisa langsung mengunggah folder ini ke **GitHub Pages**, **Vercel**, atau **Netlify**.

---

## 🌟 Fitur Utama yang Telah Diterapkan:
1. **Tema Luar Angkasa Gelap (Space Dark Mode)**: Background hitam pekat dengan nebula glow biru & ungu.
2. **Animasi Kosmik Interaktif**:
   - Canvas animasi 200+ bintang berkedip (*twinkle*).
   - Efek konstelasi interaktif mengikuti pergerakan kursor mouse.
   - Meteor jatuh (*shooting stars*) yang meluncur secara dinamis.
3. **Navbar Melayang di Tengah Atas**:
   - Efek glassmorphism dengan **Blue Cyan Glow** (`box-shadow` neon biru cerah).
   - Menu responsif untuk tampilan laptop, tablet, dan smartphone.
4. **Hero Section Spektakuler**:
   - Nama besar **AZZA KHAIRUL IMAM** dengan gradien kosmik & glow biru.
   - Efek teks mengetik sendiri secara bergantian (*typewriter effect*).
5. **Section About Me**:
   - Foto profil dengan cincin orbit planet berputar dinamis.
   - Status astronot online & statistik performa.
6. **Riwayat Pendidikan & Pengalaman Kerja**:
   - Timeline kosmik yang terstruktur dan mudah dimodifikasi di `data.js`.
7. **Tombol Roket Kembali ke Orbit**:
   - Tombol melayang 🚀 di pojok kanan bawah untuk scroll kembali ke paling atas dengan halus.
