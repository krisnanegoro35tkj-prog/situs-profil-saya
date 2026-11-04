/**
 * ====================================================================
 * APP.JS - Aplikasi Web Profil & Kartu Digital Semi-Formal (Light Theme)
 * ====================================================================
 */

// Kunci Penyimpanan Lokal (LocalStorage & SessionStorage)
const STORAGE_DATA_KEY = 'web_digital_presence_data_v2';
const STORAGE_AUTH_KEY = 'web_digital_admin_auth_v2';
const SESSION_AUTH_KEY = 'web_digital_admin_session_v2';

// Kredensial Default Admin
const DEFAULT_AUTH = {
  username: 'admin',
  password: 'admin123'
};

// Data Awal Bawaan (Tanpa No HP, Tanpa Alamat, Tanpa Email)
const DEFAULT_DATA = {
  name: 'Rian Pratama, S.Kom',
  title: 'Web Developer & UI/UX Specialist',
  tagline: 'Fokus dalam merancang dan mengembangkan solusi digital modern yang fungsional, terstruktur dengan baik, serta memberikan nilai nyata bagi pengguna.',
  quote: 'Desain dan kode yang baik adalah yang mampu menyelesaikan masalah nyata secara sederhana.',
  bio: `Saya adalah seorang praktisi teknologi web dan antarmuka pengguna dengan pengalaman dalam membangun berbagai platform digital yang terstruktur, cepat, dan mudah diakses.

Sepanjang perjalanan profesional, saya terbiasa menerjemahkan kebutuhan ide dan bisnis menjadi produk digital yang estetis dan berkinerja tinggi. Saya mengedepankan prinsip keteraturan kode, keamanan, dan kenyamanan pengguna akhir.

Saya selalu terbuka untuk berdiskusi seputar perkembangan ekosistem web modern, peluang kolaborasi proyek, maupun pertukaran wawasan profesional melalui akun-akun media sosial resmi saya.`,
  photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500',
  skills: [
    'Pengembangan Antarmuka Web (Frontend Modern)',
    'Desain Pengalaman Pengguna (UI/UX Design)',
    'Arsitektur Komponen & Desain Sistem',
    'Optimasi Performa Web & Aksesibilitas',
    'Manajemen Proyek Digital & Dokumentasi'
  ],
  socials: [
    {
      id: 'soc_1',
      platform: 'linkedin',
      name: 'LinkedIn',
      handle: 'Rian Pratama',
      desc: 'Saluran utama untuk koneksi profesional dan kolaborasi proyek formal',
      url: 'https://linkedin.com/in/rianpratama',
      icon: 'fab fa-linkedin-in',
      color: '#0a66c2',
      bg: '#e8f2fa'
    },
    {
      id: 'soc_2',
      platform: 'github',
      name: 'GitHub',
      handle: '@rianpratama',
      desc: 'Portofolio repositori kode sumber terbuka dan eksperimen teknologi',
      url: 'https://github.com/rianpratama',
      icon: 'fab fa-github',
      color: '#181717',
      bg: '#f1f5f9'
    },
    {
      id: 'soc_3',
      platform: 'instagram',
      name: 'Instagram',
      handle: '@rian.digital',
      desc: 'Catatan visual seputar aktivitas teknologi dan proses kreatif',
      url: 'https://instagram.com/rian.digital',
      icon: 'fab fa-instagram',
      color: '#e1306c',
      bg: '#fdf2f8'
    },
    {
      id: 'soc_4',
      platform: 'telegram',
      name: 'Telegram',
      handle: '@rianpratama_dev',
      desc: 'Pesan langsung untuk komunikasi dan koordinasi digital cepat',
      url: 'https://t.me/rianpratama_dev',
      icon: 'fab fa-telegram',
      color: '#229ed9',
      bg: '#eff6ff'
    },
    {
      id: 'soc_5',
      platform: 'twitter',
      name: 'X (Twitter)',
      handle: '@rian_dev',
      desc: 'Diskusi seputar tren web, pengembangan perangkat lunak, dan AI',
      url: 'https://x.com/rian_dev',
      icon: 'fab fa-x-twitter',
      color: '#0f1419',
      bg: '#f1f5f9'
    },
    {
      id: 'soc_6',
      platform: 'website',
      name: 'Website Portofolio',
      handle: 'rianpratama.dev',
      desc: 'Situs pribadi untuk membaca artikel teknik dan studi kasus lengkap',
      url: 'https://rianpratama.dev',
      icon: 'fas fa-globe',
      color: '#4f46e5',
      bg: '#eef2ff'
    }
  ]
};

