// Master Data Harga Dasar (Bahan, Alat, Upah)
const masterData = {
  bahan: [
    { name: "Semen PC (50kg)", price: 75000 },
    { name: "Pasir Pasang / m3", price: 220000 },
    { name: "Pasir Beton / m3", price: 260000 },
    { name: "Pasir Urug / m3", price: 180000 },
    { name: "Batu Belah / m3", price: 250000 },
    { name: "Kerikil / Spilt / m3", price: 280000 },
    { name: "Bata Merah / bh", price: 1000 },
    { name: "Bata Ringan (Hebel) / m3", price: 650000 },
    { name: "Semen Mortar / sak", price: 95000 },
    { name: "Besi Beton Polos / kg", price: 14500 },
    { name: "Besi Beton Ulir / kg", price: 15500 },
    { name: "Kayu Begisting / m3", price: 2200000 },
    { name: "Cat Tembok Dinding / kg", price: 35000 },
    { name: "Plamut / Cat Dasar / kg", price: 25000 }
  ],
  alat: [
    { name: "Molen Beton / hari", price: 150000 },
    { name: "Stamper Kuda / hari", price: 200000 },
    { name: "Pompa Beton (Concrete Pump) / m3", price: 120000 },
    { name: "Excavator / jam", price: 350000 },
    { name: "Vibrator Beton / hari", price: 100000 }
  ],
  upah: [
    { name: "Pekerja / hari", price: 120000 },
    { name: "Tukang Batu / hari", price: 160000 },
    { name: "Tukang Kayu / hari", price: 160000 },
    { name: "Tukang Besi / hari", price: 160000 },
    { name: "Tukang Cat / hari", price: 150000 },
    { name: "Kepala Tukang / hari", price: 180000 },
    { name: "Mandor / hari", price: 200000 }
  ]
};

// Data Library Standar AHS (Analisa Harga Satuan)
const ahsLibraryData = [
  {
    code: "AHS-P.01",
    category: "Pekerjaan Persiapan",
    title: "1 m2 Pembersihan dan Pengukuran Lokasi",
    unit: "m2",
    details: [
      { type: "upah", name: "Pekerja", koef: 0.1, price: 120000 },
      { type: "upah", name: "Mandor", koef: 0.05, price: 200000 }
    ]
  },
  {
    code: "AHS-T.01",
    category: "Pekerjaan Tanah",
    title: "1 m3 Galian Tanah Biasa Kedalaman 1 meter",
    unit: "m3",
    details: [
      { type: "upah", name: "Pekerja", koef: 0.75, price: 120000 },
      { type: "upah", name: "Mandor", koef: 0.025, price: 200000 }
    ]
  },
  {
    code: "AHS-T.02",
    category: "Pekerjaan Tanah",
    title: "1 m3 Urugan Pasir Bawah Pondasi",
    unit: "m3",
    details: [
      { type: "bahan", name: "Pasir Urug", koef: 1.2, price: 180000 },
      { type: "upah", name: "Pekerja", koef: 0.3, price: 120000 },
      { type: "upah", name: "Mandor", koef: 0.01, price: 200000 }
    ]
  },
  {
    code: "AHS-PD.01",
    category: "Pekerjaan Pondasi",
    title: "1 m3 Pasangan Pondasi Batu Belah (1PC : 4PP)",
    unit: "m3",
    details: [
      { type: "bahan", name: "Batu Belah", koef: 1.2, price: 250000 },
      { type: "bahan", name: "Semen PC", koef: 3.26, price: 75000 },
      { type: "bahan", name: "Pasir Pasang", koef: 0.52, price: 220000 },
      { type: "upah", name: "Pekerja", koef: 1.5, price: 120000 },
      { type: "upah", name: "Tukang Batu", koef: 0.75, price: 160000 },
      { type: "upah", name: "Mandor", koef: 0.075, price: 200000 }
    ]
  },
  {
    code: "AHS-BT.01",
    category: "Pekerjaan Beton",
    title: "1 m3 Membuat Beton K-175 / f'c 14.5 MPa",
    unit: "m3",
    details: [
      { type: "bahan", name: "Semen PC", koef: 6.52, price: 75000 },
      { type: "bahan", name: "Pasir Beton", koef: 0.54, price: 260000 },
      { type: "bahan", name: "Kerikil / Split", koef: 0.76, price: 280000 },
      { type: "upah", name: "Pekerja", koef: 1.65, price: 120000 },
      { type: "upah", name: "Tukang Batu", koef: 0.275, price: 160000 },
      { type: "upah", name: "Mandor", koef: 0.083, price: 200000 }
    ]
  },
  {
    code: "AHS-FN.01",
    category: "Pekerjaan Finishing/Arsitektural",
    title: "1 m2 Pasangan Dinding Bata Ringan t=10cm",
    unit: "m2",
    details: [
      { type: "bahan", name: "Bata Ringan (Hebel)", koef: 0.1, price: 650000 },
      { type: "bahan", name: "Semen Mortar", koef: 0.1, price: 95000 },
      { type: "upah", name: "Pekerja", koef: 0.2, price: 120000 },
      { type: "upah", name: "Tukang Batu", koef: 0.1, price: 160000 },
      { type: "upah", name: "Mandor", koef: 0.01, price: 200000 }
    ]
  },
  {
    code: "AHS-FN.02",
    category: "Pekerjaan Finishing/Arsitektural",
    title: "1 m2 Pengecatan Tembok Baru (1 dasar, 2 penutup)",
    unit: "m2",
    details: [
      { type: "bahan", name: "Plamut / Cat Dasar", koef: 0.1, price: 25000 },
      { type: "bahan", name: "Cat Tembok Dinding", koef: 0.26, price: 35000 },
      { type: "upah", name: "Pekerja", koef: 0.02, price: 120000 },
      { type: "upah", name: "Tukang Cat", koef: 0.063, price: 150000 },
      { type: "upah", name: "Mandor", koef: 0.0025, price: 200000 }
    ]
  }
];

