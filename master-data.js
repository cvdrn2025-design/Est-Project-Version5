/* ==========================================================================
   MASTER DATA SICERMAT (HARGA DASAR & ANALISA HARGA SATUAN PEKERJAAN)
   ========================================================================== */

// 1. DATA HARGA DASAR KOMPONEN (BAHAN, ALAT, UPAH) - LENGKAP
let masterBahan = [
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
  { nama: "Pipa PVC 3/4\" Type AW", harga: 35000, satuan: "btg" },
  { nama: "Baja Ringan (Galvalum)", harga: 35000, satuan: "m2" },
  { nama: "Baut / Sekrup Self Drilling", harga: 1500, satuan: "bh" },
  { nama: "Baja IWF (Profil)", harga: 18000, satuan: "kg" },
  { nama: "Plat Baja Penyangga", harga: 18000, satuan: "kg" },
  { nama: "Mur Baut Berkualitas", harga: 50000, satuan: "kg" },
  { nama: "Baja CNP (C-Channel)", harga: 17000, satuan: "kg" },
  { nama: "Atap Spandek (0.3mm - 0.4mm)", harga: 80000, satuan: "m2" },
  { nama: "Genteng Metal (Galvalum)", harga: 55000, satuan: "m2" },
  { nama: "Genteng Glassur / Morando", harga: 150000, satuan: "m2" },
  { nama: "Atap Onduline", harga: 35000, satuan: "m2" },
  { nama: "Paku Onduline", harga: 1000, satuan: "bh" },
  { nama: "Talang Air PVC 4\" / 5\"", harga: 65000, satuan: "m'" },
  { nama: "Lem Pipa PVC", harga: 25000, satuan: "tube" },
  { nama: "Plat Seng / Zincallum (0.4mm)", harga: 45000, satuan: "m'" },
  { nama: "Paku Seng", harga: 20000, satuan: "kg" },
  { nama: "Nok / Bubungan Atap", harga: 75000, satuan: "m'" },
  { nama: "Lisplank GRC", harga: 70000, satuan: "m'" },
  { nama: "Wiremesh M6", harga: 75000, satuan: "m2" },
  { nama: "Wiremesh M8", harga: 105000, satuan: "m2" },
  { nama: "Wiremesh M10", harga: 150000, satuan: "m2" },
  { nama: "Sekrup / Paku Ring", harga: 1200, satuan: "bh" },
  // --- BAHAN UNTUK DRAINASE & MEBEULAIR ---
  { nama: "Pipa Beton Bertulang Dia. 30cm", harga: 185000, satuan: "m'" },
  { nama: "Pipa Beton Bertulang Dia. 40cm", harga: 245000, satuan: "m'" },
  { nama: "Pipa Beton Bertulang Dia. 50cm", harga: 320000, satuan: "m'" },
  { nama: "Pipa PVC 6\" Type AW", harga: 185000, satuan: "btg" },
  { nama: "Pipa PVC 8\" Type AW", harga: 275000, satuan: "btg" },
  { nama: "Buis Beton / Gorong-gorong Dia. 30cm", harga: 125000, satuan: "bh" },
  { nama: "Buis Beton / Gorong-gorong Dia. 40cm", harga: 175000, satuan: "bh" },
  { nama: "Buis Beton / Gorong-gorong Dia. 50cm", harga: 235000, satuan: "bh" },
  { nama: "Besi Beton Polos 8mm", harga: 14500, satuan: "kg" },
  { nama: "Besi Beton Polos 10mm", harga: 14500, satuan: "kg" },
  { nama: "Wiremesh M6 (Drainase)", harga: 75000, satuan: "m2" },
  { nama: "Grill / Kisi-kisi Besi Drainase", harga: 285000, satuan: "m'" },
  { nama: "Papan Kayu Meranti (Mebeulair)", harga: 2800000, satuan: "m3" },
  { nama: "Plywood / Multiplek 12mm", harga: 195000, satuan: "lbr" },
  { nama: "HPL / Laminate Sheet", harga: 185000, satuan: "lbr" },
  { nama: "Lem Kayu / Wood Glue", harga: 35000, satuan: "kg" },
  { nama: "Engsel Sendok / Hidden Hinge", harga: 25000, satuan: "bh" },
  { nama: "Rel Laci / Drawer Slide 45cm", harga: 85000, satuan: "set" },
  { nama: "Handle Furniture / Knob", harga: 35000, satuan: "bh" },
  { nama: "Cat Kayu (Melamine / Gloss)", harga: 120000, satuan: "kg" },
  { nama: "Thinner Cat", harga: 30000, satuan: "liter" },
  { nama: "Amplas Kayu", harga: 10000, satuan: "lbr" },
  { nama: "Kaca Cermin / Mirror 5mm", harga: 185000, satuan: "m2" },
  { nama: "Kaca Polos 5mm (Mebeulair)", harga: 250000, satuan: "lbr" },
  { nama: "Sekrup Kayu 1\" - 3\"", harga: 25000, satuan: "kg" },
  { nama: "Paku Kayu / Paku Biasa", harga: 20000, satuan: "kg" },
  { nama: "Karet Pelapis / Rubber Seal", harga: 15000, satuan: "m'" },
  // --- BAHAN UNTUK U-DITCH & PINTU AIR ---
  { nama: "U-ditch Beton Precast 60x60x100", harga: 850000, satuan: "bh" },
  { nama: "U-ditch Beton Precast 60x60x120", harga: 950000, satuan: "bh" },
  { nama: "U-ditch Beton Precast 80x80x100", harga: 1250000, satuan: "bh" },
  { nama: "U-ditch Beton Precast 80x80x120", harga: 1450000, satuan: "bh" },
  { nama: "U-ditch Beton Precast 100x100x100", harga: 1850000, satuan: "bh" },
  { nama: "U-ditch Beton Precast 120x120x100", harga: 2450000, satuan: "bh" },
  { nama: "Pintu Air Besi / Sluice Gate 40x40 cm", harga: 750000, satuan: "unit" },
  { nama: "Pintu Air Besi / Sluice Gate 60x60 cm", harga: 1250000, satuan: "unit" },
  { nama: "Pintu Air Besi / Sluice Gate 80x80 cm", harga: 1850000, satuan: "unit" },
  { nama: "Pintu Air Besi / Sluice Gate 100x100 cm", harga: 2650000, satuan: "unit" },
  { nama: "Pintu Air Beton Precast 60x60 cm", harga: 1500000, satuan: "unit" },
  { nama: "Pintu Air Beton Precast 80x80 cm", harga: 2100000, satuan: "unit" },
  { nama: "Rangka Besi Pintu Air (Frame)", harga: 250000, satuan: "unit" },
  { nama: "Baut / Mur Stainless Steel M12", harga: 15000, satuan: "bh" },
  { nama: "Plat Besi 6mm", harga: 18000, satuan: "kg" },
  { nama: "Pipa Besi Ulir / Stem Bar", harga: 95000, satuan: "m'" },
  { nama: "Handwheel / Roda Pemutar Pintu Air", harga: 350000, satuan: "unit" },
  { nama: "Seal / Packing Pintu Air", harga: 85000, satuan: "set" },
  { nama: "Cat Besi Anti Karat (Zinc Chromate)", harga: 85000, satuan: "kg" },
  { nama: "Cat Besi Finish (Top Coat)", harga: 95000, satuan: "kg" }
];

let masterAlat = [
  { nama: "Molen / Concrete Mixer 0.35m3", harga: 150000, satuan: "hari" },
  { nama: "Stamper Kuda / Plate Compactor", harga: 200000, satuan: "hari" },
  { nama: "Concrete Vibrator", harga: 120000, satuan: "hari" },
  { nama: "Sewa Scaffolding (1 Set / Bulan)", harga: 35000, satuan: "set" },
  { nama: "Alat Bantu Kerja & Pertukangan", harga: 25000, satuan: "ls" },
  { nama: "Sewa Excavator", harga: 250000, satuan: "jam" },
  { nama: "Sewa Pompa Beton", harga: 100000, satuan: "m3" },
  { nama: "Sewa Alat Pancang", harga: 300000, satuan: "jam" },
  { nama: "Sewa Alat Pancang Besar", harga: 500000, satuan: "jam" },
  { nama: "Sewa Alat Pancang Ringan", harga: 200000, satuan: "jam" },
  // --- ALAT UNTUK DRAINASE & MEBEULAIR ---
  { nama: "Sewa Mesin Bor Duduk", harga: 75000, satuan: "hari" },
  { nama: "Sewa Mesin Profil / Router", harga: 100000, satuan: "hari" },
  { nama: "Sewa Mesin Amplas / Sander", harga: 60000, satuan: "hari" },
  { nama: "Sewa Mesin Bubut Kayu", harga: 85000, satuan: "hari" },
  { nama: "Sewa Alat Pemotong Beton (Concrete Cutter)", harga: 250000, satuan: "hari" },
  { nama: "Sewa Pompa Air / Dewatering", harga: 150000, satuan: "hari" },
  // --- ALAT UNTUK PINTU AIR ---
  { nama: "Sewa Mesin Las Listrik", harga: 85000, satuan: "hari" },
  { nama: "Sewa Mesin Bor Besi", harga: 65000, satuan: "hari" },
  { nama: "Sewa Gerinda Potong Besi", harga: 45000, satuan: "hari" },
  { nama: "Sewa Mobile Crane (Angkat Pintu Air)", harga: 450000, satuan: "jam" }
];

let masterUpah = [
  { nama: "Pekerja / Kuli", harga: 110000, satuan: "OH" },
  { nama: "Tukang Batu / Kayu / Besi / Cat", harga: 140000, satuan: "OH" },
  { nama: "Kepala Tukang", harga: 160000, satuan: "OH" },
  { nama: "Mandor Proyek", harga: 180000, satuan: "OH" },
  { nama: "Tukang Baja", harga: 140000, satuan: "OH" },
  { nama: "Tukang PVC", harga: 140000, satuan: "OH" },
  { nama: "Tukang Seng", harga: 140000, satuan: "OH" },
  { nama: "Tukang Plumbing", harga: 140000, satuan: "OH" },
  // --- UPAH UNTUK DRAINASE & MEBEULAIR ---
  { nama: "Tukang Drainase", harga: 140000, satuan: "OH" },
  { nama: "Tukang Meubeul", harga: 150000, satuan: "OH" },
  { nama: "Tukang Finishing Kayu", harga: 150000, satuan: "OH" },
  // --- UPAH UNTUK PINTU AIR ---
  { nama: "Tukang Las / Besi", harga: 150000, satuan: "OH" },
  { nama: "Tukang Pasang Pintu Air", harga: 160000, satuan: "OH" }
];