// Preset Informasi Media Sosial
const SOCIAL_PRESETS = {
  linkedin: {
    name: 'LinkedIn',
    icon: 'fab fa-linkedin-in',
    color: '#0a66c2',
    bg: '#e8f2fa',
    defaultHandle: 'Nama Profil LinkedIn',
    defaultDesc: 'Koneksi profesional dan kolaborasi proyek formal',
    urlPrefix: 'https://linkedin.com/in/'
  },
  github: {
    name: 'GitHub',
    icon: 'fab fa-github',
    color: '#181717',
    bg: '#f1f5f9',
    defaultHandle: '@username',
    defaultDesc: 'Portofolio repositori kode sumber terbuka',
    urlPrefix: 'https://github.com/'
  },
  instagram: {
    name: 'Instagram',
    icon: 'fab fa-instagram',
    color: '#e1306c',
    bg: '#fdf2f8',
    defaultHandle: '@username',
    defaultDesc: 'Aktivitas visual dan wawasan kreatif',
    urlPrefix: 'https://instagram.com/'
  },
  telegram: {
    name: 'Telegram',
    icon: 'fab fa-telegram',
    color: '#229ed9',
    bg: '#eff6ff',
    defaultHandle: '@username',
    defaultDesc: 'Pesan langsung digital cepat',
    urlPrefix: 'https://t.me/'
  },
  twitter: {
    name: 'X (Twitter)',
    icon: 'fab fa-x-twitter',
    color: '#0f1419',
    bg: '#f1f5f9',
    defaultHandle: '@username',
    defaultDesc: 'Diskusi tren teknologi dan inovasi web',
    urlPrefix: 'https://x.com/'
  },
  youtube: {
    name: 'YouTube',
    icon: 'fab fa-youtube',
    color: '#ff0000',
    bg: '#fef2f2',
    defaultHandle: '@channel',
    defaultDesc: 'Dokumentasi video dan konten edukasi',
    urlPrefix: 'https://youtube.com/@'
  },
  threads: {
    name: 'Threads',
    icon: 'fab fa-threads',
    color: '#111827',
    bg: '#f1f5f9',
    defaultHandle: '@username',
    defaultDesc: 'Pembaruan singkat seputar proyek harian',
    urlPrefix: 'https://threads.net/@'
  },
  discord: {
    name: 'Discord',
    icon: 'fab fa-discord',
    color: '#5865f2',
    bg: '#eef2ff',
    defaultHandle: 'username#0000',
    defaultDesc: 'Komunitas pengembang dan sesi diskusi langsung',
    urlPrefix: 'https://discord.gg/'
  },
  website: {
    name: 'Website Portofolio',
    icon: 'fas fa-globe',
    color: '#4f46e5',
    bg: '#eef2ff',
    defaultHandle: 'domainanda.com',
    defaultDesc: 'Tautan situs pribadi dan studi kasus proyek',
    urlPrefix: 'https://'
  },
  custom: {
    name: 'Platform Lainnya',
    icon: 'fas fa-arrow-up-right-from-square',
    color: '#475569',
    bg: '#f1f5f9',
    defaultHandle: '@profil',
    defaultDesc: 'Kanal komunikasi resmi tambahan',
    urlPrefix: 'https://'
  }
};

// State Global
let currentData = null;
let tempSocialsList = [];
let tempSkillsList = [];
let tempPhotoBase64 = null;

