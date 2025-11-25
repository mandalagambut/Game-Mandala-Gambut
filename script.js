// 1. DATA SKENARIO (Database Ronde "Sakit")
// 1. DATA SKENARIO (10 Ronde Full - Menantang)
const dbRonde = [
  {
    ronde: 1,
    text: "Musim kemarau tiba. Terdeteksi titik api kecil di pinggiran lahan gambut desa.",
    cards: [
      { title: "Kirim Tim Pemadam", desc: "Efektif tapi mahal. (🌳+2, ❤️+1, 💲-3)", eff: {e:2, s:1, m:-3} },
      { title: "Tutup Kanal Air", desc: "Membasahi lahan. (🌳+3, ❤️-2, 💲-1)", eff: {e:3, s:-2, m:-1} },
      { title: "Biarkan Padam Alami", desc: "Berisiko tinggi! (🌳-4, ❤️-2, 💲+1)", eff: {e:-4, s:-2, m:1} }
    ]
  },
  {
    ronde: 2,
    text: "Harga kerajinan purun anjlok drastis. Warga mengeluh tidak punya uang untuk makan.",
    cards: [
      { title: "Beri BLT Desa", desc: "Warga senang, kas desa jebol. (❤️+4, 💲-5)", eff: {e:0, s:4, m:-5} },
      { title: "Izinkan Tanam Sawit", desc: "Uang cepat, gambut rusak. (🌳-3, ❤️+1, 💲+4)", eff: {e:-3, s:1, m:4} },
      { title: "Pelatihan Ekowisata", desc: "Investasi jangka panjang. (🌳+1, ❤️-1, 💲-2)", eff: {e:1, s:-1, m:-2} }
    ]
  },
  {
    ronde: 3,
    text: "Perusahaan besar datang membawa koper berisi 2 Miliar Rupiah untuk izin pembukaan lahan.",
    cards: [
      { title: "Tolak Mentah-mentah", desc: "Jaga alam, ekonomi sulit. (🌳+4, ❤️-2, 💲-2)", eff: {e:4, s:-2, m:-2} },
      { title: "Ambil Uangnya!", desc: "Desa kaya, alam hancur. (🌳-8, ❤️+3, 💲+8)", eff: {e:-8, s:3, m:8} },
      { title: "Negosiasi Area Kecil", desc: "Kompromi berisiko. (🌳-3, ❤️+1, 💲+4)", eff: {e:-3, s:1, m:4} }
    ]
  },
  {
    ronde: 4,
    text: "Kabut asap tebal menyelimuti desa (ISPA). Anak-anak mulai jatuh sakit.",
    cards: [
      { title: "Bangun Klinik Darurat", desc: "Selamatkan warga. (❤️+5, 💲-4)", eff: {e:0, s:5, m:-4} },
      { title: "Bagikan Masker Gratis", desc: "Solusi murah sementara. (❤️+2, 💲-1)", eff: {e:0, s:2, m:-1} },
      { title: "Minta Bantuan Pusat", desc: "Birokrasi lama. (🌳+1, ❤️-3, 💲0)", eff: {e:1, s:-3, m:0} }
    ]
  },
  {
    ronde: 5,
    text: "LSM Internasional menawarkan program 'Carbon Credit' (Jual Oksigen), tapi melarang aktivitas pertanian.",
    cards: [
      { title: "Terima Kontrak Penuh", desc: "Uang masuk, petani marah. (🌳+5, ❤️-5, 💲+3)", eff: {e:5, s:-5, m:3} },
      { title: "Tolak Tawaran LSM", desc: "Bebaskan petani. (🌳-2, ❤️+4, 💲-1)", eff: {e:-2, s:4, m:-1} },
      { title: "Kerjasama Terbatas", desc: "Cari jalan tengah. (🌳+2, ❤️-1, 💲+1)", eff: {e:2, s:-1, m:1} }
    ]
  },
  {
    ronde: 6,
    text: "Terjadi konflik sengketa lahan antara petani pendatang dan warga asli.",
    cards: [
      { title: "Bela Warga Asli", desc: "Solidaritas naik, konflik tajam. (❤️+2, 💲-2)", eff: {e:0, s:2, m:-2} },
      { title: "Bela Petani Pendatang", desc: "Ekonomi jalan, sosial pecah. (❤️-4, 💲+3)", eff: {e:-1, s:-4, m:3} },
      { title: "Mediasi Adat", desc: "Biaya mahal, hasil damai. (❤️+3, 💲-3)", eff: {e:0, s:3, m:-3} }
    ]
  },
  {
    ronde: 7,
    text: "Kanal drainase lama jebol, menyebabkan lahan gambut kering kerontang (Rawan Terbakar).",
    cards: [
      { title: "Bangun Sekat Kanal", desc: "Wajib tapi mahal. (🌳+5, 💲-4)", eff: {e:5, s:0, m:-4} },
      { title: "Tambal Seadanya", desc: "Murah, risiko tetap ada. (🌳+1, 💲-1)", eff: {e:1, s:0, m:-1} },
      { title: "Alihkan ke Pertanian", desc: "Manfaatkan lahan kering. (🌳-5, 💲+4)", eff: {e:-5, s:1, m:4} }
    ]
  },
  {
    ronde: 8,
    text: "Anak muda desa mulai merantau ke kota karena merasa tidak ada masa depan di kampung gambut.",
    cards: [
      { title: "Bikin Festival Gambut", desc: "Tarik minat wisata. (❤️+3, 💲-2)", eff: {e:1, s:3, m:-2} },
      { title: "Digitalisasi UMKM", desc: "Jual produk online. (❤️+2, 💲+2)", eff: {e:0, s:2, m:2} },
      { title: "Buka Tambang Pasir", desc: "Lapangan kerja merusak. (🌳-6, 💲+5)", eff: {e:-6, s:-1, m:5} }
    ]
  },
  {
    ronde: 9,
    text: "Banjir besar melanda! Akibat rusaknya daerah resapan air di hulu.",
    cards: [
      { title: "Evakuasi Total", desc: "Fokus keselamatan. (❤️+4, 💲-5)", eff: {e:0, s:4, m:-5} },
      { title: "Perbaiki Tanggul", desc: "Kerja bakti massal. (🌳+2, ❤️+2, 💲-3)", eff: {e:2, s:2, m:-3} },
      { title: "Salahkan Perusahaan", desc: "Demo besar-besaran. (❤️-2, 💲0)", eff: {e:0, s:-2, m:0} }
    ]
  },
  {
    ronde: 10,
    text: "Evaluasi Akhir Tahun. Pemerintah Pusat datang menilai kinerjamu. Apa fokus terakhirmu?",
    cards: [
      { title: "Prioritas Lingkungan", desc: "Restorasi total. (🌳+6, ❤️-2, 💲-3)", eff: {e:6, s:-2, m:-3} },
      { title: "Prioritas Kesejahteraan", desc: "Bagi-bagi modal. (🌳-2, ❤️+6, 💲-3)", eff: {e:-2, s:6, m:-3} },
      { title: "Kejar Pertumbuhan Ekon", desc: "Genjot produksi. (🌳-4, ❤️-2, 💲+6)", eff: {e:-4, s:-2, m:6} }
    ]
  }
];

