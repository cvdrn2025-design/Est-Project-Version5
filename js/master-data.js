// ==========================================
// 1. DATA MASTER HARGA DASAR (Bahan, Alat, Upah)
// ==========================================
let masterData = {
  bahan: [
    { name: "Semen Portland (50kg)", price: 75000 },
    { name: "Pasir Pasang / m3", price: 220000 },
    { name: "Pasir Beton / m3", price: 250000 },
    { name: "Batu Pecah / Split 2/3 m3", price: 280000 },
    { name: "Batu Belah/Kali / m3", price: 240000 },
    { name: "Bata Merah / bh", price: 1000 },
    { name: "Bata Ringan (Hebel) / m3", price: 650000 },
    { name: "Besi Beton Polos / kg", price: 14000 },
    { name: "Kawat Beton / kg", price: 22000 },
    { name: "Cat Tembok Interior / kg", price: 45000 },
    { name: "Plamir Tembok / kg", price: 18000 },
    { name: "Cat Dasar / Sealer / kg", price: 25000 },
    { name: "Pipa PVC 3/4 inch / btg", price: 35000 },
    { name: "Pipa PVC 4 inch / btg", price: 120000 },
    { name: "Kabel NYM 2x1.5mm / m", price: 12000 },
    { name: "Pipa Conduit 20mm / btg", price: 8000 },
    { name: "Inbow Doos & Aksesoris / set", price: 5000 },
    { name: "Fitting & Lem Pipa / ls", price: 5000 },
    { name: "Rumput Gajah Mini / m2", price: 35000 },
    { name: "Pupuk Kandang / kg", price: 5000 },
    { name: "Kanal C Baja Ringan 0.75mm / m", price: 75000 },
    { name: "Reng Baja Ringan 0.45mm / m", price: 35000 },
    { name: "Roof Screw / Baut Atap / bh", price: 500 },
    // Material Tambahan untuk Pekerjaan Persiapan
    { name: "Kayu Kaso 5/7 / m3", price: 3200000 },
    { name: "Kayu Usuk 5/7 / m3", price: 3200000 },
    { name: "Papan Kayu 3/20 / m3", price: 3500000 },
    { name: "Paku 2\" - 5\" / kg", price: 20000 },
    { name: "Seng Gelombang / lbr", price: 65000 },
    { name: "Triplek 4mm / lbr", price: 85000 },
    { name: "Kloset Jongkok / bh", price: 150000 }
  ],
  alat: [
    { name: "Molen Beton / hari", price: 150000 },
    { name: "Stamper Kuda / hari", price: 200000 },
    { name: "Excavator / jam", price: 350000 },
    { name: "Mesin Las listrik / hari", price: 100000 }
  ],
  upah: [
    { name: "Pekerja / OH", price: 110000 },
    { name: "Tukang Batu / OH", price: 140000 },
    { name: "Tukang Kayu / OH", price: 140000 },
    { name: "Tukang Besi / OH", price: 140000 },
    { name: "Tukang Cat / OH", price: 140000 },
    { name: "Tukang Listrik / OH", price: 150000 },
    { name: "Kepala Tukang / OH", price: 160000 },
    { name: "Mandor / OH", price: 175000 }
  ]
};