// ==================== INISIALISASI ====================
document.addEventListener('DOMContentLoaded', () => {
  setupStorage();
  loadData();
  checkAdminSession();
  setupNavigation();
  setupEventListeners();
  updateCurrentYear();
});

// Setup Default LocalStorage jika kosong
function setupStorage() {
  if (!localStorage.getItem(STORAGE_DATA_KEY)) {
    localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(DEFAULT_DATA));
  }
  if (!localStorage.getItem(STORAGE_AUTH_KEY)) {
    localStorage.setItem(STORAGE_AUTH_KEY, JSON.stringify(DEFAULT_AUTH));
  }
}

// Memuat data dan merender ke seluruh halaman
function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_DATA_KEY);
    currentData = raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(DEFAULT_DATA));
  } catch (err) {
    console.error('Gagal membaca data, memuat default:', err);
    currentData = JSON.parse(JSON.stringify(DEFAULT_DATA));
  }

  // 1. Render Header & Logo
  const initial = currentData.name ? currentData.name.charAt(0).toUpperCase() : 'R';
  document.getElementById('navLogoInitial').textContent = initial;
  document.getElementById('navBrandName').textContent = currentData.name || 'Profil Digital';
  document.getElementById('footerAuthorName').textContent = currentData.name || 'Profil Digital';

  // 2. Render Halaman Utama (Beranda)
  document.getElementById('homeDisplayName').textContent = currentData.name || 'Nama Anda';
  document.getElementById('homeDisplayRole').textContent = currentData.title || 'Profesi / Bidang Keahlian';
  document.getElementById('homeDisplayTagline').textContent = currentData.tagline || '';
  
  const homeAvatar = document.getElementById('homeDisplayAvatar');
  homeAvatar.src = currentData.photo || DEFAULT_DATA.photo;
  homeAvatar.onerror = () => {
    homeAvatar.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentData.name || 'User')}&background=4f46e5&color=fff&size=400`;
  };

  // Render Tautan Cepat Media Sosial di Beranda
  renderHomeQuickLinks(currentData.socials || []);

  // 3. Render Halaman Profil
  document.getElementById('profileDisplayName').textContent = currentData.name || 'Nama Anda';
  document.getElementById('profileDisplayTitle').textContent = currentData.title || '';
  document.getElementById('profileDisplayQuote').textContent = currentData.quote || 'Solusi digital yang berorientasi pada hasil.';
  
  const profileAvatar = document.getElementById('profileDisplayAvatar');
  profileAvatar.src = currentData.photo || DEFAULT_DATA.photo;
  profileAvatar.onerror = () => {
    profileAvatar.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentData.name || 'User')}&background=4f46e5&color=fff&size=400`;
  };

  // Render Paragraf Biografi
  renderProfileBio(currentData.bio || '');

  // Render Daftar Keahlian
  renderProfileSkills(currentData.skills || []);

  // 4. Render Halaman Kontak (Daftar Media Sosial)
  renderContactSocials(currentData.socials || []);
}

// Render Tombol Ikon Cepat di Beranda
function renderHomeQuickLinks(socials) {
  const container = document.getElementById('homeQuickLinks');
  container.innerHTML = '';

  if (!socials || socials.length === 0) {
    container.innerHTML = '<span style="font-size: 0.82rem; color: var(--text-muted);">- Belum ada akun -</span>';
    return;
  }

  // Tampilkan maksimal 5 akun di beranda untuk kerapihan
  const previewList = socials.slice(0, 6);
  previewList.forEach(item => {
    const a = document.createElement('a');
    a.href = sanitizeUrl(item.url);
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'quick-icon-btn';
    a.title = `${item.name}: ${item.handle}`;
    a.innerHTML = `<i class="${item.icon}"></i>`;
    container.appendChild(a);
  });
}

