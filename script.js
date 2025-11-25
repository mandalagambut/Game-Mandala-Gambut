// =========================================
// GAME PENJAGA GAMBUT - FULL SCRIPT V.FINAL
// =========================================

// 1. DATA SKENARIO (Database 10 Ronde)
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
    text: "Kabut asap tebal menyelimuti desa. Anak-anak mulai jatuh sakit.",
    cards: [
      { title: "Bangun Klinik Darurat", desc: "Selamatkan warga. (❤️+5, 💲-4)", eff: {e:0, s:5, m:-4} },
      { title: "Bagikan Masker Gratis", desc: "Solusi murah sementara. (❤️+2, 💲-1)", eff: {e:0, s:2, m:-1} },
      { title: "Minta Bantuan Pusat", desc: "Birokrasi lama. (🌳+1, ❤️-3, 💲0)", eff: {e:1, s:-3, m:0} }
    ]
  },
  {
    ronde: 5,
    text: "Lembaga Swadaya Masyarakat (LSM) Internasional menawarkan program 'Carbon Credit' (Jual Oksigen), tapi melarang aktivitas pertanian.",
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
      { title: "Kejar Pertumbuhan Ekon", desc: "Naikkan produksi. (🌳-4, ❤️-2, 💲+6)", eff: {e:-4, s:-2, m:6} }
    ]
  }
];

// 2. STATE & ELEMENTS (Inisialisasi Variabel & Pengambilan Elemen HTML)
let state = { eco: 10, soc: 10, money: 10, round: 0, selected: null, bgmPlayed: false };

const pages = {
  home: document.getElementById('page-home'),
  game: document.getElementById('page-game'),
  result: document.getElementById('page-result')
};

const ui = {
  // Indikator Skor & Teks
  eco: document.getElementById('val-eko'),
  soc: document.getElementById('val-sos'),
  money: document.getElementById('val-ekn'),
  round: document.getElementById('label-ronde'),
  text: document.getElementById('text-masalah'),
  cards: document.getElementById('card-container'),
  
  // Grup Overlay Visual (Mengambil banyak gambar sekaligus dengan querySelectorAll)
  groupEco: document.querySelectorAll('.ov-eco'),
  groupSos: document.querySelectorAll('.ov-sos'),
  groupEkn: document.querySelectorAll('.ov-ekn'),

  // Elemen Halaman Hasil
  resTitle: document.getElementById('res-title'),
  resDesc: document.getElementById('res-desc'),
  resIcon: document.getElementById('res-icon'),
  endEko: document.getElementById('end-eko'),
  endSos: document.getElementById('end-sos'),
  endEkn: document.getElementById('end-ekn')
};

// Ambil elemen audio BGM (Pastikan tag <audio id="bgm"> ada di HTML)
const bgm = document.getElementById('bgm');

// 3. FUNGSI NAVIGASI (Pindah Halaman & Tombol)
function switchPage(pageName) {
  // Sembunyikan semua halaman dulu
  Object.values(pages).forEach(p => p.classList.add('hidden'));
  // Munculkan halaman yang diminta
  pages[pageName].classList.remove('hidden');
}

// Event Listener Tombol Mulai
document.getElementById('btn-start').addEventListener('click', () => {
  // Coba putar musik jika belum diputar
  if (!state.bgmPlayed && bgm) {
    bgm.volume = 0.3;
    try {
        bgm.play().catch(e => console.log("Info: Autoplay BGM dicegah browser (normal).", e));
    } catch (err) {
        console.log("Error BGM:", err);
    }
    state.bgmPlayed = true;
  }
  startGame();
});

// Event Listener Tombol Restart
document.getElementById('btn-restart').addEventListener('click', () => {
  startGame();
});

// 4. LOGIKA GAME UTAMA
function startGame() {
  // Reset status game ke awal
  state.eco = 10; state.soc = 10; state.money = 10; state.round = 0; state.selected = null;
  updateUI(); // Update tampilan ke skor awal (10)
  renderRound(); // Siapkan ronde 1
  switchPage('game'); // Pindah ke layar game
}

// Fungsi untuk menampilkan kartu dan teks ronde saat ini
function renderRound() {
  const currentData = dbRonde[state.round];
  
  // Cek apakah ronde sudah habis (Game Selesai)
  if (!currentData) {
    finishGame();
    return;
  }

  // Reset pilihan kartu
  state.selected = null;
  
  // Update teks ronde dan masalah
  ui.round.innerText = `RONDE ${currentData.ronde} / ${dbRonde.length}`;
  ui.text.innerText = currentData.text;

  // Kosongkan kontainer kartu sebelum diisi yang baru
  ui.cards.innerHTML = '';
  
  // Buat elemen kartu pilihan secara dinamis
  currentData.cards.forEach((card, index) => {
    const btn = document.createElement('div');
    btn.className = 'card';
    btn.innerHTML = `<h4>${card.title}</h4><p>${card.desc}</p>`;
    
    // Event saat kartu diklik
    btn.addEventListener('click', () => {
      // Hapus highlight dari kartu lain
      document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
      // Tambah highlight ke kartu yang diklik
      btn.classList.add('selected');
      // Simpan indeks kartu yang dipilih
      state.selected = index;
    });
    
    ui.cards.appendChild(btn);
  });
}