// 2. DATABASE ANALISA HARGA SATUAN PEKERJAAN (AHSP) - LENGKAP
const ahsDatabase = [
  // ==================== PEKERJAAN PERSIAPAN ====================
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
    title: "Pemasangan Pagar Keliling Proyek",
    unit: "m'",
    details: [
      { name: "Kayu Bekisting / Meranti", coeff: 0.008, unit: "m3", price: 2800000 },
      { name: "Paku Biasa 2\" - 5\"", coeff: 0.015, unit: "kg", price: 20000 },
      { name: "Kawat Beton / Bendrat", coeff: 0.050, unit: "kg", price: 25000 },
      { name: "Pekerja", coeff: 0.200, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 0.100, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.020, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-PRP-04",
    category: "Pekerjaan Persiapan",
    title: "Pembuatan Direksi Keet (30 m2)",
    unit: "unit",
    details: [
      { name: "Kayu Bekisting / Meranti", coeff: 1.500, unit: "m3", price: 2800000 },
      { name: "Plywood / Multiplek 9mm", coeff: 12.000, unit: "lbr", price: 165000 },
      { name: "Paku Biasa 2\" - 5\"", coeff: 10.000, unit: "kg", price: 20000 },
      { name: "Besi Beton Polos / Ulir", coeff: 50.000, unit: "kg", price: 14500 },
      { name: "Pekerja", coeff: 15.000, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 10.000, unit: "OH", price: 140000 },
      { name: "Tukang Besi", coeff: 3.000, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 2.000, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 1.000, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-PRP-05",
    category: "Pekerjaan Persiapan",
    title: "Pembuatan Gudang (20 m2)",
    unit: "unit",
    details: [
      { name: "Kayu Bekisting / Meranti", coeff: 1.200, unit: "m3", price: 2800000 },
      { name: "Plywood / Multiplek 9mm", coeff: 8.000, unit: "lbr", price: 165000 },
      { name: "Paku Biasa 2\" - 5\"", coeff: 8.000, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 10.000, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 7.000, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 1.500, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 1.000, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-PRP-06",
    category: "Pekerjaan Persiapan",
    title: "Pembuatan Bedeng Pekerja (10 unit)",
    unit: "unit",
    details: [
      { name: "Kayu Bekisting / Meranti", coeff: 0.600, unit: "m3", price: 2800000 },
      { name: "Plywood / Multiplek 9mm", coeff: 4.000, unit: "lbr", price: 165000 },
      { name: "Paku Biasa 2\" - 5\"", coeff: 4.000, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 6.000, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 4.000, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.800, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.500, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-PRP-07",
    category: "Pekerjaan Persiapan",
    title: "Pembuatan Toilet Sementara",
    unit: "unit",
    details: [
      { name: "Kayu Bekisting / Meranti", coeff: 0.400, unit: "m3", price: 2800000 },
      { name: "Plywood / Multiplek 9mm", coeff: 3.000, unit: "lbr", price: 165000 },
      { name: "Paku Biasa 2\" - 5\"", coeff: 3.000, unit: "kg", price: 20000 },
      { name: "Pipa PVC 3/4\" Type AW", coeff: 4.000, unit: "btg", price: 35000 },
      { name: "Pipa PVC 4\" Type AW", coeff: 2.000, unit: "btg", price: 125000 },
      { name: "Pekerja", coeff: 4.000, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 3.000, unit: "OH", price: 140000 },
      { name: "Tukang Plumbing", coeff: 1.000, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.500, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.300, unit: "OH", price: 180000 }
    ]
  },

  // ==================== PEKERJAAN TANAH ====================
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
      { name: "Pekerja", coeff: 1.250, unit: "OH", price: 110000 },
      { name: "Mandor Proyek", coeff: 0.040, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-TNH-05",
    category: "Pekerjaan Tanah",
    title: "Galian Tanah Mekanis (dengan Excavator)",
    unit: "m3",
    details: [
      { name: "Sewa Excavator", coeff: 0.100, unit: "jam", price: 250000 },
      { name: "Pekerja", coeff: 0.050, unit: "OH", price: 110000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-TNH-06",
    category: "Pekerjaan Tanah",
    title: "Urugan Tanah Mekanis (dengan Excavator)",
    unit: "m3",
    details: [
      { name: "Tanah Urug", coeff: 1.200, unit: "m3", price: 100000 },
      { name: "Sewa Excavator", coeff: 0.080, unit: "jam", price: 250000 },
      { name: "Pekerja", coeff: 0.100, unit: "OH", price: 110000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-TNH-07",
    category: "Pekerjaan Tanah",
    title: "Pemadatan Tanah (dengan Stamper Kuda)",
    unit: "m3",
    details: [
      { name: "Sewa Stamper Kuda / Plate Compactor", coeff: 0.500, unit: "hari", price: 200000 },
      { name: "Pekerja", coeff: 0.200, unit: "OH", price: 110000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },

  // ==================== PEKERJAAN PONDASI ====================
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
  {
    code: "AHS-PND-02",
    category: "Pekerjaan Pondasi",
    title: "Pondasi Tiang Pancang Mini Pile ∆ 20",
    unit: "m'",
    details: [
      { name: "Tiang Pancang Mini Pile ∆ 20 Beton Precast", coeff: 1.000, unit: "m'", price: 350000 },
      { name: "Sewa Alat Pancang", coeff: 0.020, unit: "jam", price: 300000 },
      { name: "Pekerja", coeff: 0.100, unit: "OH", price: 110000 },
      { name: "Tukang Besi", coeff: 0.050, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-PND-03",
    category: "Pekerjaan Pondasi",
    title: "Pondasi Tiang Pancang Mini Pile ∆ 25",
    unit: "m'",
    details: [
      { name: "Tiang Pancang Mini Pile ∆ 25 Beton Precast", coeff: 1.000, unit: "m'", price: 450000 },
      { name: "Sewa Alat Pancang", coeff: 0.020, unit: "jam", price: 300000 },
      { name: "Pekerja", coeff: 0.100, unit: "OH", price: 110000 },
      { name: "Tukang Besi", coeff: 0.050, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-PND-04",
    category: "Pekerjaan Pondasi",
    title: "Pondasi Tiang Pancang Mini Pile ∆ 30",
    unit: "m'",
    details: [
      { name: "Tiang Pancang Mini Pile ∆ 30 Beton Precast", coeff: 1.000, unit: "m'", price: 550000 },
      { name: "Sewa Alat Pancang", coeff: 0.020, unit: "jam", price: 300000 },
      { name: "Pekerja", coeff: 0.100, unit: "OH", price: 110000 },
      { name: "Tukang Besi", coeff: 0.050, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-PND-05",
    category: "Pekerjaan Pondasi",
    title: "Pondasi Tiang Pancang Mini Pile 20x20",
    unit: "m'",
    details: [
      { name: "Tiang Pancang Mini Pile 20x20 Beton Precast", coeff: 1.000, unit: "m'", price: 380000 },
      { name: "Sewa Alat Pancang", coeff: 0.020, unit: "jam", price: 300000 },
      { name: "Pekerja", coeff: 0.100, unit: "OH", price: 110000 },
      { name: "Tukang Besi", coeff: 0.050, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-PND-06",
    category: "Pekerjaan Pondasi",
    title: "Pondasi Tiang Pancang Mini Pile 25x25",
    unit: "m'",
    details: [
      { name: "Tiang Pancang Mini Pile 25x25 Beton Precast", coeff: 1.000, unit: "m'", price: 480000 },
      { name: "Sewa Alat Pancang", coeff: 0.020, unit: "jam", price: 300000 },
      { name: "Pekerja", coeff: 0.100, unit: "OH", price: 110000 },
      { name: "Tukang Besi", coeff: 0.050, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-PND-07",
    category: "Pekerjaan Pondasi",
    title: "Pondasi Tiang Pancang Mini Pile 30x30",
    unit: "m'",
    details: [
      { name: "Tiang Pancang Mini Pile 30x30 Beton Precast", coeff: 1.000, unit: "m'", price: 600000 },
      { name: "Sewa Alat Pancang", coeff: 0.020, unit: "jam", price: 300000 },
      { name: "Pekerja", coeff: 0.100, unit: "OH", price: 110000 },
      { name: "Tukang Besi", coeff: 0.050, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-PND-08",
    category: "Pekerjaan Pondasi",
    title: "Pondasi Tiang Pancang Mini Pile 40x40",
    unit: "m'",
    details: [
      { name: "Tiang Pancang Mini Pile 40x40 Beton Precast", coeff: 1.000, unit: "m'", price: 800000 },
      { name: "Sewa Alat Pancang", coeff: 0.020, unit: "jam", price: 300000 },
      { name: "Pekerja", coeff: 0.100, unit: "OH", price: 110000 },
      { name: "Tukang Besi", coeff: 0.050, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-PND-09",
    category: "Pekerjaan Pondasi",
    title: "Pondasi Tiang Pancang Spun Pile Dia. 50cm",
    unit: "m'",
    details: [
      { name: "Spun Pile Dia. 50cm Beton Precast", coeff: 1.000, unit: "m'", price: 1200000 },
      { name: "Sewa Alat Pancang Besar", coeff: 0.020, unit: "jam", price: 500000 },
      { name: "Pekerja", coeff: 0.150, unit: "OH", price: 110000 },
      { name: "Tukang Besi", coeff: 0.080, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.020, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-PND-10",
    category: "Pekerjaan Pondasi",
    title: "Pondasi Tiang Pancang Spun Pile Dia. 60cm",
    unit: "m'",
    details: [
      { name: "Spun Pile Dia. 60cm Beton Precast", coeff: 1.000, unit: "m'", price: 1500000 },
      { name: "Sewa Alat Pancang Besar", coeff: 0.020, unit: "jam", price: 500000 },
      { name: "Pekerja", coeff: 0.150, unit: "OH", price: 110000 },
      { name: "Tukang Besi", coeff: 0.080, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.020, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-PND-11",
    category: "Pekerjaan Pondasi",
    title: "Pondasi Tiang Pancang Kayu Ulin 10x10",
    unit: "m'",
    details: [
      { name: "Kayu Ulin 10x10", coeff: 1.000, unit: "m'", price: 250000 },
      { name: "Sewa Alat Pancang Ringan", coeff: 0.015, unit: "jam", price: 200000 },
      { name: "Pekerja", coeff: 0.100, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 0.050, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },

  // ==================== PEKERJAAN BETON ====================
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
  {
    code: "AHS-BTN-03",
    category: "Pekerjaan Beton",
    title: "Pekerjaan Beton Site Mix Mutu K-125",
    unit: "m3",
    details: [
      { name: "Semen Portland (50kg)", coeff: 4.940, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.520, unit: "m3", price: 220000 },
      { name: "Batu Pecah / Split 2/3", coeff: 0.760, unit: "m3", price: 280000 },
      { name: "Pekerja", coeff: 1.500, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.250, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.025, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.075, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-BTN-04",
    category: "Pekerjaan Beton",
    title: "Pekerjaan Beton Site Mix Mutu K-150",
    unit: "m3",
    details: [
      { name: "Semen Portland (50kg)", coeff: 5.600, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.500, unit: "m3", price: 220000 },
      { name: "Batu Pecah / Split 2/3", coeff: 0.780, unit: "m3", price: 280000 },
      { name: "Pekerja", coeff: 1.500, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.250, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.025, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.075, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-BTN-05",
    category: "Pekerjaan Beton",
    title: "Pekerjaan Beton Site Mix Mutu K-200",
    unit: "m3",
    details: [
      { name: "Semen Portland (50kg)", coeff: 6.500, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.480, unit: "m3", price: 220000 },
      { name: "Batu Pecah / Split 2/3", coeff: 0.800, unit: "m3", price: 280000 },
      { name: "Pekerja", coeff: 1.600, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.270, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.028, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.080, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-BTN-06",
    category: "Pekerjaan Beton",
    title: "Pekerjaan Beton Site Mix Mutu K-250",
    unit: "m3",
    details: [
      { name: "Semen Portland (50kg)", coeff: 8.260, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.480, unit: "m3", price: 220000 },
      { name: "Batu Pecah / Split 2/3", coeff: 0.760, unit: "m3", price: 280000 },
      { name: "Pekerja", coeff: 1.650, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.280, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.030, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.083, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-BTN-07",
    category: "Pekerjaan Beton",
    title: "Pekerjaan Beton Site Mix Mutu K-300",
    unit: "m3",
    details: [
      { name: "Semen Portland (50kg)", coeff: 8.960, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.470, unit: "m3", price: 220000 },
      { name: "Batu Pecah / Split 2/3", coeff: 0.750, unit: "m3", price: 280000 },
      { name: "Pekerja", coeff: 1.700, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.300, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.030, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.085, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-BTN-08",
    category: "Pekerjaan Beton",
    title: "Pekerjaan Beton Ready Mix Mutu K-250",
    unit: "m3",
    details: [
      { name: "Beton Ready Mix K-250", coeff: 1.000, unit: "m3", price: 1050000 },
      { name: "Sewa Pompa Beton", coeff: 1.000, unit: "m3", price: 100000 },
      { name: "Pekerja", coeff: 0.500, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.100, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.050, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-BTN-09",
    category: "Pekerjaan Beton",
    title: "Pekerjaan Beton Ready Mix Mutu K-300",
    unit: "m3",
    details: [
      { name: "Beton Ready Mix K-300", coeff: 1.000, unit: "m3", price: 1200000 },
      { name: "Sewa Pompa Beton", coeff: 1.000, unit: "m3", price: 100000 },
      { name: "Pekerja", coeff: 0.500, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.100, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.050, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-BTN-10",
    category: "Pekerjaan Beton",
    title: "Pekerjaan Beton Ready Mix Mutu K-350",
    unit: "m3",
    details: [
      { name: "Beton Ready Mix K-350", coeff: 1.000, unit: "m3", price: 1400000 },
      { name: "Sewa Pompa Beton", coeff: 1.000, unit: "m3", price: 100000 },
      { name: "Pekerja", coeff: 0.500, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.100, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.050, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-BTN-11",
    category: "Pekerjaan Beton",
    title: "Pekerjaan Beton Ready Mix Mutu K-400",
    unit: "m3",
    details: [
      { name: "Beton Ready Mix K-400", coeff: 1.000, unit: "m3", price: 1600000 },
      { name: "Sewa Pompa Beton", coeff: 1.000, unit: "m3", price: 100000 },
      { name: "Pekerja", coeff: 0.500, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.100, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.050, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-BTN-12",
    category: "Pekerjaan Beton",
    title: "Pekerjaan Beton Ready Mix Mutu K-500",
    unit: "m3",
    details: [
      { name: "Beton Ready Mix K-500", coeff: 1.000, unit: "m3", price: 2000000 },
      { name: "Sewa Pompa Beton", coeff: 1.000, unit: "m3", price: 100000 },
      { name: "Pekerja", coeff: 0.500, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.100, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.050, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-BTN-13",
    category: "Pekerjaan Beton",
    title: "Bekisting Pile Cap",
    unit: "m2",
    details: [
      { name: "Kayu Bekisting / Meranti", coeff: 0.045, unit: "m3", price: 2800000 },
      { name: "Plywood / Multiplek 9mm", coeff: 0.350, unit: "lbr", price: 165000 },
      { name: "Paku Biasa 2\" - 5\"", coeff: 0.300, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 0.400, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 0.400, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.040, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.020, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-BTN-14",
    category: "Pekerjaan Beton",
    title: "Bekisting Sloof (2x pakai)",
    unit: "m2",
    details: [
      { name: "Kayu Bekisting / Meranti", coeff: 0.030, unit: "m3", price: 2800000 },
      { name: "Plywood / Multiplek 9mm", coeff: 0.250, unit: "lbr", price: 165000 },
      { name: "Paku Biasa 2\" - 5\"", coeff: 0.200, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 0.350, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 0.350, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.035, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.020, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-BTN-15",
    category: "Pekerjaan Beton",
    title: "Bekisting Kolom (2x pakai)",
    unit: "m2",
    details: [
      { name: "Kayu Bekisting / Meranti", coeff: 0.035, unit: "m3", price: 2800000 },
      { name: "Plywood / Multiplek 9mm", coeff: 0.300, unit: "lbr", price: 165000 },
      { name: "Paku Biasa 2\" - 5\"", coeff: 0.250, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 0.400, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 0.400, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.040, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.020, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-BTN-16",
    category: "Pekerjaan Beton",
    title: "Bekisting Balok (2x pakai)",
    unit: "m2",
    details: [
      { name: "Kayu Bekisting / Meranti", coeff: 0.035, unit: "m3", price: 2800000 },
      { name: "Plywood / Multiplek 9mm", coeff: 0.300, unit: "lbr", price: 165000 },
      { name: "Paku Biasa 2\" - 5\"", coeff: 0.250, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 0.400, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 0.400, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.040, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.020, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-BTN-17",
    category: "Pekerjaan Beton",
    title: "Bekisting Pelat Lantai",
    unit: "m2",
    details: [
      { name: "Kayu Bekisting / Meranti", coeff: 0.040, unit: "m3", price: 2800000 },
      { name: "Plywood / Multiplek 9mm", coeff: 0.350, unit: "lbr", price: 165000 },
      { name: "Paku Biasa 2\" - 5\"", coeff: 0.300, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 0.450, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 0.450, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.045, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.025, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-BTN-18",
    category: "Pekerjaan Beton",
    title: "Pemasangan Perancah Balok",
    unit: "m2",
    details: [
      { name: "Kayu Bekisting / Meranti", coeff: 0.020, unit: "m3", price: 2800000 },
      { name: "Paku Biasa 2\" - 5\"", coeff: 0.150, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 0.250, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 0.250, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.025, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.015, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-BTN-19",
    category: "Pekerjaan Beton",
    title: "Pemasangan Perancah Pelat Lantai",
    unit: "m2",
    details: [
      { name: "Kayu Bekisting / Meranti", coeff: 0.025, unit: "m3", price: 2800000 },
      { name: "Paku Biasa 2\" - 5\"", coeff: 0.200, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 0.300, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 0.300, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.030, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.020, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-BTN-20",
    category: "Pekerjaan Beton",
    title: "Pemasangan Floordeck",
    unit: "m2",
    details: [
      { name: "Floordeck (0.75mm)", coeff: 1.000, unit: "m2", price: 180000 },
      { name: "Paku Biasa 2\" - 5\"", coeff: 0.050, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 0.150, unit: "OH", price: 110000 },
      { name: "Tukang Besi", coeff: 0.100, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.015, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-BTN-21",
    category: "Pekerjaan Beton",
    title: "Pemasangan Wiremesh M6",
    unit: "m2",
    details: [
      { name: "Wiremesh M6", coeff: 1.000, unit: "m2", price: 75000 },
      { name: "Kawat Beton / Bendrat", coeff: 0.010, unit: "kg", price: 25000 },
      { name: "Pekerja", coeff: 0.030, unit: "OH", price: 110000 },
      { name: "Tukang Besi", coeff: 0.030, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.003, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.002, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-BTN-22",
    category: "Pekerjaan Beton",
    title: "Pemasangan Wiremesh M8",
    unit: "m2",
    details: [
      { name: "Wiremesh M8", coeff: 1.000, unit: "m2", price: 105000 },
      { name: "Kawat Beton / Bendrat", coeff: 0.010, unit: "kg", price: 25000 },
      { name: "Pekerja", coeff: 0.035, unit: "OH", price: 110000 },
      { name: "Tukang Besi", coeff: 0.035, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.003, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.002, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-BTN-23",
    category: "Pekerjaan Beton",
    title: "Pemasangan Wiremesh M10",
    unit: "m2",
    details: [
      { name: "Wiremesh M10", coeff: 1.000, unit: "m2", price: 150000 },
      { name: "Kawat Beton / Bendrat", coeff: 0.010, unit: "kg", price: 25000 },
      { name: "Pekerja", coeff: 0.040, unit: "OH", price: 110000 },
      { name: "Tukang Besi", coeff: 0.040, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.004, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.002, unit: "OH", price: 180000 }
    ]
  },

  // ==================== PEKERJAAN ATAP ====================
  {
    code: "AHS-ATP-01",
    category: "Pekerjaan Atap",
    title: "Pemasangan Rangka Baja Ringan",
    unit: "m2",
    details: [
      { name: "Baja Ringan (Galvalum)", coeff: 1.000, unit: "m2", price: 35000 },
      { name: "Baut / Sekrup Self Drilling", coeff: 2.000, unit: "bh", price: 1500 },
      { name: "Pekerja", coeff: 0.150, unit: "OH", price: 110000 },
      { name: "Tukang Baja", coeff: 0.150, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.015, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.008, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-ATP-02",
    category: "Pekerjaan Atap",
    title: "Pemasangan Rangka Kuda-kuda Baja IWF",
    unit: "kg",
    details: [
      { name: "Baja IWF (Profil)", coeff: 1.050, unit: "kg", price: 18000 },
      { name: "Plat Baja Penyangga", coeff: 0.050, unit: "kg", price: 18000 },
      { name: "Mur Baut Berkualitas", coeff: 0.100, unit: "kg", price: 50000 },
      { name: "Pekerja", coeff: 0.020, unit: "OH", price: 110000 },
      { name: "Tukang Besi", coeff: 0.020, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.002, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.001, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-ATP-03",
    category: "Pekerjaan Atap",
    title: "Pemasangan Gording CNP",
    unit: "kg",
    details: [
      { name: "Baja CNP (C-Channel)", coeff: 1.050, unit: "kg", price: 17000 },
      { name: "Mur Baut Berkualitas", coeff: 0.050, unit: "kg", price: 50000 },
      { name: "Pekerja", coeff: 0.015, unit: "OH", price: 110000 },
      { name: "Tukang Besi", coeff: 0.015, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.0015, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.0008, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-ATP-04",
    category: "Pekerjaan Atap",
    title: "Pemasangan Atap Spandek",
    unit: "m2",
    details: [
      { name: "Atap Spandek (0.3mm - 0.4mm)", coeff: 1.100, unit: "m2", price: 80000 },
      { name: "Sekrup Self Drilling", coeff: 4.000, unit: "bh", price: 1500 },
      { name: "Pekerja", coeff: 0.050, unit: "OH", price: 110000 },
      { name: "Tukang Baja", coeff: 0.050, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.005, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.003, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-ATP-05",
    category: "Pekerjaan Atap",
    title: "Pemasangan Atap Genteng Metal",
    unit: "m2",
    details: [
      { name: "Genteng Metal (Galvalum)", coeff: 1.100, unit: "m2", price: 55000 },
      { name: "Sekrup / Paku Ring", coeff: 4.000, unit: "bh", price: 1200 },
      { name: "Pekerja", coeff: 0.060, unit: "OH", price: 110000 },
      { name: "Tukang Baja", coeff: 0.060, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.006, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.003, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-ATP-06",
    category: "Pekerjaan Atap",
    title: "Pemasangan Atap Genteng Glassur/Morando",
    unit: "m2",
    details: [
      { name: "Genteng Glassur / Morando", coeff: 1.000, unit: "m2", price: 150000 },
      { name: "Semen Portland (50kg)", coeff: 0.100, unit: "sak", price: 75000 },
      { name: "Pasir Pasang", coeff: 0.020, unit: "m3", price: 220000 },
      { name: "Pekerja", coeff: 0.100, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.100, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.005, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-ATP-07",
    category: "Pekerjaan Atap",
    title: "Pemasangan Atap Onduline",
    unit: "m2",
    details: [
      { name: "Atap Onduline", coeff: 1.100, unit: "m2", price: 35000 },
      { name: "Paku Onduline", coeff: 6.000, unit: "bh", price: 1000 },
      { name: "Pekerja", coeff: 0.050, unit: "OH", price: 110000 },
      { name: "Tukang Kayu/Baja", coeff: 0.050, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.005, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.003, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-ATP-08",
    category: "Pekerjaan Atap",
    title: "Pemasangan Talang Air PVC",
    unit: "m'",
    details: [
      { name: "Talang Air PVC 4\" / 5\"", coeff: 1.000, unit: "m'", price: 65000 },
      { name: "Lem Pipa PVC", coeff: 0.020, unit: "tube", price: 25000 },
      { name: "Pekerja", coeff: 0.100, unit: "OH", price: 110000 },
      { name: "Tukang PVC", coeff: 0.100, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.005, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-ATP-09",
    category: "Pekerjaan Atap",
    title: "Pemasangan Talang Air Seng/Zincallum",
    unit: "m'",
    details: [
      { name: "Plat Seng / Zincallum (0.4mm)", coeff: 1.000, unit: "m'", price: 45000 },
      { name: "Paku Seng", coeff: 0.050, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 0.120, unit: "OH", price: 110000 },
      { name: "Tukang Seng", coeff: 0.120, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.012, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.006, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-ATP-10",
    category: "Pekerjaan Atap",
    title: "Pemasangan Nok/Bubungan Atap",
    unit: "m'",
    details: [
      { name: "Nok / Bubungan Atap", coeff: 1.000, unit: "m'", price: 75000 },
      { name: "Sekrup / Paku Ring", coeff: 3.000, unit: "bh", price: 1200 },
      { name: "Pekerja", coeff: 0.100, unit: "OH", price: 110000 },
      { name: "Tukang Baja", coeff: 0.100, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.005, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-ATP-11",
    category: "Pekerjaan Atap",
    title: "Pemasangan Lisplank GRC",
    unit: "m'",
    details: [
      { name: "Lisplank GRC", coeff: 1.000, unit: "m'", price: 70000 },
      { name: "Sekrup Self Drilling", coeff: 3.000, unit: "bh", price: 1500 },
      { name: "Pekerja", coeff: 0.100, unit: "OH", price: 110000 },
      { name: "Tukang Baja", coeff: 0.100, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.005, unit: "OH", price: 180000 }
    ]
  },

  // ==================== PEKERJAAN FINISHING ====================
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
    title: "Pemasangan Plafon Gypsum (Rangka Hollow)",
    unit: "m2",
    details: [
      { name: "Plafon Gypsum 9mm", coeff: 1.000, unit: "lbr", price: 85000 },
      { name: "Baja Ringan Hollow 2x4x0.35", coeff: 2.500, unit: "m'", price: 10000 },
      { name: "Sekrup Gypsum", coeff: 0.250, unit: "pak", price: 12000 },
      { name: "Pekerja", coeff: 0.150, unit: "OH", price: 110000 },
      { name: "Tukang Gypsum", coeff: 0.150, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.015, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.008, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-FIN-07",
    category: "Pekerjaan Finishing/Arsitektur",
    title: "Pemasangan Keramik Dinding 30x30",
    unit: "m2",
    details: [
      { name: "Keramik Lantai 30x30 cm (Kamar Mandi)", coeff: 1.050, unit: "dus", price: 60000 },
      { name: "Semen Portland (50kg)", coeff: 0.150, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.030, unit: "m3", price: 220000 },
      { name: "Semen Warna / Nat Keramik", coeff: 0.500, unit: "kg", price: 18000 },
      { name: "Pekerja", coeff: 0.500, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.500, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.050, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.025, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-FIN-08",
    category: "Pekerjaan Finishing/Arsitektur",
    title: "Pemasangan Lantai Granit 60x60",
    unit: "m2",
    details: [
      { name: "Granit Tile 60x60 KW 1", coeff: 1.050, unit: "dus", price: 180000 },
      { name: "Semen Portland (50kg)", coeff: 0.200, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.040, unit: "m3", price: 220000 },
      { name: "Semen Warna / Nat Keramik", coeff: 0.600, unit: "kg", price: 18000 },
      { name: "Pekerja", coeff: 0.500, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.500, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.050, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.025, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-FIN-09",
    category: "Pekerjaan Finishing/Arsitektur",
    title: "Pemasangan Kusen Pintu Aluminium",
    unit: "m'",
    details: [
      { name: "Kusen Aluminium 3\" x 1.4mm", coeff: 1.000, unit: "m'", price: 85000 },
      { name: "Sekrup Self Drilling", coeff: 0.200, unit: "bh", price: 1500 },
      { name: "Pekerja", coeff: 0.200, unit: "OH", price: 110000 },
      { name: "Tukang Aluminium", coeff: 0.200, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.020, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-FIN-10",
    category: "Pekerjaan Finishing/Arsitektur",
    title: "Pemasangan Daun Pintu Panel Kayu",
    unit: "bh",
    details: [
      { name: "Daun Pintu Panel Kayu (Standard)", coeff: 1.000, unit: "bh", price: 1200000 },
      { name: "Engsel Pintu", coeff: 3.000, unit: "set", price: 35000 },
      { name: "Handle Pintu / Kunci", coeff: 1.000, unit: "set", price: 50000 },
      { name: "Pekerja", coeff: 0.250, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 0.250, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.025, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.013, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-FIN-11",
    category: "Pekerjaan Finishing/Arsitektur",
    title: "Pemasangan Jendela Kaca Aluminium (Nako)",
    unit: "bh",
    details: [
      { name: "Kusen Aluminium Jendela", coeff: 1.000, unit: "unit", price: 600000 },
      { name: "Kaca Polos 5mm", coeff: 1.000, unit: "lbr", price: 250000 },
      { name: "Engsel Jendela Nako", coeff: 2.000, unit: "bh", price: 15000 },
      { name: "Pekerja", coeff: 0.200, unit: "OH", price: 110000 },
      { name: "Tukang Aluminium", coeff: 0.200, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.020, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-FIN-12",
    category: "Pekerjaan Finishing/Arsitektur",
    title: "Pemasangan Railing Tangga Besi",
    unit: "m'",
    details: [
      { name: "Pipa Besi Hollow 4x4", coeff: 1.200, unit: "m'", price: 45000 },
      { name: "Besi Plat Strip", coeff: 0.500, unit: "m'", price: 25000 },
      { name: "Cat Tembok Dinding Luar (Exterior)", coeff: 0.200, unit: "kg", price: 65000 },
      { name: "Pekerja", coeff: 0.250, unit: "OH", price: 110000 },
      { name: "Tukang Las / Besi", coeff: 0.250, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.025, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.013, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-FIN-13",
    category: "Pekerjaan Finishing/Arsitektur",
    title: "Pemasangan Kloset Duduk (Sanitair)",
    unit: "bh",
    details: [
      { name: "Kloset Duduk (Toilet)", coeff: 1.000, unit: "bh", price: 1500000 },
      { name: "Fitting Pipa PVC", coeff: 1.000, unit: "set", price: 30000 },
      { name: "Sealant / Lem Silikon", coeff: 1.000, unit: "tube", price: 25000 },
      { name: "Pekerja", coeff: 0.200, unit: "OH", price: 110000 },
      { name: "Tukang Plumbing", coeff: 0.200, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.020, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-FIN-14",
    category: "Pekerjaan Finishing/Arsitektur",
    title: "Pengecatan Kusen dan Pintu Kayu",
    unit: "m2",
    details: [
      { name: "Cat Kayu (Melamine / Gloss)", coeff: 0.150, unit: "kg", price: 120000 },
      { name: "Thinner Cat", coeff: 0.100, unit: "liter", price: 30000 },
      { name: "Amplas Kayu", coeff: 0.500, unit: "lbr", price: 10000 },
      { name: "Pekerja", coeff: 0.250, unit: "OH", price: 110000 },
      { name: "Tukang Cat", coeff: 0.250, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.025, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.013, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-FIN-15",
    category: "Pekerjaan Finishing/Arsitektur",
    title: "Pemasangan List Plafon Gypsum / PVC",
    unit: "m'",
    details: [
      { name: "List Plafon PVC / Gypsum", coeff: 1.000, unit: "m'", price: 30000 },
      { name: "Lem Gypsum / PVC", coeff: 0.100, unit: "tube", price: 25000 },
      { name: "Pekerja", coeff: 0.100, unit: "OH", price: 110000 },
      { name: "Tukang Gypsum", coeff: 0.100, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.005, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-FIN-16",
    category: "Pekerjaan Finishing/Arsitektur",
    title: "Pengecatan Dinding Tembok Luar (Exterior)",
    unit: "m2",
    details: [
      { name: "Cat Tembok Dinding Luar (Exterior)", coeff: 0.300, unit: "kg", price: 65000 },
      { name: "Plamuur Tembok", coeff: 0.100, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 0.020, unit: "OH", price: 110000 },
      { name: "Tukang Cat", coeff: 0.080, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.008, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.004, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-FIN-17",
    category: "Pekerjaan Finishing/Arsitektur",
    title: "Pengecatan Pagar Besi / Teralis",
    unit: "m2",
    details: [
      { name: "Cat Tembok Dinding Luar (Exterior)", coeff: 0.200, unit: "kg", price: 65000 },
      { name: "Thinner Cat", coeff: 0.100, unit: "liter", price: 30000 },
      { name: "Amplas Besi", coeff: 0.500, unit: "lbr", price: 10000 },
      { name: "Pekerja", coeff: 0.250, unit: "OH", price: 110000 },
      { name: "Tukang Cat", coeff: 0.250, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.025, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.013, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-FIN-18",
    category: "Pekerjaan Finishing/Arsitektur",
    title: "Pemasangan Lantai Vinyl / Parket Kayu",
    unit: "m2",
    details: [
      { name: "Lantai Vinyl / Parket (Plank)", coeff: 1.050, unit: "m2", price: 165000 },
      { name: "Lem Lantai Vinyl / Parket", coeff: 0.150, unit: "kg", price: 45000 },
      { name: "List Vinyl / Parket", coeff: 0.100, unit: "m'", price: 25000 },
      { name: "Pekerja", coeff: 0.300, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 0.300, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.030, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.015, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-FIN-19",
    category: "Pekerjaan Finishing/Arsitektur",
    title: "Pemasangan Kanopi Baja Ringan & Kaca",
    unit: "m2",
    details: [
      { name: "Baja Ringan (Galvalum)", coeff: 4.000, unit: "m'", price: 35000 },
      { name: "Kaca Polos 5mm", coeff: 1.100, unit: "lbr", price: 250000 },
      { name: "Sekrup Self Drilling", coeff: 0.500, unit: "bh", price: 1500 },
      { name: "Pekerja", coeff: 0.400, unit: "OH", price: 110000 },
      { name: "Tukang Baja", coeff: 0.400, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.040, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.020, unit: "OH", price: 180000 }
    ]
  },

  // ==================== PEKERJAAN LANDSCAPE ====================
  {
    code: "AHS-LSC-01",
    category: "Pekerjaan Landscape",
    title: "Pemasangan Paving Block / Grass Block",
    unit: "m2",
    isNew: true,
    version: 1,
    details: [
      { name: "Paving Block / Grass Block", coeff: 1.000, unit: "m2", price: 95000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.050, unit: "m3", price: 220000 },
      { name: "Semen Portland (50kg)", coeff: 0.100, unit: "sak", price: 75000 },
      { name: "Pekerja", coeff: 0.300, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.200, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.020, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-LSC-02",
    category: "Pekerjaan Landscape",
    title: "Penanaman Rumput Gajah / Merbabu (per m2)",
    unit: "m2",
    isNew: true,
    version: 1,
    details: [
      { name: "Rumput Gajah / Merbabu", coeff: 1.000, unit: "m2", price: 25000 },
      { name: "Tanah Urug / Top Soil", coeff: 0.100, unit: "m3", price: 100000 },
      { name: "Pekerja", coeff: 0.150, unit: "OH", price: 110000 },
      { name: "Mandor Proyek", coeff: 0.008, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-LSC-03",
    category: "Pekerjaan Landscape",
    title: "Penanaman Pohon Peneduh / Tanaman Hias",
    unit: "poh",
    isNew: true,
    version: 1,
    details: [
      { name: "Bibit Pohon Peneduh / Tanaman", coeff: 1.000, unit: "poh", price: 450000 },
      { name: "Pupuk Organik / Kompos", coeff: 1.000, unit: "kg", price: 10000 },
      { name: "Tanah Urug / Top Soil", coeff: 0.050, unit: "m3", price: 100000 },
      { name: "Pekerja", coeff: 0.250, unit: "OH", price: 110000 },
      { name: "Tukang Taman", coeff: 0.250, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.025, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.013, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-LSC-04",
    category: "Pekerjaan Landscape",
    title: "Pembuatan Deck / Jembatan Kayu Minimalis",
    unit: "m2",
    isNew: true,
    version: 1,
    details: [
      { name: "Kayu Meranti / Ulin", coeff: 0.150, unit: "m3", price: 2800000 },
      { name: "Besi Beton Polos / Ulir", coeff: 2.000, unit: "kg", price: 14500 },
      { name: "Paku Biasa 2\" - 5\"", coeff: 0.150, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 0.500, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 0.500, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.050, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.025, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-LSC-05",
    category: "Pekerjaan Landscape",
    title: "Pembuatan Kolam Ikan / Batu Alam",
    unit: "m2",
    isNew: true,
    version: 1,
    details: [
      { name: "Batu Alam Andesit / Paras", coeff: 1.100, unit: "m2", price: 150000 },
      { name: "Semen Portland (50kg)", coeff: 0.400, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.080, unit: "m3", price: 220000 },
      { name: "Pekerja", coeff: 0.750, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.500, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.050, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.025, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-LSC-06",
    category: "Pekerjaan Landscape",
    title: "Pemasangan Pagar Taman / Pagar Bata Precast",
    unit: "m'",
    isNew: true,
    version: 1,
    details: [
      { name: "Pagar Bata Precast / Pilar Beton", coeff: 1.000, unit: "m'", price: 450000 },
      { name: "Semen Portland (50kg)", coeff: 0.200, unit: "sak", price: 75000 },
      { name: "Besi Beton Polos / Ulir", coeff: 2.000, unit: "kg", price: 14500 },
      { name: "Pekerja", coeff: 0.300, unit: "OH", price: 110000 },
      { name: "Tukang Batu", coeff: 0.200, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.020, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },

  // ==================== PEKERJAAN JALAN & JEMBATAN ====================
  {
    code: "AHS-JLN-01",
    category: "Pekerjaan Jalan dan Jembatan",
    title: "Galian Biasa untuk Badan Jalan",
    unit: "m3",
    isNew: true,
    version: 1,
    details: [
      { name: "Pekerja", coeff: 0.100, unit: "OH", price: 110000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-JLN-02",
    category: "Pekerjaan Jalan dan Jembatan",
    title: "Pekerjaan Jalan dan Jembatan - Urugan",
    unit: "m3",
    isNew: true,
    version: 1,
    details: [
      { name: "Pekerja", coeff: 0.100, unit: "OH", price: 110000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },

  // ==================== PEKERJAAN MEKANIKAL & ELEKTRIKAL ====================
  {
    code: "AHS-MEP-09",
    category: "Pekerjaan Mekanikal & Elektrikal",
    title: "Pemasangan Panel Listrik Utama (PHB) dengan MCCB",
    unit: "unit",
    details: [
      { name: "Panel Box Listrik Ukuran 5-6 Group", coeff: 1.000, unit: "unit", price: 750000 },
      { name: "MCCB 3 Phase 25A", coeff: 1.000, unit: "bh", price: 300000 },
      { name: "Kabel NYY 4x6", coeff: 10.000, unit: "m'", price: 35000 },
      { name: "Pekerja", coeff: 0.800, unit: "OH", price: 110000 },
      { name: "Tukang Listrik", coeff: 0.800, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.080, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.040, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-MEP-10",
    category: "Pekerjaan Mekanikal & Elektrikal",
    title: "Pemasangan Sistem Grounding (Arde) / Penangkal Petir",
    unit: "titik",
    details: [
      { name: "Batang Grounding / As Grounding 5/8\"", coeff: 1.000, unit: "btg", price: 250000 },
      { name: "Kabel Grounding NYA 16mm", coeff: 10.000, unit: "m'", price: 15000 },
      { name: "Pekerja", coeff: 0.300, unit: "OH", price: 110000 },
      { name: "Tukang Listrik", coeff: 0.300, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.030, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.015, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-MEP-11",
    category: "Pekerjaan Mekanikal & Elektrikal",
    title: "Pemasangan Kabel Tray (Kabel Canal) Jalur Utama",
    unit: "m'",
    details: [
      { name: "Kabel Tray Besi / Kabel Canal", coeff: 1.000, unit: "m'", price: 45000 },
      { name: "Kabel Listrik NYM 2x2.5", coeff: 2.000, unit: "m'", price: 8000 },
      { name: "Pekerja", coeff: 0.120, unit: "OH", price: 110000 },
      { name: "Tukang Listrik", coeff: 0.120, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.012, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.006, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-MEP-12",
    category: "Pekerjaan Mekanikal & Elektrikal",
    title: "Pemasangan Pompa Air (Jet Pump / Submersible)",
    unit: "unit",
    details: [
      { name: "Pompa Air Jet Pump / Submersible", coeff: 1.000, unit: "unit", price: 1800000 },
      { name: "Pipa PVC 1\" Type AW", coeff: 4.000, unit: "btg", price: 45000 },
      { name: "Kabel Listrik NYM 3x1.5", coeff: 4.000, unit: "m'", price: 6000 },
      { name: "Pekerja", coeff: 0.400, unit: "OH", price: 110000 },
      { name: "Tukang Listrik/Plumbing", coeff: 0.400, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.040, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.020, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-MEP-13",
    category: "Pekerjaan Mekanikal & Elektrikal",
    title: "Pemasangan Tandon Air / Water Tank (500 Liter)",
    unit: "unit",
    details: [
      { name: "Tandon Air Plastik (500 Liter)", coeff: 1.000, unit: "unit", price: 900000 },
      { name: "Pipa PVC 3/4\" Type AW", coeff: 2.000, unit: "btg", price: 35000 },
      { name: "Lem Pipa PVC", coeff: 0.020, unit: "tube", price: 25000 },
      { name: "Pekerja", coeff: 0.300, unit: "OH", price: 110000 },
      { name: "Tukang Plumbing", coeff: 0.300, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.030, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.015, unit: "OH", price: 180000 }
    ]
  },

  // ==================== PEKERJAAN DRAINASE ====================
  {
    code: "AHS-DRN-01",
    category: "Pekerjaan Drainase",
    title: "Galian Saluran Drainase Kedalaman 1 Meter",
    unit: "m3",
    isNew: true,
    version: 1,
    details: [
      { name: "Pekerja", coeff: 0.750, unit: "OH", price: 110000 },
      { name: "Mandor Proyek", coeff: 0.025, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-02",
    category: "Pekerjaan Drainase",
    title: "Urugan Pasir Bawah Saluran Drainase (t=10cm)",
    unit: "m3",
    isNew: true,
    version: 1,
    details: [
      { name: "Pasir Urug", coeff: 1.200, unit: "m3", price: 150000 },
      { name: "Pekerja", coeff: 0.300, unit: "OH", price: 110000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-03",
    category: "Pekerjaan Drainase",
    title: "Pasangan Batu Kali Saluran Drainase 1PC : 4PP",
    unit: "m3",
    isNew: true,
    version: 1,
    details: [
      { name: "Batu Belah / Batu Kali", coeff: 1.200, unit: "m3", price: 250000 },
      { name: "Semen Portland (50kg)", coeff: 3.260, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.520, unit: "m3", price: 220000 },
      { name: "Pekerja", coeff: 1.500, unit: "OH", price: 110000 },
      { name: "Tukang Drainase", coeff: 0.750, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.075, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.075, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-04",
    category: "Pekerjaan Drainase",
    title: "Beton Saluran Drainase Mutu K-225 (Site Mix)",
    unit: "m3",
    isNew: true,
    version: 1,
    details: [
      { name: "Semen Portland (50kg)", coeff: 7.420, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.499, unit: "m3", price: 220000 },
      { name: "Batu Pecah / Split 2/3", coeff: 0.760, unit: "m3", price: 280000 },
      { name: "Pekerja", coeff: 1.650, unit: "OH", price: 110000 },
      { name: "Tukang Drainase", coeff: 0.275, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.028, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.083, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-05",
    category: "Pekerjaan Drainase",
    title: "Pembesian Saluran Drainase (Besi Polos/Ulir)",
    unit: "kg",
    isNew: true,
    version: 1,
    details: [
      { name: "Besi Beton Polos / Ulir", coeff: 1.050, unit: "kg", price: 14500 },
      { name: "Kawat Beton / Bendrat", coeff: 0.015, unit: "kg", price: 25000 },
      { name: "Pekerja", coeff: 0.007, unit: "OH", price: 110000 },
      { name: "Tukang Besi", coeff: 0.007, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.0007, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.0004, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-06",
    category: "Pekerjaan Drainase",
    title: "Bekisting Saluran Drainase (2x Pakai)",
    unit: "m2",
    isNew: true,
    version: 1,
    details: [
      { name: "Kayu Bekisting / Meranti", coeff: 0.030, unit: "m3", price: 2800000 },
      { name: "Plywood / Multiplek 9mm", coeff: 0.250, unit: "lbr", price: 165000 },
      { name: "Paku Biasa 2\" - 5\"", coeff: 0.200, unit: "kg", price: 20000 },
      { name: "Pekerja", coeff: 0.350, unit: "OH", price: 110000 },
      { name: "Tukang Kayu", coeff: 0.350, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.035, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.020, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-07",
    category: "Pekerjaan Drainase",
    title: "Pemasangan Buis Beton Dia. 30cm",
    unit: "m'",
    isNew: true,
    version: 1,
    details: [
      { name: "Buis Beton / Gorong-gorong Dia. 30cm", coeff: 1.000, unit: "bh", price: 125000 },
      { name: "Semen Portland (50kg)", coeff: 0.050, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.010, unit: "m3", price: 220000 },
      { name: "Pekerja", coeff: 0.200, unit: "OH", price: 110000 },
      { name: "Tukang Drainase", coeff: 0.100, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.005, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-08",
    category: "Pekerjaan Drainase",
    title: "Pemasangan Buis Beton Dia. 40cm",
    unit: "m'",
    isNew: true,
    version: 1,
    details: [
      { name: "Buis Beton / Gorong-gorong Dia. 40cm", coeff: 1.000, unit: "bh", price: 175000 },
      { name: "Semen Portland (50kg)", coeff: 0.060, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.012, unit: "m3", price: 220000 },
      { name: "Pekerja", coeff: 0.250, unit: "OH", price: 110000 },
      { name: "Tukang Drainase", coeff: 0.125, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.013, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.006, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-09",
    category: "Pekerjaan Drainase",
    title: "Pemasangan Buis Beton Dia. 50cm",
    unit: "m'",
    isNew: true,
    version: 1,
    details: [
      { name: "Buis Beton / Gorong-gorong Dia. 50cm", coeff: 1.000, unit: "bh", price: 235000 },
      { name: "Semen Portland (50kg)", coeff: 0.075, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.015, unit: "m3", price: 220000 },
      { name: "Pekerja", coeff: 0.300, unit: "OH", price: 110000 },
      { name: "Tukang Drainase", coeff: 0.150, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.015, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.008, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-10",
    category: "Pekerjaan Drainase",
    title: "Pemasangan Pipa PVC 6\" Type AW",
    unit: "m'",
    isNew: true,
    version: 1,
    details: [
      { name: "Pipa PVC 6\" Type AW", coeff: 0.333, unit: "btg", price: 185000 },
      { name: "Lem Pipa PVC", coeff: 0.020, unit: "tube", price: 25000 },
      { name: "Pekerja", coeff: 0.150, unit: "OH", price: 110000 },
      { name: "Tukang PVC", coeff: 0.150, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.015, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.008, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-11",
    category: "Pekerjaan Drainase",
    title: "Pemasangan Pipa PVC 8\" Type AW",
    unit: "m'",
    isNew: true,
    version: 1,
    details: [
      { name: "Pipa PVC 8\" Type AW", coeff: 0.333, unit: "btg", price: 275000 },
      { name: "Lem Pipa PVC", coeff: 0.025, unit: "tube", price: 25000 },
      { name: "Pekerja", coeff: 0.200, unit: "OH", price: 110000 },
      { name: "Tukang PVC", coeff: 0.200, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.020, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-12",
    category: "Pekerjaan Drainase",
    title: "Pemasangan Grill / Kisi-kisi Besi Drainase",
    unit: "m'",
    isNew: true,
    version: 1,
    details: [
      { name: "Grill / Kisi-kisi Besi Drainase", coeff: 1.000, unit: "m'", price: 285000 },
      { name: "Besi Beton Polos / Ulir", coeff: 2.000, unit: "kg", price: 14500 },
      { name: "Pekerja", coeff: 0.200, unit: "OH", price: 110000 },
      { name: "Tukang Besi", coeff: 0.200, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.020, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-13",
    category: "Pekerjaan Drainase",
    title: "Plesteran dan Acian Saluran Drainase",
    unit: "m2",
    isNew: true,
    version: 1,
    details: [
      { name: "Semen Portland (50kg)", coeff: 0.158, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.026, unit: "m3", price: 220000 },
      { name: "Pekerja", coeff: 0.300, unit: "OH", price: 110000 },
      { name: "Tukang Drainase", coeff: 0.150, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.015, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.015, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-14",
    category: "Pekerjaan Drainase",
    title: "Pembuatan Bak Kontrol / Manhole Drainase",
    unit: "unit",
    isNew: true,
    version: 1,
    details: [
      { name: "Semen Portland (50kg)", coeff: 2.500, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.150, unit: "m3", price: 220000 },
      { name: "Batu Pecah / Split 2/3", coeff: 0.200, unit: "m3", price: 280000 },
      { name: "Besi Beton Polos / Ulir", coeff: 15.000, unit: "kg", price: 14500 },
      { name: "Kayu Bekisting / Meranti", coeff: 0.050, unit: "m3", price: 2800000 },
      { name: "Plywood / Multiplek 9mm", coeff: 0.500, unit: "lbr", price: 165000 },
      { name: "Pekerja", coeff: 2.000, unit: "OH", price: 110000 },
      { name: "Tukang Drainase", coeff: 1.000, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.100, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.050, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-15",
    category: "Pekerjaan Drainase",
    title: "Pemasangan Pipa Beton Bertulang Dia. 30cm",
    unit: "m'",
    isNew: true,
    version: 1,
    details: [
      { name: "Pipa Beton Bertulang Dia. 30cm", coeff: 1.000, unit: "m'", price: 185000 },
      { name: "Semen Portland (50kg)", coeff: 0.050, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.010, unit: "m3", price: 220000 },
      { name: "Pekerja", coeff: 0.250, unit: "OH", price: 110000 },
      { name: "Tukang Drainase", coeff: 0.125, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.013, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.006, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-16",
    category: "Pekerjaan Drainase",
    title: "Pemasangan Pipa Beton Bertulang Dia. 40cm",
    unit: "m'",
    isNew: true,
    version: 1,
    details: [
      { name: "Pipa Beton Bertulang Dia. 40cm", coeff: 1.000, unit: "m'", price: 245000 },
      { name: "Semen Portland (50kg)", coeff: 0.060, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.012, unit: "m3", price: 220000 },
      { name: "Pekerja", coeff: 0.300, unit: "OH", price: 110000 },
      { name: "Tukang Drainase", coeff: 0.150, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.015, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.008, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-17",
    category: "Pekerjaan Drainase",
    title: "Pemasangan Pipa Beton Bertulang Dia. 50cm",
    unit: "m'",
    isNew: true,
    version: 1,
    details: [
      { name: "Pipa Beton Bertulang Dia. 50cm", coeff: 1.000, unit: "m'", price: 320000 },
      { name: "Semen Portland (50kg)", coeff: 0.075, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.015, unit: "m3", price: 220000 },
      { name: "Pekerja", coeff: 0.350, unit: "OH", price: 110000 },
      { name: "Tukang Drainase", coeff: 0.175, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.018, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.009, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-18",
    category: "Pekerjaan Drainase",
    title: "Pekerjaan Dewatering / Pompa Air",
    unit: "hari",
    isNew: true,
    version: 1,
    details: [
      { name: "Sewa Pompa Air / Dewatering", coeff: 1.000, unit: "hari", price: 150000 },
      { name: "Pekerja", coeff: 0.500, unit: "OH", price: 110000 },
      { name: "Mandor Proyek", coeff: 0.020, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-19",
    category: "Pekerjaan Drainase",
    title: "Pekerjaan U-ditch Ukuran 60x60x100",
    unit: "m'",
    isNew: true,
    version: 1,
    details: [
      { name: "U-ditch Beton Precast 60x60x100", coeff: 1.000, unit: "bh", price: 850000 },
      { name: "Semen Portland (50kg)", coeff: 0.100, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.020, unit: "m3", price: 220000 },
      { name: "Sewa Excavator", coeff: 0.020, unit: "jam", price: 250000 },
      { name: "Pekerja", coeff: 0.400, unit: "OH", price: 110000 },
      { name: "Tukang Drainase", coeff: 0.200, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.020, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-20",
    category: "Pekerjaan Drainase",
    title: "Pekerjaan U-ditch Ukuran 60x60x120",
    unit: "m'",
    isNew: true,
    version: 1,
    details: [
      { name: "U-ditch Beton Precast 60x60x120", coeff: 0.833, unit: "bh", price: 950000 },
      { name: "Semen Portland (50kg)", coeff: 0.100, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.020, unit: "m3", price: 220000 },
      { name: "Sewa Excavator", coeff: 0.020, unit: "jam", price: 250000 },
      { name: "Pekerja", coeff: 0.400, unit: "OH", price: 110000 },
      { name: "Tukang Drainase", coeff: 0.200, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.020, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.010, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-21",
    category: "Pekerjaan Drainase",
    title: "Pekerjaan U-ditch Ukuran 80x80x100",
    unit: "m'",
    isNew: true,
    version: 1,
    details: [
      { name: "U-ditch Beton Precast 80x80x100", coeff: 1.000, unit: "bh", price: 1250000 },
      { name: "Semen Portland (50kg)", coeff: 0.120, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.025, unit: "m3", price: 220000 },
      { name: "Sewa Excavator", coeff: 0.025, unit: "jam", price: 250000 },
      { name: "Pekerja", coeff: 0.500, unit: "OH", price: 110000 },
      { name: "Tukang Drainase", coeff: 0.250, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.025, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.013, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-22",
    category: "Pekerjaan Drainase",
    title: "Pekerjaan U-ditch Ukuran 80x80x120",
    unit: "m'",
    isNew: true,
    version: 1,
    details: [
      { name: "U-ditch Beton Precast 80x80x120", coeff: 0.833, unit: "bh", price: 1450000 },
      { name: "Semen Portland (50kg)", coeff: 0.120, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.025, unit: "m3", price: 220000 },
      { name: "Sewa Excavator", coeff: 0.025, unit: "jam", price: 250000 },
      { name: "Pekerja", coeff: 0.500, unit: "OH", price: 110000 },
      { name: "Tukang Drainase", coeff: 0.250, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.025, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.013, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-23",
    category: "Pekerjaan Drainase",
    title: "Pekerjaan U-ditch Ukuran 100x100x100",
    unit: "m'",
    isNew: true,
    version: 1,
    details: [
      { name: "U-ditch Beton Precast 100x100x100", coeff: 1.000, unit: "bh", price: 1850000 },
      { name: "Semen Portland (50kg)", coeff: 0.150, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.030, unit: "m3", price: 220000 },
      { name: "Sewa Excavator", coeff: 0.030, unit: "jam", price: 250000 },
      { name: "Pekerja", coeff: 0.600, unit: "OH", price: 110000 },
      { name: "Tukang Drainase", coeff: 0.300, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.030, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.015, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-24",
    category: "Pekerjaan Drainase",
    title: "Pekerjaan U-ditch Ukuran 120x120x100",
    unit: "m'",
    isNew: true,
    version: 1,
    details: [
      { name: "U-ditch Beton Precast 120x120x100", coeff: 1.000, unit: "bh", price: 2450000 },
      { name: "Semen Portland (50kg)", coeff: 0.180, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.035, unit: "m3", price: 220000 },
      { name: "Sewa Excavator", coeff: 0.035, unit: "jam", price: 250000 },
      { name: "Pekerja", coeff: 0.700, unit: "OH", price: 110000 },
      { name: "Tukang Drainase", coeff: 0.350, unit: "OH", price: 140000 },
      { name: "Kepala Tukang", coeff: 0.035, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.018, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-25",
    category: "Pekerjaan Drainase",
    title: "Pekerjaan Pintu Air Besi 40x40 cm",
    unit: "unit",
    isNew: true,
    version: 1,
    details: [
      { name: "Pintu Air Besi / Sluice Gate 40x40 cm", coeff: 1.000, unit: "unit", price: 750000 },
      { name: "Rangka Besi Pintu Air (Frame)", coeff: 1.000, unit: "unit", price: 250000 },
      { name: "Baut / Mur Stainless Steel M12", coeff: 8.000, unit: "bh", price: 15000 },
      { name: "Seal / Packing Pintu Air", coeff: 1.000, unit: "set", price: 85000 },
      { name: "Cat Besi Anti Karat (Zinc Chromate)", coeff: 0.500, unit: "kg", price: 85000 },
      { name: "Cat Besi Finish (Top Coat)", coeff: 0.300, unit: "kg", price: 95000 },
      { name: "Semen Portland (50kg)", coeff: 0.200, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.040, unit: "m3", price: 220000 },
      { name: "Pekerja", coeff: 0.500, unit: "OH", price: 110000 },
      { name: "Tukang Las / Besi", coeff: 0.300, unit: "OH", price: 150000 },
      { name: "Tukang Pasang Pintu Air", coeff: 0.300, unit: "OH", price: 160000 },
      { name: "Kepala Tukang", coeff: 0.030, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.015, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-26",
    category: "Pekerjaan Drainase",
    title: "Pekerjaan Pintu Air Besi 60x60 cm",
    unit: "unit",
    isNew: true,
    version: 1,
    details: [
      { name: "Pintu Air Besi / Sluice Gate 60x60 cm", coeff: 1.000, unit: "unit", price: 1250000 },
      { name: "Rangka Besi Pintu Air (Frame)", coeff: 1.000, unit: "unit", price: 250000 },
      { name: "Baut / Mur Stainless Steel M12", coeff: 12.000, unit: "bh", price: 15000 },
      { name: "Seal / Packing Pintu Air", coeff: 1.000, unit: "set", price: 85000 },
      { name: "Cat Besi Anti Karat (Zinc Chromate)", coeff: 0.700, unit: "kg", price: 85000 },
      { name: "Cat Besi Finish (Top Coat)", coeff: 0.500, unit: "kg", price: 95000 },
      { name: "Semen Portland (50kg)", coeff: 0.250, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.050, unit: "m3", price: 220000 },
      { name: "Pekerja", coeff: 0.700, unit: "OH", price: 110000 },
      { name: "Tukang Las / Besi", coeff: 0.400, unit: "OH", price: 150000 },
      { name: "Tukang Pasang Pintu Air", coeff: 0.400, unit: "OH", price: 160000 },
      { name: "Kepala Tukang", coeff: 0.040, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.020, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-27",
    category: "Pekerjaan Drainase",
    title: "Pekerjaan Pintu Air Besi 80x80 cm",
    unit: "unit",
    isNew: true,
    version: 1,
    details: [
      { name: "Pintu Air Besi / Sluice Gate 80x80 cm", coeff: 1.000, unit: "unit", price: 1850000 },
      { name: "Rangka Besi Pintu Air (Frame)", coeff: 1.000, unit: "unit", price: 250000 },
      { name: "Baut / Mur Stainless Steel M12", coeff: 16.000, unit: "bh", price: 15000 },
      { name: "Seal / Packing Pintu Air", coeff: 1.000, unit: "set", price: 85000 },
      { name: "Cat Besi Anti Karat (Zinc Chromate)", coeff: 0.900, unit: "kg", price: 85000 },
      { name: "Cat Besi Finish (Top Coat)", coeff: 0.700, unit: "kg", price: 95000 },
      { name: "Semen Portland (50kg)", coeff: 0.300, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.060, unit: "m3", price: 220000 },
      { name: "Pekerja", coeff: 0.900, unit: "OH", price: 110000 },
      { name: "Tukang Las / Besi", coeff: 0.500, unit: "OH", price: 150000 },
      { name: "Tukang Pasang Pintu Air", coeff: 0.500, unit: "OH", price: 160000 },
      { name: "Kepala Tukang", coeff: 0.050, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.025, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-28",
    category: "Pekerjaan Drainase",
    title: "Pekerjaan Pintu Air Besi 100x100 cm",
    unit: "unit",
    isNew: true,
    version: 1,
    details: [
      { name: "Pintu Air Besi / Sluice Gate 100x100 cm", coeff: 1.000, unit: "unit", price: 2650000 },
      { name: "Rangka Besi Pintu Air (Frame)", coeff: 1.000, unit: "unit", price: 250000 },
      { name: "Baut / Mur Stainless Steel M12", coeff: 20.000, unit: "bh", price: 15000 },
      { name: "Seal / Packing Pintu Air", coeff: 1.000, unit: "set", price: 85000 },
      { name: "Cat Besi Anti Karat (Zinc Chromate)", coeff: 1.200, unit: "kg", price: 85000 },
      { name: "Cat Besi Finish (Top Coat)", coeff: 0.900, unit: "kg", price: 95000 },
      { name: "Semen Portland (50kg)", coeff: 0.400, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.080, unit: "m3", price: 220000 },
      { name: "Pekerja", coeff: 1.200, unit: "OH", price: 110000 },
      { name: "Tukang Las / Besi", coeff: 0.700, unit: "OH", price: 150000 },
      { name: "Tukang Pasang Pintu Air", coeff: 0.700, unit: "OH", price: 160000 },
      { name: "Kepala Tukang", coeff: 0.070, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.035, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-29",
    category: "Pekerjaan Drainase",
    title: "Pekerjaan Pintu Air Beton Precast 60x60 cm",
    unit: "unit",
    isNew: true,
    version: 1,
    details: [
      { name: "Pintu Air Beton Precast 60x60 cm", coeff: 1.000, unit: "unit", price: 1500000 },
      { name: "Baut / Mur Stainless Steel M12", coeff: 8.000, unit: "bh", price: 15000 },
      { name: "Seal / Packing Pintu Air", coeff: 1.000, unit: "set", price: 85000 },
      { name: "Semen Portland (50kg)", coeff: 0.200, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.040, unit: "m3", price: 220000 },
      { name: "Pekerja", coeff: 0.800, unit: "OH", price: 110000 },
      { name: "Tukang Pasang Pintu Air", coeff: 0.500, unit: "OH", price: 160000 },
      { name: "Kepala Tukang", coeff: 0.050, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.025, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-30",
    category: "Pekerjaan Drainase",
    title: "Pekerjaan Pintu Air Beton Precast 80x80 cm",
    unit: "unit",
    isNew: true,
    version: 1,
    details: [
      { name: "Pintu Air Beton Precast 80x80 cm", coeff: 1.000, unit: "unit", price: 2100000 },
      { name: "Baut / Mur Stainless Steel M12", coeff: 12.000, unit: "bh", price: 15000 },
      { name: "Seal / Packing Pintu Air", coeff: 1.000, unit: "set", price: 85000 },
      { name: "Semen Portland (50kg)", coeff: 0.250, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.050, unit: "m3", price: 220000 },
      { name: "Pekerja", coeff: 1.000, unit: "OH", price: 110000 },
      { name: "Tukang Pasang Pintu Air", coeff: 0.600, unit: "OH", price: 160000 },
      { name: "Kepala Tukang", coeff: 0.060, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.030, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-DRN-31",
    category: "Pekerjaan Drainase",
    title: "Pekerjaan Pintu Air dengan Handwheel / Roda Pemutar",
    unit: "unit",
    isNew: true,
    version: 1,
    details: [
      { name: "Pintu Air Besi / Sluice Gate 60x60 cm", coeff: 1.000, unit: "unit", price: 1250000 },
      { name: "Handwheel / Roda Pemutar Pintu Air", coeff: 1.000, unit: "unit", price: 350000 },
      { name: "Pipa Besi Ulir / Stem Bar", coeff: 2.000, unit: "m'", price: 95000 },
      { name: "Rangka Besi Pintu Air (Frame)", coeff: 1.000, unit: "unit", price: 250000 },
      { name: "Baut / Mur Stainless Steel M12", coeff: 12.000, unit: "bh", price: 15000 },
      { name: "Seal / Packing Pintu Air", coeff: 1.000, unit: "set", price: 85000 },
      { name: "Cat Besi Anti Karat (Zinc Chromate)", coeff: 0.700, unit: "kg", price: 85000 },
      { name: "Cat Besi Finish (Top Coat)", coeff: 0.500, unit: "kg", price: 95000 },
      { name: "Semen Portland (50kg)", coeff: 0.250, unit: "sak", price: 75000 },
      { name: "Pasir Pasang / Pasir Beton", coeff: 0.050, unit: "m3", price: 220000 },
      { name: "Pekerja", coeff: 0.800, unit: "OH", price: 110000 },
      { name: "Tukang Las / Besi", coeff: 0.500, unit: "OH", price: 150000 },
      { name: "Tukang Pasang Pintu Air", coeff: 0.500, unit: "OH", price: 160000 },
      { name: "Kepala Tukang", coeff: 0.050, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.025, unit: "OH", price: 180000 }
    ]
  },

  // ==================== PEKERJAAN MEBEULAIR ====================
  {
    code: "AHS-MBL-01",
    category: "Pekerjaan Mebeulair",
    title: "Pembuatan Kitchen Set / Kabinet Bawah",
    unit: "m'",
    isNew: true,
    version: 1,
    details: [
      { name: "Plywood / Multiplek 12mm", coeff: 0.500, unit: "lbr", price: 195000 },
      { name: "HPL / Laminate Sheet", coeff: 1.000, unit: "lbr", price: 185000 },
      { name: "Lem Kayu / Wood Glue", coeff: 0.200, unit: "kg", price: 35000 },
      { name: "Engsel Sendok / Hidden Hinge", coeff: 2.000, unit: "bh", price: 25000 },
      { name: "Handle Furniture / Knob", coeff: 2.000, unit: "bh", price: 35000 },
      { name: "Sekrup Kayu 1\" - 3\"", coeff: 0.100, unit: "kg", price: 25000 },
      { name: "Pekerja", coeff: 1.000, unit: "OH", price: 110000 },
      { name: "Tukang Meubeul", coeff: 1.500, unit: "OH", price: 150000 },
      { name: "Tukang Finishing Kayu", coeff: 0.500, unit: "OH", price: 150000 },
      { name: "Kepala Tukang", coeff: 0.150, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.075, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-MBL-02",
    category: "Pekerjaan Mebeulair",
    title: "Pembuatan Kitchen Set / Kabinet Atas",
    unit: "m'",
    isNew: true,
    version: 1,
    details: [
      { name: "Plywood / Multiplek 12mm", coeff: 0.400, unit: "lbr", price: 195000 },
      { name: "HPL / Laminate Sheet", coeff: 0.800, unit: "lbr", price: 185000 },
      { name: "Lem Kayu / Wood Glue", coeff: 0.150, unit: "kg", price: 35000 },
      { name: "Engsel Sendok / Hidden Hinge", coeff: 2.000, unit: "bh", price: 25000 },
      { name: "Handle Furniture / Knob", coeff: 2.000, unit: "bh", price: 35000 },
      { name: "Sekrup Kayu 1\" - 3\"", coeff: 0.080, unit: "kg", price: 25000 },
      { name: "Pekerja", coeff: 0.800, unit: "OH", price: 110000 },
      { name: "Tukang Meubeul", coeff: 1.200, unit: "OH", price: 150000 },
      { name: "Tukang Finishing Kayu", coeff: 0.400, unit: "OH", price: 150000 },
      { name: "Kepala Tukang", coeff: 0.120, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.060, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-MBL-03",
    category: "Pekerjaan Mebeulair",
    title: "Pembuatan Lemari Pakaian / Wardrobe",
    unit: "m2",
    isNew: true,
    version: 1,
    details: [
      { name: "Plywood / Multiplek 12mm", coeff: 0.600, unit: "lbr", price: 195000 },
      { name: "HPL / Laminate Sheet", coeff: 1.200, unit: "lbr", price: 185000 },
      { name: "Lem Kayu / Wood Glue", coeff: 0.250, unit: "kg", price: 35000 },
      { name: "Engsel Sendok / Hidden Hinge", coeff: 4.000, unit: "bh", price: 25000 },
      { name: "Handle Furniture / Knob", coeff: 2.000, unit: "bh", price: 35000 },
      { name: "Rel Laci / Drawer Slide 45cm", coeff: 1.000, unit: "set", price: 85000 },
      { name: "Sekrup Kayu 1\" - 3\"", coeff: 0.150, unit: "kg", price: 25000 },
      { name: "Kaca Cermin / Mirror 5mm", coeff: 0.500, unit: "m2", price: 185000 },
      { name: "Pekerja", coeff: 1.200, unit: "OH", price: 110000 },
      { name: "Tukang Meubeul", coeff: 1.800, unit: "OH", price: 150000 },
      { name: "Tukang Finishing Kayu", coeff: 0.600, unit: "OH", price: 150000 },
      { name: "Kepala Tukang", coeff: 0.180, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.090, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-MBL-04",
    category: "Pekerjaan Mebeulair",
    title: "Pembuatan Meja Makan / Meja Kerja",
    unit: "unit",
    isNew: true,
    version: 1,
    details: [
      { name: "Plywood / Multiplek 12mm", coeff: 1.000, unit: "lbr", price: 195000 },
      { name: "HPL / Laminate Sheet", coeff: 2.000, unit: "lbr", price: 185000 },
      { name: "Lem Kayu / Wood Glue", coeff: 0.300, unit: "kg", price: 35000 },
      { name: "Sekrup Kayu 1\" - 3\"", coeff: 0.200, unit: "kg", price: 25000 },
      { name: "Pekerja", coeff: 1.000, unit: "OH", price: 110000 },
      { name: "Tukang Meubeul", coeff: 1.500, unit: "OH", price: 150000 },
      { name: "Tukang Finishing Kayu", coeff: 0.500, unit: "OH", price: 150000 },
      { name: "Kepala Tukang", coeff: 0.150, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.075, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-MBL-05",
    category: "Pekerjaan Mebeulair",
    title: "Pembuatan Kursi Makan / Kursi Kerja",
    unit: "unit",
    isNew: true,
    version: 1,
    details: [
      { name: "Plywood / Multiplek 12mm", coeff: 0.300, unit: "lbr", price: 195000 },
      { name: "HPL / Laminate Sheet", coeff: 0.500, unit: "lbr", price: 185000 },
      { name: "Lem Kayu / Wood Glue", coeff: 0.100, unit: "kg", price: 35000 },
      { name: "Sekrup Kayu 1\" - 3\"", coeff: 0.050, unit: "kg", price: 25000 },
      { name: "Pekerja", coeff: 0.500, unit: "OH", price: 110000 },
      { name: "Tukang Meubeul", coeff: 0.750, unit: "OH", price: 150000 },
      { name: "Tukang Finishing Kayu", coeff: 0.250, unit: "OH", price: 150000 },
      { name: "Kepala Tukang", coeff: 0.075, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.040, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-MBL-06",
    category: "Pekerjaan Mebeulair",
    title: "Pembuatan Rak Buku / Rak Dinding",
    unit: "m2",
    isNew: true,
    version: 1,
    details: [
      { name: "Plywood / Multiplek 12mm", coeff: 0.400, unit: "lbr", price: 195000 },
      { name: "HPL / Laminate Sheet", coeff: 0.800, unit: "lbr", price: 185000 },
      { name: "Lem Kayu / Wood Glue", coeff: 0.150, unit: "kg", price: 35000 },
      { name: "Sekrup Kayu 1\" - 3\"", coeff: 0.100, unit: "kg", price: 25000 },
      { name: "Pekerja", coeff: 0.600, unit: "OH", price: 110000 },
      { name: "Tukang Meubeul", coeff: 0.900, unit: "OH", price: 150000 },
      { name: "Tukang Finishing Kayu", coeff: 0.300, unit: "OH", price: 150000 },
      { name: "Kepala Tukang", coeff: 0.090, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.045, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-MBL-07",
    category: "Pekerjaan Mebeulair",
    title: "Pembuatan Tempat Tidur / Dipan",
    unit: "unit",
    isNew: true,
    version: 1,
    details: [
      { name: "Plywood / Multiplek 12mm", coeff: 1.500, unit: "lbr", price: 195000 },
      { name: "HPL / Laminate Sheet", coeff: 3.000, unit: "lbr", price: 185000 },
      { name: "Lem Kayu / Wood Glue", coeff: 0.400, unit: "kg", price: 35000 },
      { name: "Sekrup Kayu 1\" - 3\"", coeff: 0.250, unit: "kg", price: 25000 },
      { name: "Pekerja", coeff: 1.500, unit: "OH", price: 110000 },
      { name: "Tukang Meubeul", coeff: 2.000, unit: "OH", price: 150000 },
      { name: "Tukang Finishing Kayu", coeff: 0.700, unit: "OH", price: 150000 },
      { name: "Kepala Tukang", coeff: 0.200, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.100, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-MBL-08",
    category: "Pekerjaan Mebeulair",
    title: "Pembuatan Meja Rias / Dressing Table",
    unit: "unit",
    isNew: true,
    version: 1,
    details: [
      { name: "Plywood / Multiplek 12mm", coeff: 0.800, unit: "lbr", price: 195000 },
      { name: "HPL / Laminate Sheet", coeff: 1.500, unit: "lbr", price: 185000 },
      { name: "Lem Kayu / Wood Glue", coeff: 0.200, unit: "kg", price: 35000 },
      { name: "Rel Laci / Drawer Slide 45cm", coeff: 2.000, unit: "set", price: 85000 },
      { name: "Handle Furniture / Knob", coeff: 2.000, unit: "bh", price: 35000 },
      { name: "Kaca Cermin / Mirror 5mm", coeff: 1.000, unit: "m2", price: 185000 },
      { name: "Sekrup Kayu 1\" - 3\"", coeff: 0.150, unit: "kg", price: 25000 },
      { name: "Pekerja", coeff: 1.000, unit: "OH", price: 110000 },
      { name: "Tukang Meubeul", coeff: 1.500, unit: "OH", price: 150000 },
      { name: "Tukang Finishing Kayu", coeff: 0.500, unit: "OH", price: 150000 },
      { name: "Kepala Tukang", coeff: 0.150, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.075, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-MBL-09",
    category: "Pekerjaan Mebeulair",
    title: "Pembuatan Backdrop TV / Panel Dinding",
    unit: "m2",
    isNew: true,
    version: 1,
    details: [
      { name: "Plywood / Multiplek 12mm", coeff: 0.500, unit: "lbr", price: 195000 },
      { name: "HPL / Laminate Sheet", coeff: 1.000, unit: "lbr", price: 185000 },
      { name: "Lem Kayu / Wood Glue", coeff: 0.150, unit: "kg", price: 35000 },
      { name: "Sekrup Kayu 1\" - 3\"", coeff: 0.100, unit: "kg", price: 25000 },
      { name: "Pekerja", coeff: 0.800, unit: "OH", price: 110000 },
      { name: "Tukang Meubeul", coeff: 1.200, unit: "OH", price: 150000 },
      { name: "Tukang Finishing Kayu", coeff: 0.400, unit: "OH", price: 150000 },
      { name: "Kepala Tukang", coeff: 0.120, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.060, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-MBL-10",
    category: "Pekerjaan Mebeulair",
    title: "Pengecatan Mebeulair (Melamine / Gloss)",
    unit: "m2",
    isNew: true,
    version: 1,
    details: [
      { name: "Cat Kayu (Melamine / Gloss)", coeff: 0.150, unit: "kg", price: 120000 },
      { name: "Thinner Cat", coeff: 0.100, unit: "liter", price: 30000 },
      { name: "Amplas Kayu", coeff: 0.500, unit: "lbr", price: 10000 },
      { name: "Pekerja", coeff: 0.200, unit: "OH", price: 110000 },
      { name: "Tukang Finishing Kayu", coeff: 0.300, unit: "OH", price: 150000 },
      { name: "Kepala Tukang", coeff: 0.030, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.015, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-MBL-11",
    category: "Pekerjaan Mebeulair",
    title: "Pemasangan Cermin / Mirror pada Mebeulair",
    unit: "m2",
    isNew: true,
    version: 1,
    details: [
      { name: "Kaca Cermin / Mirror 5mm", coeff: 1.100, unit: "m2", price: 185000 },
      { name: "Lem Kaca / Silicone", coeff: 0.200, unit: "tube", price: 35000 },
      { name: "Karet Pelapis / Rubber Seal", coeff: 2.000, unit: "m'", price: 15000 },
      { name: "Pekerja", coeff: 0.300, unit: "OH", price: 110000 },
      { name: "Tukang Meubeul", coeff: 0.300, unit: "OH", price: 150000 },
      { name: "Kepala Tukang", coeff: 0.030, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.015, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-MBL-12",
    category: "Pekerjaan Mebeulair",
    title: "Pemasangan Rel Laci / Drawer Slide",
    unit: "set",
    isNew: true,
    version: 1,
    details: [
      { name: "Rel Laci / Drawer Slide 45cm", coeff: 1.000, unit: "set", price: 85000 },
      { name: "Sekrup Kayu 1\" - 3\"", coeff: 0.020, unit: "kg", price: 25000 },
      { name: "Pekerja", coeff: 0.100, unit: "OH", price: 110000 },
      { name: "Tukang Meubeul", coeff: 0.100, unit: "OH", price: 150000 },
      { name: "Kepala Tukang", coeff: 0.010, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.005, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-MBL-13",
    category: "Pekerjaan Mebeulair",
    title: "Pemasangan Engsel Sendok / Hidden Hinge",
    unit: "bh",
    isNew: true,
    version: 1,
    details: [
      { name: "Engsel Sendok / Hidden Hinge", coeff: 1.000, unit: "bh", price: 25000 },
      { name: "Sekrup Kayu 1\" - 3\"", coeff: 0.005, unit: "kg", price: 25000 },
      { name: "Pekerja", coeff: 0.050, unit: "OH", price: 110000 },
      { name: "Tukang Meubeul", coeff: 0.050, unit: "OH", price: 150000 },
      { name: "Kepala Tukang", coeff: 0.005, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.003, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-MBL-14",
    category: "Pekerjaan Mebeulair",
    title: "Pembuatan Mini Bar / Sideboard",
    unit: "unit",
    isNew: true,
    version: 1,
    details: [
      { name: "Plywood / Multiplek 12mm", coeff: 1.200, unit: "lbr", price: 195000 },
      { name: "HPL / Laminate Sheet", coeff: 2.400, unit: "lbr", price: 185000 },
      { name: "Lem Kayu / Wood Glue", coeff: 0.350, unit: "kg", price: 35000 },
      { name: "Engsel Sendok / Hidden Hinge", coeff: 4.000, unit: "bh", price: 25000 },
      { name: "Handle Furniture / Knob", coeff: 4.000, unit: "bh", price: 35000 },
      { name: "Rel Laci / Drawer Slide 45cm", coeff: 2.000, unit: "set", price: 85000 },
      { name: "Sekrup Kayu 1\" - 3\"", coeff: 0.200, unit: "kg", price: 25000 },
      { name: "Pekerja", coeff: 1.200, unit: "OH", price: 110000 },
      { name: "Tukang Meubeul", coeff: 1.800, unit: "OH", price: 150000 },
      { name: "Tukang Finishing Kayu", coeff: 0.600, unit: "OH", price: 150000 },
      { name: "Kepala Tukang", coeff: 0.180, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.090, unit: "OH", price: 180000 }
    ]
  },
  {
    code: "AHS-MBL-15",
    category: "Pekerjaan Mebeulair",
    title: "Pembuatan Meja Resepsionis / Front Desk",
    unit: "unit",
    isNew: true,
    version: 1,
    details: [
      { name: "Plywood / Multiplek 12mm", coeff: 2.000, unit: "lbr", price: 195000 },
      { name: "HPL / Laminate Sheet", coeff: 4.000, unit: "lbr", price: 185000 },
      { name: "Lem Kayu / Wood Glue", coeff: 0.500, unit: "kg", price: 35000 },
      { name: "Sekrup Kayu 1\" - 3\"", coeff: 0.300, unit: "kg", price: 25000 },
      { name: "Pekerja", coeff: 2.000, unit: "OH", price: 110000 },
      { name: "Tukang Meubeul", coeff: 3.000, unit: "OH", price: 150000 },
      { name: "Tukang Finishing Kayu", coeff: 1.000, unit: "OH", price: 150000 },
      { name: "Kepala Tukang", coeff: 0.300, unit: "OH", price: 160000 },
      { name: "Mandor Proyek", coeff: 0.150, unit: "OH", price: 180000 }
    ]
  }
];

// 3. FUNGSI PENGELOLA HARGA DASAR & AHS
function updateHargaDasar(type, index, value) {
  const val = parseFloat(value) || 0;
  let compName = '';
  if (type === 'bahan') { masterBahan[index].harga = val; compName = masterBahan[index].nama; }
  else if (type === 'alat') { masterAlat[index].harga = val; compName = masterAlat[index].nama; }
  else if (type === 'upah') { masterUpah[index].harga = val; compName = masterUpah[index].nama; }

  ahsDatabase.forEach(ahs => {
    if (ahs.details) {
      ahs.details.forEach(d => {
        if ((d.name || d.nama) === compName) d.price = val;
      });
    }
  });

  persistMasterData();
  if (typeof updateRABPricesFromAHS === 'function') updateRABPricesFromAHS();
  if (typeof filterAHSList === 'function') filterAHSList();
}

function updateAHSCoeff(ahsIndex, detailIndex, value) {
  const val = parseFloat(value) || 0;
  if (ahsDatabase[ahsIndex] && ahsDatabase[ahsIndex].details[detailIndex]) {
    ahsDatabase[ahsIndex].details[detailIndex].coeff = val;
    if (typeof updateRABPricesFromAHS === 'function') updateRABPricesFromAHS();
    if (typeof filterAHSList === 'function') filterAHSList();
  }
}

// --- FUNGSI RENDER DENGAN TOMBOL HAPUS ---
function renderPriceTable(type) {
  let targetBodyId, searchInputId, dataList;
  if (type === 'bahan') { targetBodyId = 'materialPriceTable'; searchInputId = 'searchBahan'; dataList = masterBahan; }
  else if (type === 'alat') { targetBodyId = 'equipmentPriceTable'; searchInputId = 'searchAlat'; dataList = masterAlat; }
  else if (type === 'upah') { targetBodyId = 'laborPriceTable'; searchInputId = 'searchUpah'; dataList = masterUpah; }

  const tbody = document.getElementById(targetBodyId);
  const searchVal = (document.getElementById(searchInputId)?.value || '').toLowerCase();
  if (!tbody) return;
  tbody.innerHTML = '';

  dataList.forEach((item, index) => {
    if (!searchVal || item.nama.toLowerCase().includes(searchVal)) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="width: 50%;">${item.nama}</td>
        <td style="width: 30%;"><input type="number" class="form-control form-control-sm text-end" value="${item.harga}" onchange="updateHargaDasar('${type}', ${index}, this.value)" min="0" step="100"></td>
        <td style="width: 20%; text-align: center;">
          <button class="btn btn-sm btn-mono-danger" onclick="deleteMasterItem('${type}', ${index})">🗑️</button>
        </td>
      `;
      tbody.appendChild(tr);
    }
  });
  if (tbody.children.length === 0) tbody.innerHTML = '<tr><td colspan="3" class="text-center text-muted">Data tidak ditemukan</td></tr>';
}

// --- FUNGSI HAPUS ITEM DARI PANEL HARGA ---
function deleteMasterItem(type, index) {
  if (!confirm('Apakah Anda yakin ingin menghapus item ini dari Panel Harga Dasar?')) return;
  let arr = type === 'bahan' ? masterBahan : type === 'alat' ? masterAlat : masterUpah;
  arr.splice(index, 1);
  persistMasterData();
  renderPriceTable(type);
  if (typeof updateRABPricesFromAHS === 'function') updateRABPricesFromAHS();
}

function addMasterItem(type) {
  const nama = prompt("Masukkan nama item baru:");
  if (!nama) return;
  const harga = parseFloat(prompt("Masukkan harga satuan (angka):")) || 0;
  const satuan = prompt("Masukkan satuan (contoh: m3, kg, OH, sak):", "m3") || "unit";
  const newItem = { nama, harga, satuan };
  if (type === 'bahan') masterBahan.push(newItem);
  else if (type === 'alat') masterAlat.push(newItem);
  else if (type === 'upah') masterUpah.push(newItem);
  persistMasterData();
  renderPriceTable(type);
}

function persistMasterData() {
  localStorage.setItem('sicermat_master_data', JSON.stringify({ bahan: masterBahan, alat: masterAlat, upah: masterUpah }));
}

function loadMasterData() {
  const saved = localStorage.getItem('sicermat_master_data');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      masterBahan.splice(0, masterBahan.length, ...data.bahan);
      masterAlat.splice(0, masterAlat.length, ...data.alat);
      masterUpah.splice(0, masterUpah.length, ...data.upah);
    } catch (e) { console.warn('Gagal memuat master data dari localStorage, gunakan default.'); }
  }
}

// ============================================================
// MAPPING KATEGORI KE SINGKATAN
// ============================================================
const CATEGORY_ABBR_MAP = {
  "Pekerjaan Persiapan": "PRP",
  "Pekerjaan Tanah": "TNH",
  "Pekerjaan Pondasi": "PND",
  "Pekerjaan Beton": "BTN",
  "Pekerjaan Atap": "ATP",
  "Pekerjaan Finishing/Arsitektur": "FIN",
  "Pekerjaan Mekanikal & Elektrikal": "MEK",
  "Pekerjaan Plumbing": "PLB",
  "Pekerjaan Landscape": "LSC",
  "Pekerjaan Jalan dan Jembatan": "JLN",
  "Pekerjaan Pagar": "PGR",
  "Pekerjaan Drainase": "DRN",
  "Pekerjaan Pengaspalan": "ASP",
  "Pekerjaan Marka Jalan": "MRK",
  "Pekerjaan Rambu Lalu Lintas": "RBL",
  "Pekerjaan Struktur Baja": "STB",
  "Pekerjaan Precast": "PRC",
  "Pekerjaan Renovasi": "RNV",
  "Pekerjaan Mebeulair": "MBL",
  "Lainnya": "GEN"
};

const ABBR_CATEGORY_MAP = {
  "PRP": "Pekerjaan Persiapan",
  "TNH": "Pekerjaan Tanah",
  "PND": "Pekerjaan Pondasi",
  "BTN": "Pekerjaan Beton",
  "ATP": "Pekerjaan Atap",
  "FIN": "Pekerjaan Finishing/Arsitektur",
  "MEK": "Pekerjaan Mekanikal & Elektrikal",
  "PLB": "Pekerjaan Plumbing",
  "LSC": "Pekerjaan Landscape",
  "JLN": "Pekerjaan Jalan dan Jembatan",
  "PGR": "Pekerjaan Pagar",
  "DRN": "Pekerjaan Drainase",
  "ASP": "Pekerjaan Pengaspalan",
  "MRK": "Pekerjaan Marka Jalan",
  "RBL": "Pekerjaan Rambu Lalu Lintas",
  "STB": "Pekerjaan Struktur Baja",
  "PRC": "Pekerjaan Precast",
  "RNV": "Pekerjaan Renovasi",
  "MBL": "Pekerjaan Mebeulair",
  "GEN": "Lainnya"
};

// ⚠️ "Pekerjaan Drainase" DIPINDAH KE NEW_CATEGORIES agar AHS barunya tampil di aplikasi
const OLD_CATEGORIES = [
  "Pekerjaan Persiapan",
  "Pekerjaan Tanah",
  "Pekerjaan Pondasi",
  "Pekerjaan Beton",
  "Pekerjaan Atap",
  "Pekerjaan Finishing/Arsitektur",
  "Pekerjaan Mekanikal & Elektrikal",
  "Pekerjaan Plumbing",
  "Pekerjaan Landscape",
  "Pekerjaan Mebeulair"
];

const NEW_CATEGORIES = [
  "Pekerjaan Jalan dan Jembatan",
  "Pekerjaan Pagar",
  "Pekerjaan Pengaspalan",
  "Pekerjaan Marka Jalan",
  "Pekerjaan Rambu Lalu Lintas",
  "Pekerjaan Struktur Baja",
  "Pekerjaan Precast",
  "Pekerjaan Renovasi",
  "Pekerjaan Drainase"   // ← DIPINDAH KE SINI
];

function isNewCategory(category) {
  return NEW_CATEGORIES.includes(category) || !OLD_CATEGORIES.includes(category);
}

function getCategoryAbbreviation(category) {
  return CATEGORY_ABBR_MAP[category] || "GEN";
}

function getCategoryFromAbbreviation(abbr) {
  return ABBR_CATEGORY_MAP[abbr] || "Lainnya";
}

function generateNewCode(category, version) {
  const abbr = getCategoryAbbreviation(category);
  const serial = String(version || 1).padStart(3, '0');
  return `NEWAHS${abbr}N${serial}`;
}

function getCategoryFromCode(code) {
  const match = code.match(/^NEWAHS([A-Z]{3})N(\d+)$/);
  if (match) {
    return getCategoryFromAbbreviation(match[1]);
  }
  return null;
}

function getPaymentDetails(category) {
  if (isNewCategory(category)) {
    return {
      page: 'qris-newcat.html',
      price: 150000,
      type: 'NEWCAT'
    };
  } else {
    return {
      page: 'qris-addon.html',
      price: 20000,
      type: 'SELECTED'
    };
  }
}

function getAllCategories() {
  const categories = new Set();
  OLD_CATEGORIES.forEach(cat => categories.add(cat));
  NEW_CATEGORIES.forEach(cat => categories.add(cat));
  if (typeof ahsDatabase !== 'undefined' && Array.isArray(ahsDatabase)) {
    ahsDatabase.forEach(item => {
      if (item.category) categories.add(item.category);
    });
  }
  return Array.from(categories);
}

// ============================================================
// SINKRONISASI KE FIREBASE (OPSIONAL)
// ============================================================
function syncMasterDataToFirebase() {
  if (typeof firebase === 'undefined' || typeof database === 'undefined') return;
  
  const updates = {};
  updates['masterData/bahan'] = masterBahan;
  updates['masterData/alat'] = masterAlat;
  updates['masterData/upah'] = masterUpah;
  
  database.ref().update(updates)
    .then(() => console.log('✅ Data master berhasil disinkronkan ke Firebase.'))
    .catch(err => console.error('❌ Gagal sinkron ke Firebase:', err));
}

document.addEventListener('DOMContentLoaded', function() {
  loadMasterData();
  syncMasterDataToFirebase();
});