// Render Biografi Halaman Profil dengan Paragraf Rapi
function renderProfileBio(bioText) {
  const container = document.getElementById('profileDisplayBio');
  container.innerHTML = '';

  if (!bioText) {
    container.innerHTML = '<p>Biografi belum dilengkapi.</p>';
    return;
  }

  const paragraphs = bioText.split('\n').filter(p => p.trim() !== '');
  paragraphs.forEach(text => {
    const p = document.createElement('p');
    p.textContent = text.trim();
    container.appendChild(p);
  });
}

// Render Tag Keahlian di Profil
function renderProfileSkills(skills) {
  const container = document.getElementById('profileSkillsContainer');
  container.innerHTML = '';

  if (!skills || skills.length === 0) {
    container.innerHTML = '<span style="font-size: 0.85rem; color: var(--text-muted);">Belum ada keahlian yang dicantumkan.</span>';
    return;
  }

  skills.forEach(skill => {
    const span = document.createElement('span');
    span.className = 'skill-tag';
    span.innerHTML = `<i class="fas fa-check-circle"></i> <span>${escapeHtml(skill)}</span>`;
    container.appendChild(span);
  });
}

// Render Kartu-Kartu Media Sosial di Halaman Kontak
function renderContactSocials(socials) {
  const container = document.getElementById('contactSocialGrid');
  container.innerHTML = '';

  if (!socials || socials.length === 0) {
    container.innerHTML = `
      <div style="background: var(--bg-surface); padding: 24px; border-radius: var(--radius-md); text-align: center; border: 1px solid var(--border-light); color: var(--text-muted);">
        Belum ada kanal media sosial yang ditambahkan.
      </div>
    `;
    return;
  }

  socials.forEach(item => {
    const a = document.createElement('a');
    a.href = sanitizeUrl(item.url);
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'social-contact-card';
    a.style.setProperty('--brand-color', item.color || 'var(--primary)');
    a.style.setProperty('--brand-bg', item.bg || 'var(--primary-light)');

    a.innerHTML = `
      <div class="card-platform-left">
        <div class="platform-icon-circle">
          <i class="${item.icon || 'fas fa-link'}"></i>
        </div>
        <div class="platform-text-meta">
          <div class="platform-name">${escapeHtml(item.name || 'Media Sosial')}</div>
          <div class="platform-handle">${escapeHtml(item.handle || '')}</div>
          <div class="platform-desc">${escapeHtml(item.desc || '')}</div>
        </div>
      </div>
      <div class="card-platform-right">
        <span class="btn-open-channel">
          <span>Kunjungi</span>
          <i class="fas fa-arrow-up-right-from-square"></i>
        </span>
      </div>
    `;

    container.appendChild(a);
  });
}

// ==================== NAVIGASI 3 HALAMAN ====================

function setupNavigation() {
  // Tangani navigasi via Hash URL (contoh: #home, #profile, #contact)
  window.addEventListener('hashchange', handleHashChange);
  
  // Baca hash awal saat pertama kali dibuka
  if (window.location.hash) {
    const pageId = window.location.hash.replace('#', '');
    if (['home', 'profile', 'contact'].includes(pageId)) {
      navigateToPage(pageId, false);
      return;
    }
  }
  navigateToPage('home', false);
}

function handleHashChange() {
  const pageId = window.location.hash.replace('#', '');
  if (['home', 'profile', 'contact'].includes(pageId)) {
    navigateToPage(pageId, false);
  }
}

window.navigateToPage = function(pageId, updateHash = true) {
  // Sembunyikan semua halaman
  document.querySelectorAll('.page-section').forEach(sec => {
    sec.classList.remove('active');
  });

  // Tampilkan halaman terpilih
  const targetPage = document.getElementById('page' + capitalize(pageId));
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Update menu navigasi aktif
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-page') === pageId);
  });

  // Update Hash di URL tanpa reload halaman
  if (updateHash) {
    history.pushState(null, '', '#' + pageId);
  }

  // Scroll halus ke atas
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ==================== SISTEM LOGIN ADMIN ====================

