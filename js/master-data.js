/* ==========================================================================
   MASTER DATA SICERMAT (HARGA DASAR & ANALISA HARGA SATUAN PEKERJAAN)
   ========================================================================== */

// 1. DATA HARGA DASAR KOMPONEN (BAHAN, ALAT, UPAH)[span_1](start_span)[span_1](end_span)
const masterBahan = [
  { nama: "Semen Portland (50kg)", harga: 75000, satuan: "sak" },
  { nama: "Pasir Pasang / Pasir Beton", harga: 220000, satuan: "m3" },
  { nama: "Pasir Urug", harga: 150000, satuan: "m3" },
  { nama: "Batu Belah / Batu Kali", harga: 250000, satuan: "m3" },
  { nama: "Batu Pecah / Split 2/3", harga: 280000, satuan: "m3" },
  { nama: "Bata Merah", harga: 1200, satuan: "bh" },
  { nama: "Bata Ringan / Hebel (t=10cm)", harga: 750000, satuan: "m3" },
  { nama: "Semen Mortar Thinbed / Perekat Hebel", harga: 85000, satuan: "sak" },
  { nama: "Besi Beton Polos / Ulir", harga: 14500, satuan: "kg" },
  { nama: "Kawat Beton / Bendrat", harga: 25000, satuan: "kg" },
  { nama: "Kayu Bekisting / Meranti", harga: 2800000, satuan: "m3" },
  { nama: "Plywood / Multiplek 9mm", harga: 165000, satuan: "lbr" },
  { nama: "Paku Biasa 2\" - 5\"", harga: 20000, satuan: "kg" },
  { nama: "Keramik Lantai 40x40 cm KW 1", harga: 65000, satuan: "dus" },
  { nama: "Keramik Lantai 30x30 cm (Kamar Mandi)", harga: 60000, satuan: "dus" },
  { nama: "Semen Warna / Nat Keramik", harga: 18000, satuan: "kg" },
  { nama: "Cat Tembok Dinding Dalam (Interior)", harga: 35000, satuan: "kg" },
  { nama: "Cat Tembok Dinding Luar (Exterior)", harga: 65000, satuan: "kg" },
  { nama: "Plamuur Tembok", harga: 20000, satuan: "kg" },
  { nama: "Pipa PVC 4\" Type AW", harga: 125000, satuan: "btg" },
  { nama: "Pipa PVC 3\" Type AW", harga: 95000, satuan: "btg" },
  { nama: "Pipa PVC 3/4\" Type AW", harga: 35000, satuan: "btg" }
];

const masterAlat = [
  { nama: "Molen / Concrete Mixer 0.35m3", harga: 150000, satuan: "hari" },
  { nama: "Stamper Kuda / Plate Compactor", harga: 200000, satuan: "hari" },
  { nama: "Concrete Vibrator", harga: 120000, satuan: "hari" },
  { nama: "Sewa Scaffolding (1 Set / Bulan)", harga: 35000, satuan: "set" },
  { nama: "Alat Bantu Kerja & Pertukangan", harga: 25000, satuan: "ls" }
];

const masterUpah = [
  { nama: "Pekerja / Kuli", harga: 110000, satuan: "OH" },
  { nama: "Tukang Batu / Kayu / Besi / Cat", harga: 140000, satuan: "OH" },
  { nama: "Kepala Tukang", harga: 160000, satuan: "OH" },
  { nama: "Mandor Proyek", harga: 180000, satuan: "OH" }
];