// 2. STATE & ELEMENTS
let state = { eco: 10, soc: 10, money: 10, round: 0, selected: null, bgmPlayed: false };

const pages = {
  home: document.getElementById('page-home'),
  game: document.getElementById('page-game'),
  result: document.getElementById('page-result')
};

const ui = {
  eco: document.getElementById('val-eko'),
  soc: document.getElementById('val-sos'),
  money: document.getElementById('val-ekn'),
  round: document.getElementById('label-ronde'),
  text: document.getElementById('text-masalah'),
  cards: document.getElementById('card-container'),
  
  // Overlays
  ovEko: document.querySelector('.overlay-eko'),
  ovSos: document.querySelector('.overlay-sos'),
  ovEkn: document.querySelector('.overlay-ekn'),

  // Result
  resTitle: document.getElementById('res-title'),
  resDesc: document.getElementById('res-desc'),
  resIcon: document.getElementById('res-icon'),
  endEko: document.getElementById('end-eko'),
  endSos: document.getElementById('end-sos'),
  endEkn: document.getElementById('end-ekn')
};

const bgm = document.getElementById('bgm');

// 3. NAVIGATION FUNCTIONS
function switchPage(pageName) {
  // Sembunyikan semua
  Object.values(pages).forEach(p => p.classList.add('hidden'));
  // Munculkan yang diminta
  pages[pageName].classList.remove('hidden');
}

// Tombol Mulai
document.getElementById('btn-start').addEventListener('click', () => {
  // Mulai Musik (Safe play)
  if (!state.bgmPlayed && bgm) {
    bgm.volume = 0.3;
    bgm.play().catch(e => console.log("BGM error:", e));
    state.bgmPlayed = true;
  }
  startGame();
});