function checkAdminSession() {
  const isAdmin = sessionStorage.getItem(SESSION_AUTH_KEY) === 'true';
  const adminBar = document.getElementById('adminBar');
  const triggerBtn = document.getElementById('loginTriggerBtn');

  if (isAdmin) {
    adminBar.classList.remove('hidden');
    triggerBtn.innerHTML = '<i class="fas fa-user-shield" style="color: #4f46e5;"></i> <span class="admin-label">Admin Aktif</span>';
    triggerBtn.title = 'Anda sedang masuk sebagai Admin';
  } else {
    adminBar.classList.add('hidden');
    triggerBtn.innerHTML = '<i class="fas fa-lock"></i> <span class="admin-label">Admin</span>';
    triggerBtn.title = 'Login Khusus Pemilik / Admin';
  }
}

function handleAdminLogin() {
  const usernameInput = document.getElementById('adminUsername').value.trim();
  const passwordInput = document.getElementById('adminPassword').value.trim();
  const errBox = document.getElementById('loginErrorMsg');

  let authData = DEFAULT_AUTH;
  try {
    const storedAuth = localStorage.getItem(STORAGE_AUTH_KEY);
    if (storedAuth) authData = JSON.parse(storedAuth);
  } catch (e) {}

  if (usernameInput === authData.username && passwordInput === authData.password) {
    sessionStorage.setItem(SESSION_AUTH_KEY, 'true');
    errBox.classList.add('hidden');
    closeModal('loginModal');
    checkAdminSession();
    showToast('Berhasil masuk sebagai Admin!', 'success');
  } else {
    errBox.classList.remove('hidden');
    errBox.textContent = 'Kombinasi username atau password tidak cocok.';
  }
}

function handleAdminLogout() {
  if (confirm('Apakah Anda yakin ingin keluar dari mode Admin?')) {
    sessionStorage.removeItem(SESSION_AUTH_KEY);
    checkAdminSession();
    showToast('Telah keluar dari mode Admin.');
  }
}

// ==================== EDITOR KONTEN WEBSITE ====================

function openContentEditor() {
  // Salin data teks ke form input
  document.getElementById('editName').value = currentData.name || '';
  document.getElementById('editTitle').value = currentData.title || '';
  document.getElementById('editTagline').value = currentData.tagline || '';
  document.getElementById('editQuote').value = currentData.quote || '';
  document.getElementById('editBio').value = currentData.bio || '';
  
  // Foto
  tempPhotoBase64 = null;
  const photoPreview = document.getElementById('photoEditorPreview');
  photoPreview.src = currentData.photo || DEFAULT_DATA.photo;
  document.getElementById('editPhotoUrl').value = currentData.photo && !currentData.photo.startsWith('data:') ? currentData.photo : '';
  document.getElementById('uploadPhotoInput').value = '';

  // Salin Keahlian & Media Sosial ke state sementara
  tempSkillsList = [...(currentData.skills || [])];
  renderSkillsEditManager();

  tempSocialsList = JSON.parse(JSON.stringify(currentData.socials || []));
  renderSocialEditManager();

  // Buka modal di tab pertama
  openModal('editorModal');
  switchEditorTab('tabEditGeneral');
}

// Render Editor Keahlian (Skills)
function renderSkillsEditManager() {
  const container = document.getElementById('skillsEditList');
  container.innerHTML = '';

  if (tempSkillsList.length === 0) {
    container.innerHTML = '<span style="font-size: 0.8rem; color: var(--text-muted); padding: 4px;">Belum ada keahlian ditambahkan.</span>';
    return;
  }

  tempSkillsList.forEach((skill, index) => {
    const pill = document.createElement('div');
    pill.className = 'skill-edit-pill';
    pill.innerHTML = `
      <span>${escapeHtml(skill)}</span>
      <button type="button" class="skill-remove-btn" onclick="removeSkill(${index})" title="Hapus keahlian">&times;</button>
    `;
    container.appendChild(pill);
  });
}

window.removeSkill = function(index) {
  tempSkillsList.splice(index, 1);
  renderSkillsEditManager();
};