// ==========================================
// 2. DATA LIBRARY STANDARD AHS (Lengkap Seluruh Kategori)
// ==========================================
let ahsLibraryData = [
  // --- Pekerjaan Persiapan ---
  {
    code: "A.2.2.1.1",
    title: "1 m2 Pembersihan Lapangan dan Perataan",
    category: "Pekerjaan Persiapan",
    unit: "m2",
    details: [
      { type: "upah", name: "Pekerja", koef: 0.1, price: 110000 },
      { type: "upah", name: "Mandor", koef: 0.05, price: 175000 }
    ]
  },
  {
    code: "A.2.2.1.4",
    title: "1 m' Pengukuran dan Pemasangan Bouwplank",
    category: "Pekerjaan Persiapan",
    unit: "m1",
    details: [
      { type: "bahan", name: "Kayu Usuk 5/7", koef: 0.012, price: 3200000 },
      { type: "bahan", name: "Paku 2\" - 5\"", koef: 0.02, price: 20000 },
      { type: "bahan", name: "Papan Kayu 3/20", koef: 0.007, price: 3500000 },
      { type: "upah", name: "Pekerja", koef: 0.1, price: 110000 },
      { type: "upah", name: "Tukang Kayu", koef: 0.1, price: 140000 },
      { type: "upah", name: "Kepala Tukang", koef: 0.01, price: 160000 },
      { type: "upah", name: "Mandor", koef: 0.005, price: 175000 }
    ]
  },
  {
    code: "A.2.2.1.5",
    title: "1 m2 Pembuatan Kantor Sementara (Direksi Keet) Lantai Plesteran",
    category: "Pekerjaan Persiapan",
    unit: "m2",
    details: [
      { type: "bahan", name: "Kayu Kaso 5/7", koef: 0.18, price: 3200000 },
      { type: "bahan", name: "Paku 2\" - 5\"", koef: 0.8, price: 20000 },
      { type: "bahan", name: "Papan Kayu 3/20", koef: 0.08, price: 3500000 },
      { type: "bahan", name: "Semen Portland (50kg)", koef: 0.7, price: 75000 },
      { type: "bahan", name: "Pasir Pasang / m3", koef: 0.15, price: 220000 },
      { type: "bahan", name: "Seng Gelombang", koef: 1.5, price: 65000 },
      { type: "bahan", name: "Triplek 4mm", koef: 1.35, price: 85000 },
      { type: "upah", name: "Pekerja", koef: 2.0, price: 110000 },
      { type: "upah", name: "Tukang Kayu", koef: 2.0, price: 140000 },
      { type: "upah", name: "Kepala Tukang", koef: 0.2, price: 160000 },
      { type: "upah", name: "Mandor", koef: 0.05, price: 175000 }
    ]
  },
  {
    code: "A.2.2.1.6",
    title: "1 m2 Pembuatan Bedeng / Rumah Pekerja",
    category: "Pekerjaan Persiapan",
    unit: "m2",
    details: [
      { type: "bahan", name: "Kayu Kaso 5/7", koef: 0.12, price: 3200000 },
      { type: "bahan", name: "Paku 2\" - 5\"", koef: 0.5, price: 20000 },
      { type: "bahan", name: "Papan Kayu 3/20", koef: 0.05, price: 3500000 },
      { type: "bahan", name: "Seng Gelombang", koef: 1.2, price: 65000 },
      { type: "bahan", name: "Triplek 4mm", koef: 0.8, price: 85000 },
      { type: "upah", name: "Pekerja", koef: 1.0, price: 110000 },
      { type: "upah", name: "Tukang Kayu", koef: 1.0, price: 140000 },
      { type: "upah", name: "Kepala Tukang", koef: 0.1, price: 160000 },
      { type: "upah", name: "Mandor", koef: 0.05, price: 175000 }
    ]
  },
  {
    code: "A.2.2.1.7",
    title: "1 m2 Pembuatan Gudang Semen dan Peralatan",
    category: "Pekerjaan Persiapan",
    unit: "m2",
    details: [
      { type: "bahan", name: "Kayu Kaso 5/7", koef: 0.14, price: 3200000 },
      { type: "bahan", name: "Paku 2\" - 5\"", koef: 0.6, price: 20000 },
      { type: "bahan", name: "Semen Portland (50kg)", koef: 0.3, price: 75000 },
      { type: "bahan", name: "Pasir Pasang / m3", koef: 0.08, price: 220000 },
      { type: "bahan", name: "Seng Gelombang", koef: 1.3, price: 65000 },
      { type: "bahan", name: "Triplek 4mm", koef: 1.0, price: 85000 },
      { type: "upah", name: "Pekerja", koef: 1.2, price: 110000 },
      { type: "upah", name: "Tukang Kayu", koef: 1.2, price: 140000 },
      { type: "upah", name: "Kepala Tukang", koef: 0.12, price: 160000 },
      { type: "upah", name: "Mandor", koef: 0.06, price: 175000 }
    ]
  },
  {
    code: "A.2.2.1.8",
    title: "1 m' Pembuatan Pagar Sementara Seng Gelombang Tinggi 2 m",
    category: "Pekerjaan Persiapan",
    unit: "m1",
    details: [
      { type: "bahan", name: "Kayu Kaso 5/7", koef: 0.031, price: 3200000 },
      { type: "bahan", name: "Seng Gelombang", koef: 1.3, price: 65000 },
      { type: "bahan", name: "Paku 2\" - 5\"", koef: 0.15, price: 20000 },
      { type: "bahan", name: "Semen Portland (50kg)", koef: 0.1, price: 75000 },
      { type: "bahan", name: "Pasir Beton / m3", koef: 0.005, price: 250000 },
      { type: "bahan", name: "Batu Pecah / Split 2/3 m3", koef: 0.009, price: 280000 },
      { type: "upah", name: "Pekerja", koef: 0.25, price: 110000 },
      { type: "upah", name: "Tukang Kayu", koef: 0.125, price: 140000 },
      { type: "upah", name: "Tukang Batu", koef: 0.125, price: 140000 },
      { type: "upah", name: "Kepala Tukang", koef: 0.025, price: 160000 },
      { type: "upah", name: "Mandor", koef: 0.008, price: 175000 }
    ]
  },
  {
    code: "A.2.2.1.9",
    title: "1 unit Pembuatan Toilet / WC Sementara",
    category: "Pekerjaan Persiapan",
    unit: "unit",
    details: [
      { type: "bahan", name: "Kloset Jongkok", koef: 1, price: 150000 },
      { type: "bahan", name: "Pipa PVC 4 inch / btg", koef: 2, price: 120000 },
      { type: "bahan", name: "Pipa PVC 3/4 inch / btg", koef: 1, price: 35000 },
      { type: "bahan", name: "Semen Portland (50kg)", koef: 1.2, price: 75000 },
      { type: "bahan", name: "Pasir Pasang / m3", koef: 0.2, price: 220000 },
      { type: "bahan", name: "Bata Merah / bh", koef: 150, price: 1000 },
      { type: "bahan", name: "Seng Gelombang", koef: 4, price: 65000 },
      { type: "bahan", name: "Kayu Kaso 5/7", koef: 0.15, price: 3200000 },
      { type: "upah", name: "Pekerja", koef: 2.5, price: 110000 },
      { type: "upah", name: "Tukang Batu", koef: 1.5, price: 140000 },
      { type: "upah", name: "Tukang Kayu", koef: 1.0, price: 140000 },
      { type: "upah", name: "Mandor", koef: 0.1, price: 175000 }
    ]
  },

  // --- Pekerjaan Tanah ---
  {
    code: "A.2.3.1.1",
    title: "1 m3 Galian Tanah Biasa Kedalaman 1 Meter",
    category: "Pekerjaan Tanah",
    unit: "m3",
    details: [
      { type: "upah", name: "Pekerja", koef: 0.75, price: 110000 },
      { type: "upah", name: "Mandor", koef: 0.025, price: 175000 }
    ]
  },
  {
    code: "A.2.3.1.9",
    title: "1 m3 Urugan Tanah Kembali",
    category: "Pekerjaan Tanah",
    unit: "m3",
    details: [
      { type: "upah", name: "Pekerja", koef: 0.25, price: 110000 },
      { type: "upah", name: "Mandor", koef: 0.008, price: 175000 }
    ]
  },

  // --- Pekerjaan Pondasi ---
  {
    code: "A.3.2.1.2",
    title: "1 m3 Pasangan Pondasi Batu Kali 1PC : 4PP",
    category: "Pekerjaan Pondasi",
    unit: "m3",
    details: [
      { type: "bahan", name: "Batu Belah/Kali", koef: 1.2, price: 240000 },
      { type: "bahan", name: "Semen Portland (50kg)", koef: 3.26, price: 75000 },
      { type: "bahan", name: "Pasir Pasang", koef: 0.52, price: 220000 },
      { type: "upah", name: "Pekerja", koef: 1.5, price: 110000 },
      { type: "upah", name: "Tukang Batu", koef: 0.75, price: 140000 },
      { type: "upah", name: "Kepala Tukang", koef: 0.075, price: 160000 },
      { type: "upah", name: "Mandor", koef: 0.075, price: 175000 }
    ]
  },

  // --- Pekerjaan Beton ---
  {
    code: "A.4.1.1.5",
    title: "1 m3 Membuat Beton Mutu f'c = 19,3 MPa (K 225)",
    category: "Pekerjaan Beton",
    unit: "m3",
    details: [
      { type: "bahan", name: "Semen Portland (50kg)", koef: 7.42, price: 75000 },
      { type: "bahan", name: "Pasir Beton", koef: 0.499, price: 250000 },
      { type: "bahan", name: "Batu Pecah / Split 2/3", koef: 0.769, price: 280000 },
      { type: "upah", name: "Pekerja", koef: 1.65, price: 110000 },
      { type: "upah", name: "Tukang Batu", koef: 0.275, price: 140000 },
      { type: "upah", name: "Kepala Tukang", koef: 0.028, price: 160000 },
      { type: "upah", name: "Mandor", koef: 0.083, price: 175000 }
    ]
  },
  {
    code: "A.4.1.1.17",
    title: "1 kg Pembesian Besi Polos atau Ulir",
    category: "Pekerjaan Beton",
    unit: "kg",
    details: [
      { type: "bahan", name: "Besi Beton Polos", koef: 1.05, price: 14000 },
      { type: "bahan", name: "Kawat Beton", koef: 0.015, price: 22000 },
      { type: "upah", name: "Pekerja", koef: 0.007, price: 110000 },
      { type: "upah", name: "Tukang Besi", koef: 0.007, price: 140000 },
      { type: "upah", name: "Kepala Tukang", koef: 0.0007, price: 160000 },
      { type: "upah", name: "Mandor", koef: 0.0004, price: 175000 }
    ]
  },

  // --- Pekerjaan Atap ---
  {
    code: "A.4.5.2.1",
    title: "1 m2 Pemasangan Rangka Atap Baja Ringan",
    category: "Pekerjaan Atap",
    unit: "m2",
    details: [
      { type: "bahan", name: "Kanal C Baja Ringan 0.75mm", koef: 1.1, price: 75000 },
      { type: "bahan", name: "Reng Baja Ringan 0.45mm", koef: 1.2, price: 35000 },
      { type: "bahan", name: "Roof Screw / Baut Atap", koef: 25, price: 500 },
      { type: "upah", name: "Pekerja", koef: 0.15, price: 110000 },
      { type: "upah", name: "Tukang Kayu/Baja", koef: 0.1, price: 140000 },
      { type: "upah", name: "Mandor", koef: 0.01, price: 175000 }
    ]
  },

  // --- Pekerjaan Finishing/Arsitektur ---
  {
    code: "A.4.4.1.1",
    title: "1 m2 Pasangan Dinding Bata Merah Tebal 1/2 Bata (1PC : 4PP)",
    category: "Pekerjaan Finishing/Arsitektur",
    unit: "m2",
    details: [
      { type: "bahan", name: "Bata Merah", koef: 70, price: 1000 },
      { type: "bahan", name: "Semen Portland (50kg)", koef: 0.23, price: 75000 },
      { type: "bahan", name: "Pasir Pasang", koef: 0.043, price: 220000 },
      { type: "upah", name: "Pekerja", koef: 0.3, price: 110000 },
      { type: "upah", name: "Tukang Batu", koef: 0.1, price: 140000 },
      { type: "upah", name: "Kepala Tukang", koef: 0.01, price: 160000 },
      { type: "upah", name: "Mandor", koef: 0.015, price: 175000 }
    ]
  },
  {
    code: "A.4.7.1.10",
    title: "1 m2 Pengecatan Tembok Baru Interior (1 Lapis Plamir + 2 Lapis Cat)",
    category: "Pekerjaan Finishing/Arsitektur",
    unit: "m2",
    details: [
      { type: "bahan", name: "Plamir Tembok", koef: 0.1, price: 18000 },
      { type: "bahan", name: "Cat Dasar / Sealer", koef: 0.1, price: 25000 },
      { type: "bahan", name: "Cat Tembok Interior", koef: 0.26, price: 45000 },
      { type: "upah", name: "Pekerja", koef: 0.02, price: 110000 },
      { type: "upah", name: "Tukang Cat", koef: 0.063, price: 140000 },
      { type: "upah", name: "Kepala Tukang", koef: 0.0063, price: 160000 },
      { type: "upah", name: "Mandor", koef: 0.0025, price: 175000 }
    ]
  },

  // --- Pekerjaan Mekanikal & Elektrikal ---
  {
    code: "A.8.1.1.1",
    title: "1 Titik Pemasangan Instalasi Titik Lampu / Stopkontak",
    category: "Pekerjaan Mekanikal & Elektrikal",
    unit: "titik",
    details: [
      { type: "bahan", name: "Kabel NYM 2x1.5mm", koef: 10, price: 12000 },
      { type: "bahan", name: "Pipa Conduit 20mm", koef: 3, price: 8000 },
      { type: "bahan", name: "Inbow Doos & Aksesoris", koef: 1, price: 5000 },
      { type: "upah", name: "Pekerja", koef: 0.2, price: 110000 },
      { type: "upah", name: "Tukang Listrik", koef: 0.4, price: 150000 },
      { type: "upah", name: "Mandor", koef: 0.02, price: 175000 }
    ]
  },

  // --- Pekerjaan Plumbing ---
  {
    code: "A.5.1.1.3",
    title: "1 m' Pemasangan Pipa Air Bersih PVC Diameter 3/4 inch",
    category: "Pekerjaan Plumbing",
    unit: "m1",
    details: [
      { type: "bahan", name: "Pipa PVC 3/4 inch", koef: 1.2, price: 35000 },
      { type: "bahan", name: "Fitting & Lem Pipa", koef: 1, price: 5000 },
      { type: "upah", name: "Pekerja", koef: 0.054, price: 110000 },
      { type: "upah", name: "Tukang Batu/Plumbing", koef: 0.09, price: 140000 },
      { type: "upah", name: "Mandor", koef: 0.003, price: 175000 }
    ]
  },

  // --- Pekerjaan Landscape ---
  {
    code: "A.9.1.1.1",
    title: "1 m2 Penanaman Rumput Gajah Mini",
    category: "Pekerjaan Landscape",
    unit: "m2",
    details: [
      { type: "bahan", name: "Rumput Gajah Mini", koef: 1, price: 35000 },
      { type: "bahan", name: "Pupuk Kandang", koef: 2, price: 5000 },
      { type: "upah", name: "Pekerja", koef: 0.1, price: 110000 },
      { type: "upah", name: "Mandor", koef: 0.01, price: 175000 }
    ]
  }
];

