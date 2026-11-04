# 🌐 Profil & Kartu Nama Digital Semi-Formal (Light Theme)

Aplikasi web profil dan kartu nama digital interaktif berbasis **HTML5**, **CSS3**, dan **JavaScript Vanilla** dengan konsep visual **Light Theme** yang bersih, modern, dan bernuansa semi-formal.

Website ini siap digunakan secara lokal maupun langsung di-deploy ke **Vercel**.

---

## 📋 Struktur Tampilan & Navigasi (3 Halaman)

1. **Halaman Utama (Beranda / `#home`)**
   - Salam sambutan semi-formal dan perkenalan identitas.
   - Foto profil beresolusi tajam dengan bingkai modern.
   - Slogan / visi singkat dan tombol akses cepat ke halaman lain.
   - Cuplikan ikon media sosial utama.
   - Kartu ikhtisar nilai/keunggulan pendekatan kerja.

2. **Halaman Profil (`#profile`)**
   - Foto profil vertikal dengan kutipan/motto kerja.
   - Biografi lengkap berformat paragraf rapi.
   - Daftar fokus keahlian dan spesialisasi (*skills*).
   - Nilai dan prinsip integritas profesional.

3. **Halaman Kontak (`#contact`)**
   - Berfokus murni pada saluran **Media Sosial Resmi** (LinkedIn, GitHub, Instagram, Telegram, X/Twitter, Website, YouTube, dll).
   - Kartu interaktif yang memuat nama platform, username/handle, fungsi akun, dan tombol langsung ke profil.
   - Panduan etika menghubungi untuk efisiensi komunikasi.
   - **Bebas dari informasi privat**: Sama sekali tidak menampilkan dan tidak meminta nomor telepon/WhatsApp pribadi, alamat rumah/fisik, maupun email pribadi.

---

## 🎨 Konsep Desain & Gaya Bahasa

- **Tema Tampilan**: *Light Theme* (Latar putih & abu-abu slate lembut `#f8fafc`, kartu putih bersih berbayangan halus, aksen warna Indigo `#4f46e5` yang profesional).
- **Gaya Bahasa**: Semi-formal (Santun, jelas, ramah, dan profesional).
- **Penyaringan Informasi**: Sesuai instruksi, detail **nomor HP, alamat fisik, dan alamat email ditiadakan** demi privasi dan keamanan digital.

---

## 🔐 Sistem Login Admin & Mode Pengunjung

- **Pengguna Biasa (Publik)**:
  - Bebas membuka dan membaca ketiga halaman tanpa perlu login atau registrasi apa pun.
- **Login Khusus Admin**:
  - Tombol gembok kecil di pojok kanan atas (*navbar*).
  - **Username Default**: `admin`
  - **Password Default**: `admin123`
- **Fitur Setelah Admin Masuk**:
  - Muncul **Admin Topbar** di bagian atas.
  - Tombol **"Kelola Konten Web"**:
    - Ubah Nama, Gelar, Slogan, dan Kutipan.
    - Ubah teks Biografi dan daftar Keahlian (*tambah/hapus keahlian*).
    - Ganti Foto Profil (Upload langsung dari file komputer/HP via Base64 atau URL gambar).
    - Kelola Akun Media Sosial (Tambah baru, ubah username, ubah tautan, naik/turunkan urutan, atau hapus).
  - Menu **"Ubah Password"**: Mengganti kata sandi admin dan opsi reset data ke bawaan pabrik.
  - Data tersimpan secara instan di memori peramban (`localStorage`) sehingga tidak hilang saat halaman di-refresh.

---

## 🚀 Panduan Upload / Deploy ke Vercel

Aplikasi ini sudah dilengkapi file konfigurasi `vercel.json` dan `package.json` sehingga dapat langsung dideploy ke Vercel dengan mudah:

### Cara 1: Menggunakan Git & Vercel Dashboard (Paling Populer)
1. Buat repositori baru di akun GitHub Anda (misal: `profil-digital`).
2. Masukkan seluruh file dari folder ini ke repositori tersebut:
   ```bash
   git init
   git add .
   git commit -m "Inisialisasi web profil digital light theme"
   git branch -M main
   git remote add origin https://github.com/USERNAME-ANDA/profil-digital.git
   git push -u origin main
   ```
3. Buka [vercel.com](https://vercel.com/) dan login dengan akun GitHub Anda.
4. Klik tombol **"Add New..."** -> **"Project"**.
5. Pilih repositori `profil-digital` yang baru saja Anda push, lalu klik **"Deploy"**.
6. Selesai! Dalam beberapa detik website Anda sudah online dengan domain gratis seperti `https://profil-digital.vercel.app`.

### Cara 2: Menggunakan Vercel CLI (Langsung dari Terminal)
1. Buka PowerShell / Terminal di folder ini:
   ```powershell
   cd C:\Users\LENOVO\.gemini\antigravity\scratch\kartu-nama-digital
   ```
2. Jalankan perintah instalasi Vercel CLI (jika belum ada):
   ```bash
   npm install -g vercel
   ```
3. Ketik perintah:
   ```bash
   vercel
   ```
4. Ikuti instruksi di layar (tekan Enter untuk menyetujui setelan default). Vercel akan langsung mengunggah dan memberikan link website yang aktif.

---

## 💻 Menjalankan di Komputer Lokal

1. Buka folder:
   ```
   C:\Users\LENOVO\.gemini\antigravity\scratch\kartu-nama-digital
   ```
2. Klik dua kali pada file [**`index.html`**](file:///C:/Users/LENOVO/.gemini/antigravity/scratch/kartu-nama-digital/index.html) untuk langsung membukanya di browser (Chrome, Edge, Firefox, Safari).