// Tombol Restart
document.getElementById('btn-restart').addEventListener('click', () => {
  startGame();
});

// 4. GAME LOGIC
function startGame() {
  state.eco = 10; state.soc = 10; state.money = 10; state.round = 0; state.selected = null;
  updateUI();
  renderRound();
  switchPage('game');
}

function renderRound() {
  const currentData = dbRonde[state.round];
  
  // Cek jika game tamat (jika data ronde habis)
  if (!currentData) {
    finishGame();
    return;
  }

  // Reset Pilihan
  state.selected = null;

  // Render Teks
  ui.round.innerText = `RONDE ${currentData.ronde} / ${dbRonde.length}`;
  ui.text.innerText = currentData.text;

  // Render Kartu
  ui.cards.innerHTML = '';
  currentData.cards.forEach((card, index) => {
    const btn = document.createElement('div');
    btn.className = 'card';
    btn.innerHTML = `<h4>${card.title}</h4><p>${card.desc}</p>`;
    
    btn.addEventListener('click', () => {
      // Hapus kelas selected dari semua
      document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
      // Tambah ke yang diklik
      btn.classList.add('selected');
      state.selected = index;
    });
    
    ui.cards.appendChild(btn);
  });
}

function selesaiRonde() {
  if (state.selected === null) {
    alert("Pilih dulu satu kartu!");
    return;
  }

  // Terapkan Efek
  const effects = dbRonde[state.round].cards[state.selected].eff;
  applyEffect('eco', effects.e || 0);
  applyEffect('soc', effects.s || 0);
  applyEffect('money', effects.m || 0);

  // Lanjut Ronde
  state.round++;
  renderRound();
}

function applyEffect(type, val) {
  state[type] += val;
  // Batasi 0 - 10 (Opsional, bisa dilepas kalau mau tanpa batas)
  if(state[type] > 15) state[type] = 15; 
  if(state[type] < 0) state[type] = 0;
  updateUI();
}

function updateUI() {
  ui.eco.innerText = state.eco;
  ui.soc.innerText = state.soc;
  ui.money.innerText = state.money;

  // Update Overlay Opacity (Makin rendah nilai, makin terlihat overlay bahaya)
  // Logic: 10 (Aman) -> Opacity 0.1 ... 0 (Bahaya) -> Opacity 1.0
  setOverlay(ui.ovEko, state.eco);
  setOverlay(ui.ovSos, state.soc);
  setOverlay(ui.ovEkn, state.money);
}

function setOverlay(element, value) {
  let op = 0; // Variabel untuk menyimpan nilai Opacity (0.0 s/d 1.0)

  // LOGIKA PENGATURANNYA DI SINI:
  
  if (value >= 8) {
    op = 0.1; // KONDISI AMAN (Skor 8-10): Hampir tidak terlihat (10%)
  } 
  else if (value >= 5) {
    op = 0.4; // KONDISI WASPADA (Skor 5-7): Mulai terlihat samar (40%)
  } 
  else if (value >= 3) {
    op = 0.7; // KONDISI BAHAYA (Skor 3-4): Terlihat jelas (70%)
  } 
  else {
    op = 1.0; // KONDISI KRITIS (Skor 0-2): Gambar muncul penuh (100%)
  }

  // Terapkan perubahan ke elemen HTML
  element.style.opacity = op; 
}

// 5. HASIL AKHIR
function finishGame() {
  switchPage('result');
  
  ui.endEko.innerText = state.eco;
  ui.endSos.innerText = state.soc;
  ui.endEkn.innerText = state.money;

  const total = state.eco + state.soc + state.money;
  const isAlive = state.eco > 0 && state.soc > 0 && state.money > 0;

  if (total >= 18 && isAlive) {
    pages.result.className = "screen win-theme"; // Hijau
    ui.resTitle.innerText = "SUKSES BESAR! 🏆";
    ui.resIcon.innerText = "🌿";
    ui.resDesc.innerText = "Kamu berhasil menyeimbangkan alam dan kebutuhan warga.";
  } else {
    pages.result.className = "screen lose-theme"; // Merah
    ui.resTitle.innerText = "MISI GAGAL ⚠️";
    ui.resIcon.innerText = "🔥";
    ui.resDesc.innerText = "Salah satu sektor hancur atau keseimbangan tidak tercapai.";
  }
}