// Render Tabel Harga Dasar
function renderPriceTable(type) {
  const tbodyMap = {
    bahan: 'materialPriceTable',
    alat: 'equipmentPriceTable',
    upah: 'laborPriceTable'
  };
  const searchMap = {
    bahan: 'searchBahan',
    alat: 'searchAlat',
    upah: 'searchUpah'
  };

  const tbody = document.getElementById(tbodyMap[type]);
  const searchInput = document.getElementById(searchMap[type]);
  if (!tbody) return;

  const keyword = searchInput ? searchInput.value.toLowerCase() : '';
  const items = masterData[type] || [];

  tbody.innerHTML = '';
  items.filter(item => item.name.toLowerCase().includes(keyword)).forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input type="text" class="form-control form-control-sm" value="${item.name}" onchange="updateMasterPrice('${type}', ${index}, 'name', this.value)"></td>
      <td><input type="number" class="form-control form-control-sm" value="${item.price}" onchange="updateMasterPrice('${type}', ${index}, 'price', this.value)"></td>
    `;
    tbody.appendChild(tr);
  });
}

function updateMasterPrice(type, index, field, value) {
  if (field === 'price') value = parseFloat(value) || 0;
  masterData[type][index][field] = value;
}

function addMasterItem(type) {
  const name = prompt('Masukkan nama ' + type + ' baru:');
  if (!name) return;
  const price = parseFloat(prompt('Masukkan harga satuan (Rp):', '0')) || 0;
  masterData[type].push({ name, price });
  renderPriceTable(type);
}

// Filter & Render Modal Library AHS
function filterAHSList() {
  const tbody = document.getElementById('ahsTableBody');
  const catFilter = document.getElementById('ahsCategoryFilter') ? document.getElementById('ahsCategoryFilter').value : 'ALL';
  const searchVal = document.getElementById('ahsSearch') ? document.getElementById('ahsSearch').value.toLowerCase() : '';

  if (!tbody) return;
  tbody.innerHTML = '';

  ahsLibraryData.forEach((ahs, idx) => {
    const matchCat = (catFilter === 'ALL' || ahs.category === catFilter);
    const matchSearch = ahs.title.toLowerCase().includes(searchVal) || ahs.code.toLowerCase().includes(searchVal);

    if (matchCat && matchSearch) {
      let totalAHS = 0;
      let breakdownHtml = '<table class="table-ahs-detail" style="width:100%; margin-top:6px;">';
      breakdownHtml += '<thead><tr><th>Tipe</th><th>Komponen</th><th>Koefisien</th><th>Harga Satuan</th><th>Subtotal</th></tr></thead><tbody>';

      ahs.details.forEach(item => {
        const sub = item.koef * item.price;
        totalAHS += sub;
        breakdownHtml += `
          <tr>
            <td><span class="category-badge">${item.type.toUpperCase()}</span></td>
            <td>${item.name}</td>
            <td>${item.koef}</td>
            <td>Rp ${item.price.toLocaleString('id-ID')}</td>
            <td>Rp ${Math.round(sub).toLocaleString('id-ID')}</td>
          </tr>
        `;
      });
      breakdownHtml += '</tbody></table>';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="vertical-align:top;">
          <strong>${ahs.code}</strong><br>
          <span class="category-badge">${ahs.category}</span>
        </td>
        <td style="vertical-align:top;">
          <strong>${ahs.title}</strong>
          ${breakdownHtml}
        </td>
        <td style="text-align:center; vertical-align:middle;">
          <div style="font-weight:bold; color:var(--primary-color); margin-bottom:10px;">
            Rp ${Math.round(totalAHS).toLocaleString('id-ID')} / ${ahs.unit}
          </div>
          <button class="btn btn-primary btn-sm" onclick="importAHSToProject(${idx})">➕ Tambahkan ke RAB</button>
        </td>
      `;
      tbody.appendChild(tr);
    }
  });

  if (tbody.children.length === 0) {
    tbody.innerHTML = '<tr><td colspan="3" style="text-align:center; padding:20px; color:#64748b;">Tidak ada item AHS yang sesuai pencarian.</td></tr>';
  }
}

// Tambahkan AHS Terpilih ke Tabel Pekerjaan Utama
function importAHSToProject(index) {
  const ahs = ahsLibraryData[index];
  if (!ahs) return;

  let totalUnitPrice = 0;
  ahs.details.forEach(item => {
    totalUnitPrice += (item.koef * item.price);
  });

  if (typeof addItemRow === 'function') {
    addItemRow(ahs.title, 1, ahs.unit, Math.round(totalUnitPrice));
    closeAHSModal();
    alert('Berhasil menambahkan "' + ahs.title + '" ke Daftar Item Pekerjaan!');
  }
}