function promptAddSkill() {
  const newSkill = prompt('Masukkan nama keahlian atau spesialisasi baru:');
  if (newSkill && newSkill.trim()) {
    tempSkillsList.push(newSkill.trim());
    renderSkillsEditManager();
  }
}

// Render Editor Media Sosial
function renderSocialEditManager() {
  const container = document.getElementById('socialEditList');
  container.innerHTML = '';

  if (tempSocialsList.length === 0) {
    container.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 16px; font-size: 0.85rem;">Belum ada media sosial. Silakan klik tombol di atas untuk menambah.</div>';
    return;
  }

  tempSocialsList.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'social-edit-item';
    div.innerHTML = `
      <div class="item-left">
        <div class="item-icon" style="color: ${item.color || 'var(--primary)'}">
          <i class="${item.icon}"></i>
        </div>
        <div class="item-info">
          <div class="item-handle">${escapeHtml(item.name)} (${escapeHtml(item.handle)})</div>
          <div class="item-url">${escapeHtml(item.url)}</div>
        </div>
      </div>
      <div class="item-actions">
        <button class="btn-icon-action" onclick="moveSocial(${index}, -1)" title="Pindah ke Atas" ${index === 0 ? 'disabled style="opacity:0.3;"' : ''}>
          <i class="fas fa-arrow-up"></i>
        </button>
        <button class="btn-icon-action" onclick="moveSocial(${index}, 1)" title="Pindah ke Bawah" ${index === tempSocialsList.length - 1 ? 'disabled style="opacity:0.3;"' : ''}>
          <i class="fas fa-arrow-down"></i>
        </button>
        <button class="btn-icon-action" onclick="openSingleSocialEditor('${item.id}')" title="Edit Data">
          <i class="fas fa-pen"></i>
        </button>
        <button class="btn-icon-action trash" onclick="deleteSocial(${index})" title="Hapus">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;
    container.appendChild(div);
  });
}

window.moveSocial = function(index, dir) {
  const target = index + dir;
  if (target < 0 || target >= tempSocialsList.length) return;
  const temp = tempSocialsList[index];
  tempSocialsList[index] = tempSocialsList[target];
  tempSocialsList[target] = temp;
  renderSocialEditManager();
};

window.deleteSocial = function(index) {
  if (confirm('Hapus akun media sosial ini dari daftar?')) {
    tempSocialsList.splice(index, 1);
    renderSocialEditManager();
  }
};

// Simpan Seluruh Perubahan Konten
function saveAllContentChanges() {
  const name = document.getElementById('editName').value.trim();
  const title = document.getElementById('editTitle').value.trim();
  const tagline = document.getElementById('editTagline').value.trim();
  const quote = document.getElementById('editQuote').value.trim();
  const bio = document.getElementById('editBio').value.trim();
  const photoUrlInput = document.getElementById('editPhotoUrl').value.trim();

  if (!name) {
    showToast('Nama lengkap tidak boleh kosong!', 'error');
    switchEditorTab('tabEditGeneral');
    return;
  }

  let finalPhoto = currentData.photo;
  if (tempPhotoBase64) {
    finalPhoto = tempPhotoBase64;
  } else if (photoUrlInput) {
    finalPhoto = photoUrlInput;
  }

  currentData = {
    ...currentData,
    name,
    title,
    tagline,
    quote,
    bio,
    photo: finalPhoto,
    skills: tempSkillsList,
    socials: tempSocialsList
  };

  localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(currentData));
  loadData();
  closeModal('editorModal');
  showToast('Seluruh perubahan berhasil disimpan!', 'success');
}

// ==================== EDITOR SATU MEDIA SOSIAL ====================

window.openSingleSocialEditor = function(socialId) {
  const titleEl = document.getElementById('singleSocialTitle');
  const platformSelect = document.getElementById('socialPlatformSelect');
  const handleInput = document.getElementById('socialHandleInput');
  const descInput = document.getElementById('socialDescInput');
  const urlInput = document.getElementById('socialUrlInput');
  const idInput = document.getElementById('socialEditId');

  if (socialId) {
    // Mode Edit
    const item = tempSocialsList.find(s => s.id === socialId);
    if (!item) return;
    titleEl.innerHTML = '<i class="fas fa-pen"></i> Edit Media Sosial';
    idInput.value = item.id;
    platformSelect.value = item.platform || 'custom';
    handleInput.value = item.handle || '';
    descInput.value = item.desc || '';
    urlInput.value = item.url || '';
  } else {
    // Mode Baru
    titleEl.innerHTML = '<i class="fas fa-plus"></i> Tambah Media Sosial';
    idInput.value = '';
    platformSelect.value = 'linkedin';
    const preset = SOCIAL_PRESETS.linkedin;
    handleInput.value = '';
    handleInput.placeholder = preset.defaultHandle;
    descInput.value = preset.defaultDesc;
    urlInput.value = '';
    urlInput.placeholder = preset.urlPrefix;
  }

  openModal('singleSocialModal');
};

function saveSingleSocial() {
  const id = document.getElementById('socialEditId').value;
  const platform = document.getElementById('socialPlatformSelect').value;
  const handle = document.getElementById('socialHandleInput').value.trim();
  const desc = document.getElementById('socialDescInput').value.trim();
  let url = document.getElementById('socialUrlInput').value.trim();

  if (!handle || !url) {
    showToast('Username/Handle dan URL wajib diisi!', 'error');
    return;
  }

  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = `https://${url}`;
  }

  const preset = SOCIAL_PRESETS[platform] || SOCIAL_PRESETS.custom;

  if (id) {
    // Update
    const idx = tempSocialsList.findIndex(s => s.id === id);
    if (idx !== -1) {
      tempSocialsList[idx] = {
        ...tempSocialsList[idx],
        platform,
        name: preset.name,
        handle,
        desc,
        url,
        icon: preset.icon,
        color: preset.color,
        bg: preset.bg
      };
    }
  } else {
    // Baru
    tempSocialsList.push({
      id: 'soc_' + Date.now(),
      platform,
      name: preset.name,
      handle,
      desc,
      url,
      icon: preset.icon,
      color: preset.color,
      bg: preset.bg
    });
  }

  closeModal('singleSocialModal');
  renderSocialEditManager();
  showToast('Media sosial berhasil diperbarui!');
}