// 2. DATABASE ANALISA HARGA SATUAN PEKERJAAN (AHSP) LENGKAP[span_2](start_span)[span_2](end_span)
const ahsDatabase = [
  // --- Pekerjaan Persiapan (Awal & Tambahan) ---
  {
    code: "AHS-PRP-01",
    category: "Pekerjaan Persiapan",
    title: "Pembersihan dan Perataan Lapangan/Lahan",
    unit: "m2",
    details: [
      { name: "Pekerja", coeff: 0.100, unit: "OH", price: 110000 },
      { name: "Mandor Proyek", coeff: 0.050, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-PRP-02",
    category: "Pekerjaan Persiapan",
    title: "Pemasangan Pengukuran & Papan Bouwplank",
    unit: "m'",
    details: [
      { name: "Kayu Bekisting / Meranti", coeff: 0.012, unit: "m3", price: 2800000 },
      { name: "Paku Biasa 2\" - 5\"", coeff: 0.020, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 0.100, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 0.100, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.005, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-PRP-03",
    category: "Pekerjaan Persiapan",
    title: "Pembuatan Direksikeet",
    unit: "m2",
    details: [
      { name: "Kayu Bekisting / Meranti", coeff: 0.150, unit: "m3", price: 2800000 },
      { name: "Plywood / Multiplek 9mm", coeff: 0.350, unit: "lbr", price: 165000 },
      { name: "Paku Biasa 2\" - 5\"", coeff: 0.400, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 1.000, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 1.000, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.100, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.050, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-PRP-04",
    category: "Pekerjaan Persiapan",
    title: "Pemasangan Pagar Keliling Proyek",
    unit: "m'",
    details: [
      { name: "Kayu Bekisting / Meranti", coeff: 0.050, unit: "m3", price: 2800000 },
      { name: "Paku Biasa 2\" - 5\"", coeff: 0.100, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 0.400, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 0.400, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.040, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.020, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-PRP-05",
    category: "Pekerjaan Persiapan",
    title: "Pembuatan Bedeng Pekerja",
    unit: "m2",
    details: [
      { name: "Kayu Bekisting / Meranti", coeff: 0.120, unit: "m3", price: 2800000 },
      { name: "Plywood / Multiplek 9mm", coeff: 0.300, unit: "lbr", price: 165000 },
      { name: "Paku Biasa 2\" - 5\"", coeff: 0.350, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 0.800, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 0.800, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.080, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.040, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-PRP-06",
    category: "Pekerjaan Persiapan",
    title: "Pembuatan Toilet Sementara",
    unit: "ls",
    details: [
      { name: "Pipa PVC 3\" Type AW", coeff: 2.000, unit: "btg", price: 95000 },
      { name: "Pipa PVC 3/4\" Type AW", coeff: 2.000, unit: "btg", price: 35000 },
      { name: "Kayu Bekisting / Meranti", coeff: 0.100, unit: "m3", price: 2800000 },
      { name: "Paku Biasa 2\" - 5\"", coeff: 0.250, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 1.500, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 1.500, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.150, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.075, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-PRP-07",
    category: "Pekerjaan Persiapan",
    title: "Pembuatan Gudang",
    unit: "m2",
    details: [
      { name: "Kayu Bekisting / Meranti", coeff: 0.130, unit: "m3", price: 2800000 },
      { name: "Plywood / Multiplek 9mm", coeff: 0.300, unit: "lbr", price: 165000 },
      { name: "Paku Biasa 2\" - 5\"", coeff: 0.300, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 0.900, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 0.900, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.090, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.045, unit: "OH", price: 180000 }
    ]
  },

  // --- Pekerjaan Tanah (Awal & Tambahan) ---
  {
    code: "AHS-TNH-01",
    category: "Pekerjaan Tanah",
    title: "Galian Tanah Biasa Kedalaman s/d 1 Meter",
    unit: "m3",
    details: [
      { name: "Pekerja", coeff: 0.750, unit: "OH", price: 110000 },
      { name: "Mandor Proyek", coeff: 0.025, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-TNH-02",
    category: "Pekerjaan Tanah",
    title: "Urugan Kembali Galian / Tanah Urug",
    unit: "m3",
    details: [
      { name: "Pekerja", coeff: 0.250, unit: "OH", price: 110000 },
      { name: "Mandor Proyek", coeff: 0.008, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-TNH-03",
    category: "Pekerjaan Tanah",
    title: "Urugan Pasir Bawah Pondasi / Lantai (t=10cm)",
    unit: "m3",
    details: [
      { name: "Pasir Urug", coeff: 1.200, unit: "m3", price: 150000 },
      { name: "Pekerja", coeff: 0.300, unit: "OH", price: 110000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-TNH-04",
    category: "Pekerjaan Tanah",
    title: "Galian Tanah Sedalam 2 Meter",
    unit: "m3",
    details: [
      { name: "Pekerja", coeff: 1.150, unit: "OH", price: 110000 },
      { name: "Mandor Proyek", coeff: 0.045, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-TNH-05",
    category: "Pekerjaan Tanah",
    title: "Galian Tanah Mekanis",
    unit: "m3",
    details: [
      { name: "Alat Bantu Kerja & Pertukangan", coeff: 0.050, unit: "ls", price: 25000 },
      { name: "Pekerja", coeff: 0.150, unit: "OH", price: 110000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-TNH-06",
    category: "Pekerjaan Tanah",
    title: "Urugan Tanah Mekanis",
    unit: "m3",
    details: [
      { name: "Pasir Urug", coeff: 1.000, unit: "m3", price: 150000 },
      { name: "Pekerja", coeff: 0.150, unit: "OH", price: 110000 },
      { name: "Mandor Proyek", coeff: 0.005, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-TNH-07",
    category: "Pekerjaan Tanah",
    title: "Pemadatan Tanah",
    unit: "m3",
    details: [
      { name: "Stamper Kuda / Plate Compactor", coeff: 0.100, unit: "hari", price: 200000 },
      { name: "Pekerja", coeff: 0.200, unit: "OH", price: 110000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },

  // --- Pekerjaan Pondasi ---
  {
    code: "AHS-PND-01",
    category: "Pekerjaan Pondasi",
    title: "Pasangan Pondasi Batu Kali Adukan 1PC : 4PP",
    unit: "m3",
    details: [
      { name: "Batu Belah / Batu Kali", coeff: 1.200, unit: "m3", price: 250000 },
      { name: "Semen Portland (50kg)", coeff: 3.260, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.520, unit: "m3", price: 220000 },
      { name: "Pekerja", coeff: 1.500, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.750, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.075, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.075, unit: "OH", price: 180000 }
    ]
  },

  // --- Pekerjaan Beton ---
  {
    code: "AHS-BTN-01",
    category: "Pekerjaan Beton",
    title: "Beton Cor Mutu K-225 (Slab/Sloof/Kolom)",
    unit: "m3",
    details: [
      { name: "Semen Portland (50kg)", coeff: 7.420, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.499, unit: "m3", price: 220000 },
      { name: "Batu Pecah / Split 2/3", coeff: 0.760, unit: "m3", price: 280000 },
      { name: "Pekerja", coeff: 1.650, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.275, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.028, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.083, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-BTN-02",
    category: "Pekerjaan Beton",
    title: "Pembesian Struktur Besi Beton (Polos / Ulir)",
    unit: "kg",
    details: [
      { name: "Besi Beton Polos / Ulir", coeff: 1.050, unit: "kg", price: 14500 },
      { name: "Kawat Beton / Bendrat", coeff: 0.015, unit: "kg", price: 25000 },
      { name: "Pekerja", coeff: 0.007, unit: "OH", price: 110000 },
      { name: "Tukang Besi", coeff: 0.007, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.0007, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.0004, unit: "OH", price: 180000 }
    ]
  },

  // --- Pekerjaan Finishing / Arsitektur ---
  {
    code: "AHS-FIN-01",
    category: "Pekerjaan Finishing/Arsitektur",
    title: "Pasangan Dinding Bata Ringan / Hebel t=10cm",
    unit: "m2",
    details: [
      { name: "Bata Ringan / Hebel (t=10cm)", coeff: 0.100, unit: "m3", price: 750000 },
      { name: "Semen Mortar Thinbed / Perekat Hebel", coeff: 0.100, unit: "sak", price: 85000 },
      { name: "Pekerja", coeff: 0.200, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.100, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-FIN-02",
    category: "Pekerjaan Finishing/Arsitektur",
    title: "Plesteran Dinding 1PC : 4PP (t=15mm)",
    unit: "m2",
    details: [
      { name: "Semen Portland (50kg)", coeff: 0.158, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.026, unit: "m3", price: 220000 },
      { name: "Pekerja", coeff: 0.300, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.150, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.015, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.015, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-FIN-03",
    category: "Pekerjaan Finishing/Arsitektur",
    title: "Acian Dinding",
    unit: "m2",
    details: [
      { name: "Semen Portland (50kg)", coeff: 0.065, unit: "sak", price: 75000 },
      { name: "Pekerja", coeff: 0.200, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.100, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-FIN-04",
    category: "Pekerjaan Finishing/Arsitektur",
    title: "Pasangan Lantai Keramik 40x40 cm KW 1",
    unit: "m2",
    details: [
      { name: "Keramik Lantai 40x40 cm KW 1", coeff: 1.050, unit: "dus", price: 65000 },
      { name: "Semen Portland (50kg)", coeff: 0.240, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.045, unit: "m3", price: 220000 },
      { name: "Semen Warna / Nat Keramik", coeff: 0.500, unit: "kg", price: 18000 },
      { name: "Pekerja", coeff: 0.700, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.350, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.035, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.035, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-FIN-05",
    category: "Pekerjaan Finishing/Arsitektur",
    title: "Pengecatan Dinding Tembok Baru (Interior)",
    unit: "m2",
    details: [
      { name: "Cat Tembok Dinding Dalam (Interior)", coeff: 0.260, unit: "kg", price: 35000 },
      { name: "Plamuur Tembok", coeff: 0.100, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 0.020, unit: "OH", price: 110000 },
      { name: "Tukang Cat", coeff: 0.063, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.006, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.003, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-FIN-06",
    category: "Pekerjaan Finishing/Arsitektur",
    title: "Pengecatan Dinding Tembok Baru (Exterior)",
    unit: "m2",
    details: [
      { name: "Cat Tembok Dinding Luar (Exterior)", coeff: 0.280, unit: "kg", price: 65000 },
      { name: "Plamuur Tembok", coeff: 0.100, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 0.020, unit: "OH", price: 110000 },
      { name: "Tukang Cat", coeff: 0.070, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.007, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.003, unit: "OH", price: 180000 }
    ]
  }
];

// 3. FUNGSI RENDER TABEL HARGA DASAR (PANEL BOTTOM) DENGAN INPUT INTERAKTIF[span_3](start_span)[span_3](end_span)
function renderPriceTable(type) {
  let targetBodyId, searchInputId, dataList;

  if (type === 'bahan') {
    targetBodyId = 'materialPriceTable';
    searchInputId = 'searchBahan';
    dataList = masterBahan;
  } else if (type === 'alat') {
    targetBodyId = 'equipmentPriceTable';
    searchInputId = 'searchAlat';
    dataList = masterAlat;
  } else if (type === 'upah') {
    targetBodyId = 'laborPriceTable';
    searchInputId = 'searchUpah';
    dataList = masterUpah;
  }

  const tbody = document.getElementById(targetBodyId);
  const searchVal = (document.getElementById(searchInputId)?.value || '').toLowerCase();
  if (!tbody) return;

  tbody.innerHTML = '';

  dataList.forEach((item, index) => {
    if (!searchVal || item.nama.toLowerCase().includes(searchVal)) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${item.nama}</td>
        <td class="text-end" style="width: 160px;">
          <input type="number" class="form-control form-control-sm text-end" 
                 value="${item.harga}" 
                 onchange="updateHargaDasar('${type}', ${index}, this.value)"
                 min="0" step="100">
        </td>
      `;
      tbody.appendChild(tr);
    }
  });

  if (tbody.children.length === 0) {
    tbody.innerHTML = '<tr><td colspan="2" class="text-center text-muted">Data tidak ditemukan</td></tr>';
  }
}

function addMasterItem(type) {
  const nama = prompt("Masukkan nama item baru:");
  if (!nama) return;
  
  const hargaInput = prompt("Masukkan harga satuan (angka):");
  const harga = parseFloat(hargaInput) || 0;
  
  const satuan = prompt("Masukkan satuan (contoh: m3, kg, OH, sak):", "m3") || "unit";

  const newItem = { nama, harga, satuan };

  if (type === 'bahan') masterBahan.push(newItem);
  else if (type === 'alat') masterAlat.push(newItem);
  else if (type === 'upah') masterUpah.push(newItem);

  renderPriceTable(type);
}