// Fungsi yang dipanggil saat tombol "KONFIRMASI PILIHAN" diklik
function selesaiRonde() {
  // Cek apakah pemain sudah memilih kartu
  if (state.selected === null) {
    alert("Pilih dulu satu kartu!");
    return;
  }

  // Ambil efek dari kartu yang dipilih
  const effects = dbRonde[state.round].cards[state.selected].eff;
  // Terapkan efek ke skor
  applyEffect('eco', effects.e || 0);
  applyEffect('soc', effects.s || 0);
  applyEffect('money', effects.m || 0);

  // Lanjut ke ronde berikutnya
  state.round++;
  renderRound();
}

// Fungsi untuk menghitung perubahan skor
function applyEffect(type, val) {
  state[type] += val;
  
  // === ATURAN BATAS SKOR (UPDATED) ===
  // Batas Maksimal: 10 (Tidak bisa lebih)
  if(state[type] > 10) state[type] = 10; 
  // Batas Minimal: 0 (Tidak bisa kurang)
  if(state[type] < 0) state[type] = 0;
  // ===================================
  
  // Update tampilan setelah skor berubah
  updateUI();
}

// Fungsi untuk memperbarui semua elemen tampilan (skor & visual)
function updateUI() {
  // Update angka skor
  ui.eco.innerText = state.eco;
  ui.soc.innerText = state.soc;
  ui.money.innerText = state.money;

  // Update visual overlay menggunakan logika level baru
  updateOverlayState(ui.groupEco, state.eco);
  updateOverlayState(ui.groupSos, state.soc);
  updateOverlayState(ui.groupEkn, state.money);
}

// Fungsi Logika Visual Overlay (Sistem 4 Level Gambar)
function updateOverlayState(imageGroup, score) {
  let targetLevel = 0; // 0 artinya aman (tidak ada overlay yang muncul)

  // Tentukan level gambar mana yang harus muncul berdasarkan skor
  if (score <= 2) {
    targetLevel = 1; // Level 1: Kritis (Skor 0-2)
  } else if (score <= 4) {
    targetLevel = 2; // Level 2: Bahaya (Skor 3-4)
  } else if (score <= 7) {
    targetLevel = 3; // Level 3: Waspada (Skor 5-7)
  } else {
    targetLevel = 4; // Level 4: Aman/Ringan (Skor 8-10)
  }

  // Loop semua gambar di grup, nyalakan yang sesuai level, matikan sisanya
  imageGroup.forEach(img => {
    // Cek apakah gambar ini punya class level yang ditargetkan
    if (targetLevel > 0 && img.classList.contains(`lvl-${targetLevel}`)) {
      img.style.opacity = 1; // Munculkan
    } else {
      img.style.opacity = 0; // Sembunyikan
    }
  });
}


// 5. FUNGSI HASIL AKHIR (UPDATED: Logika Gagal Jika Ada Nilai < 5)
function finishGame() {
  switchPage('result');
  
  // Tampilkan skor akhir di layar hasil
  ui.endEko.innerText = state.eco;
  ui.endSos.innerText = state.soc;
  ui.endEkn.innerText = state.money;

  // === ATURAN MENANG/KALAH BARU ===
  // Cek apakah ada SATU SAJA indikator yang nilainya di bawah 5
  const isFailed = state.eco < 5 || state.soc < 5 || state.money < 5;

  if (isFailed) {
    // === KONDISI KALAH (BAD ENDING) ===
    pages.result.className = "screen lose-theme";
    ui.resTitle.innerText = "MISI GAGAL ⚠️";
    ui.resIcon.innerText = "🔥";
    
    // Beri pesan spesifik kenapa gagal
    if (state.eco < 5) {
        ui.resDesc.innerText = "Kerusakan lingkungan terlalu parah. Alam tidak bisa pulih.";
    } else if (state.soc < 5) {
        ui.resDesc.innerText = "Konflik sosial meledak. Desa menjadi tidak aman.";
    } else {
        ui.resDesc.innerText = "Desa bangkrut. Ekonomi runtuh total.";
    }

  } else {
    // === KONDISI MENANG (GOOD ENDING) ===
    // Hanya jika semua indikator bernilai 5 atau lebih
    pages.result.className = "screen win-theme";
    ui.resTitle.innerText = "SUKSES BESAR! 🏆";
    ui.resIcon.innerText = "🌿";
    ui.resDesc.innerText = "Luar biasa! Kamu berhasil menjaga keseimbangan desa dan alam dengan sangat baik. Semua sektor aman.";
  }
}