// ==================== KEAMANAN & UBAH PASSWORD ====================

function handleChangePassword() {
  const oldPass = document.getElementById('oldPasswordInput').value.trim();
  const newPass = document.getElementById('newPasswordInput').value.trim();

  let auth = DEFAULT_AUTH;
  try {
    const raw = localStorage.getItem(STORAGE_AUTH_KEY);
    if (raw) auth = JSON.parse(raw);
  } catch (e) {}

  if (oldPass !== auth.password) {
    showToast('Password lama Anda tidak tepat!', 'error');
    return;
  }

  if (newPass.length < 4) {
    showToast('Password baru minimal 4 karakter!', 'error');
    return;
  }

  auth.password = newPass;
  localStorage.setItem(STORAGE_AUTH_KEY, JSON.stringify(auth));
  document.getElementById('changePasswordForm').reset();
  closeModal('securityModal');
  showToast('Password admin berhasil diperbarui!', 'success');
}

function handleResetDefaults() {
  if (confirm('PERINGATAN: Seluruh profil, keahlian, dan media sosial akan dikembalikan ke setelan bawaan. Lanjutkan?')) {
    localStorage.removeItem(STORAGE_DATA_KEY);
    localStorage.removeItem(STORAGE_AUTH_KEY);
    sessionStorage.removeItem(SESSION_AUTH_KEY);
    setupStorage();
    loadData();
    checkAdminSession();
    closeModal('securityModal');
    showToast('Data berhasil di-reset ke setelan awal.');
  }
}

// ==================== EVENT LISTENERS & HELPERS ====================