// ==========================================
// 3. FUNGSI PANEL HARGA DASAR (Render & Add)
// ==========================================
function renderPriceTable(type) {
  const tbodyId = type === 'bahan' ? 'materialPriceTable' : type === 'alat' ? 'equipmentPriceTable' : 'laborPriceTable';
  const searchId = type === 'bahan' ? 'searchBahan' : type === 'alat' ? 'searchAlat' : 'searchUpah';

  const tbody = document.getElementById(tbodyId);
  const searchInput = document.getElementById(searchId);
  if (!tbody) return;

  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  tbody.innerHTML = '';

  if (!masterData[type]) return;

  masterData[type].forEach((item, index) => {
    if (query && !item.name.toLowerCase().includes(query)) return;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <input type="text" class="form-control form-control-sm" value="${item.name}" onchange="updateMasterPrice('${type}', ${index}, 'name', this.value)">
      </td>
      <td>
        <input type="number" class="form-control form-control-sm" value="${item.price}" onchange="updateMasterPrice('${type}', ${index}, 'price', this.value)">
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function updateMasterPrice(type, index, field, value) {
  if (field === 'price') value = parseFloat(value) || 0;
  if (masterData[type] && masterData[type][index]) {
    masterData[type][index][field] = value;
  }
}

function addMasterItem(type) {
  const name = prompt('Masukkan nama ' + type + ' baru:');
  if (!name) return;
  const price = parseFloat(prompt('Masukkan harga satuan (Rp):', '0')) || 0;

  if (!masterData[type]) masterData[type] = [];
  masterData[type].push({ name, price });
  renderPriceTable(type);
}

// ==========================================
// 4. FUNGSI RENDER & FILTER MODAL AHS LIBRARY
// ==========================================
function filterAHSList() {
  const tbody = document.getElementById('ahsTableBody');
  const catFilterElem = document.getElementById('ahsCategoryFilter');
  const searchElem = document.getElementById('ahsSearch');

  if (!tbody) return;

  const catFilter = catFilterElem ? catFilterElem.value : 'ALL';
  const searchVal = searchElem ? searchElem.value.toLowerCase().trim() : '';

  tbody.innerHTML = '';

  if (typeof ahsLibraryData === 'undefined' || !Array.isArray(ahsLibraryData)) {
    tbody.innerHTML = '<tr><td colspan="3" style="text-align:center; padding:20px;">Data AHS belum dimuat.</td></tr>';
    return;
  }

  ahsLibraryData.forEach((ahs) => {
    const titleText = (ahs.title || ahs.name || ahs.nama || ahs.deskripsi || ahs.code || ahs.kode || '').toString();
    const categoryText = (ahs.category || ahs.kategori || '').toString();
    const codeText = (ahs.code || ahs.kode || 'AHS').toString();
    const unitText = (ahs.unit || ahs.satuan || 'm2').toString();

    const matchCat = (catFilter === 'ALL' || categoryText.toLowerCase() === catFilter.toLowerCase() || categoryText.includes(catFilter));
    const matchSearch = !searchVal || titleText.toLowerCase().includes(searchVal) || codeText.toLowerCase().includes(searchVal);

    if (matchCat && matchSearch) {
      let totalAHS = 0;
      let breakdownHtml = `<table class="table-ahs-detail" style="width:100%; margin-top:8px;">
        <thead><tr><th>Tipe</th><th>Komponen</th><th>Koef</th><th>Harga (Rp)</th><th>Total (Rp)</th></tr></thead><tbody>`;

      if (Array.isArray(ahs.details)) {
        ahs.details.forEach(item => {
          const koef = parseFloat(item.koef) || 0;
          const price = parseFloat(item.price) || 0;
          const sub = koef * price;
          totalAHS += sub;
          breakdownHtml += `
            <tr>
              <td><span class="category-badge">${item.type || '-'}</span></td>
              <td>${item.name || '-'}</td>
              <td>${koef}</td>
              <td>Rp ${price.toLocaleString('id-ID')}</td>
              <td>Rp ${Math.round(sub).toLocaleString('id-ID')}</td>
            </tr>`;
        });
      }
      breakdownHtml += '</tbody></table>';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="vertical-align: top;">
          <strong>${codeText}</strong><br>
          <span class="category-badge">${categoryText || 'Umum'}</span>
        </td>
        <td>
          <strong style="font-size: 0.95rem; color: #1e293b;">${titleText}</strong>
          <div style="font-size: 0.8rem; color: #64748b; margin-top: 2px;">Satuan: <strong>${unitText}</strong></div>
          <details style="margin-top: 6px;">
            <summary style="cursor: pointer; font-size: 0.8rem; color: #2563eb; font-weight: 600;">🔍 Lihat Rincian Komponen Analisa</summary>
            ${breakdownHtml}
          </details>
        </td>
        <td style="text-align: center; vertical-align: top;">
          <div style="font-weight: 700; color: #2563eb; font-size: 1rem; margin-bottom: 6px;">
            Rp ${Math.round(totalAHS).toLocaleString('id-ID')}
          </div>
          <button class="btn btn-sm btn-primary" onclick="addItemRow('${titleText.replace(/'/g, "\\'")}', 1, '${unitText}', ${Math.round(totalAHS)}); closeAHSModal();">
            ➕ Tambahkan
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    }
  });

  if (tbody.children.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="3" style="text-align: center; padding: 25px; color: #64748b;">
          ⚠️ Tidak ada data AHS yang cocok. Coba ubah pencarian atau pilih <strong>"🚩 Semua Kategori"</strong>.
        </td>
      </tr>`;
  }
}