function setupEventListeners() {
  // Trigger Login / Editor
  document.getElementById('loginTriggerBtn').addEventListener('click', () => {
    const isAdmin = sessionStorage.getItem(SESSION_AUTH_KEY) === 'true';
    if (isAdmin) {
      openContentEditor();
    } else {
      openModal('loginModal');
      document.getElementById('adminUsername').focus();
    }
  });

  document.getElementById('openEditorBtn').addEventListener('click', openContentEditor);
  document.getElementById('openSecurityBtn').addEventListener('click', () => openModal('securityModal'));
  document.getElementById('logoutBtn').addEventListener('click', handleAdminLogout);

  // Submit Login
  document.getElementById('submitLoginBtn').addEventListener('click', handleAdminLogin);
  document.getElementById('adminPassword').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') handleAdminLogin();
  });

  // Modal Close Buttons
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.getAttribute('data-close')));
  });

  // Klik di luar modal untuk menutup
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) backdrop.classList.add('hidden');
    });
  });

  // Tabs Editor
  document.querySelectorAll('.modal-tabs .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchEditorTab(btn.getAttribute('data-tab')));
  });

  // Tambah Keahlian
  document.getElementById('addSkillBtn').addEventListener('click', promptAddSkill);

  // Unggah Foto Profil (Base64)
  const uploadInput = document.getElementById('uploadPhotoInput');
  uploadInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        showToast('Ukuran gambar maksimal 3MB!', 'error');
        uploadInput.value = '';
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        tempPhotoBase64 = event.target.result;
        document.getElementById('photoEditorPreview').src = tempPhotoBase64;
        document.getElementById('editPhotoUrl').value = '';
      };
      reader.readAsDataURL(file);
    }
  });

  // Input URL Foto sync preview
  document.getElementById('editPhotoUrl').addEventListener('input', (e) => {
    const val = e.target.value.trim();
    if (val) {
      tempPhotoBase64 = null;
      document.getElementById('photoEditorPreview').src = val;
    }
  });

  // Tombol Tambah Media Sosial
  document.getElementById('addNewSocialBtn').addEventListener('click', () => openSingleSocialEditor(''));
  document.getElementById('saveSingleSocialBtn').addEventListener('click', saveSingleSocial);

  // Sinkronisasi opsi platform terpilih dengan placeholder
  document.getElementById('socialPlatformSelect').addEventListener('change', (e) => {
    const val = e.target.value;
    const preset = SOCIAL_PRESETS[val] || SOCIAL_PRESETS.custom;
    const descInput = document.getElementById('socialDescInput');
    const urlInput = document.getElementById('socialUrlInput');
    const handleInput = document.getElementById('socialHandleInput');

    handleInput.placeholder = preset.defaultHandle;
    descInput.value = preset.defaultDesc;
    urlInput.placeholder = preset.urlPrefix;
  });

  // Simpan Seluruh Konten
  document.getElementById('saveAllChangesBtn').addEventListener('click', saveAllContentChanges);

  // Ganti Password & Reset
  document.getElementById('saveNewPasswordBtn').addEventListener('click', handleChangePassword);
  document.getElementById('resetDefaultsBtn').addEventListener('click', handleResetDefaults);
}

function switchEditorTab(tabId) {
  document.querySelectorAll('.modal-tabs .tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.toggle('active', content.id === tabId);
  });
}

function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('hidden');
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('hidden');
}

let toastTimer;
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  const msg = document.getElementById('toastMsg');
  const icon = document.getElementById('toastIcon');

  msg.textContent = message;

  if (type === 'error') {
    toast.className = 'toast-box toast-error';
    icon.className = 'fas fa-circle-exclamation';
  } else if (type === 'success') {
    toast.className = 'toast-box';
    icon.className = 'fas fa-circle-check';
  } else {
    toast.className = 'toast-box';
    icon.className = 'fas fa-circle-info';
  }

  toast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 3200);
}

function updateCurrentYear() {
  document.getElementById('currentYear').textContent = new Date().getFullYear();
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function sanitizeUrl(url) {
  if (!url) return '#';
  const clean = url.trim();
  if (clean.startsWith('javascript:')) return '#';
  return clean;
}

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
