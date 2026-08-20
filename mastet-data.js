/* ==========================================================================
   MASTER DATA SICERMAT (HARGA DASAR & ANALISA HARGA SATUAN PEKERJAAN)
   ========================================================================== */

// 1. DATA HARGA DASAR KOMPONEN (BAHAN, ALAT, UPAH)
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
  { nama: "Pipa PVC 3/4\" Type AW", harga: 35000, satuan: "btg" }
];

let masterAlat = [
  { nama: "Molen / Concrete Mixer 0.35m3", harga: 150000, satuan: "hari" },
  { nama: "Stamper Kuda / Plate Compactor", harga: 200000, satuan: "hari" },
  { nama: "Concrete Vibrator", harga: 120000, satuan: "hari" },
  { nama: "Sewa Scaffolding (1 Set / Bulan)", harga: 35000, satuan: "set" },
  { nama: "Alat Bantu Kerja & Pertukangan", harga: 25000, satuan: "ls" }
];

let masterUpah = [
  { nama: "Pekerja / Kuli", harga: 110000, satuan: "OH" },
  { nama: "Tukang Batu / Kayu / Besi / Cat", harga: 140000, satuan: "OH" },
  { nama: "Kepala Tukang", harga: 160000, satuan: "OH" },
  { nama: "Mandor Proyek", harga: 180000, satuan: "OH" }
];

// 2. DATABASE ANALISA HARGA SATUAN PEKERJAAN (AHSP)
const ahsDatabase = [
  // ==================== PEKERJAAN PERSIAPAN ====================
  // LAMA
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
  // BARU (sesuai permintaan)
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
  // LAMA
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
  // BARU
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
  // LAMA
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
  // BARU - TIANG PANCANG
  {
    code: "AHS-PND-02",
    category: "Pekerjaan Pondasi",
    title: "Pondasi Tiang Pancang Mini Pile ∆ 20",
    unit: "m'",
    details: [
      { name: "Tiang Pancang Mini Pile ∆ 20 (sudah jadi)", coeff: 1.000, unit: "m'", price: 350000 },
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
      { name: "Tiang Pancang Mini Pile ∆ 25 (sudah jadi)", coeff: 1.000, unit: "m'", price: 450000 },
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
      { name: "Tiang Pancang Mini Pile ∆ 30 (sudah jadi)", coeff: 1.000, unit: "m'", price: 550000 },
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
      { name: "Tiang Pancang Mini Pile 20x20 (sudah jadi)", coeff: 1.000, unit: "m'", price: 380000 },
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
      { name: "Tiang Pancang Mini Pile 25x25 (sudah jadi)", coeff: 1.000, unit: "m'", price: 480000 },
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
      { name: "Tiang Pancang Mini Pile 30x30 (sudah jadi)", coeff: 1.000, unit: "m'", price: 600000 },
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
      { name: "Tiang Pancang Mini Pile 40x40 (sudah jadi)", coeff: 1.000, unit: "m'", price: 800000 },
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
      { name: "Spun Pile Dia. 50cm (ready)", coeff: 1.000, unit: "m'", price: 1200000 },
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
      { name: "Spun Pile Dia. 60cm (ready)", coeff: 1.000, unit: "m'", price: 1500000 },
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
  // LAMA
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
  // BARU - SITE MIX
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
  // K-225 sudah ada AHS-BTN-01
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
  // BARU - READY MIX
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
  // BARU - BEKISTING, PERANCAH, FLOORDECK
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

  // ==================== PEKERJAAN FINISHING ====================
  // LAMA
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
  }
];

// 3. FUNGSI PENGELOLA HARGA DASAR & AHS
function updateHargaDasar(type, index, value) {
  const val = parseFloat(value) || 0;
  let compName = '';
  if (type === 'bahan') {
    masterBahan[index].harga = val;
    compName = masterBahan[index].nama;
  } else if (type === 'alat') {
    masterAlat[index].harga = val;
    compName = masterAlat[index].nama;
  } else if (type === 'upah') {
    masterUpah[index].harga = val;
    compName = masterUpah[index].nama;
  }

  ahsDatabase.forEach(ahs => {
    if (ahs.details) {
      ahs.details.forEach(d => {
        if ((d.name || d.nama) === compName) {
          d.price = val;
        }
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

  persistMasterData();
  renderPriceTable(type);
}

// =============================================================
// PERSISTENSI DATA MASTER KE LOCALSTORAGE
// =============================================================
function persistMasterData() {
  const data = {
    bahan: masterBahan,
    alat: masterAlat,
    upah: masterUpah
  };
  localStorage.setItem('sicermat_master_data', JSON.stringify(data));
}

function loadMasterData() {
  const saved = localStorage.getItem('sicermat_master_data');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      masterBahan.splice(0, masterBahan.length, ...data.bahan);
      masterAlat.splice(0, masterAlat.length, ...data.alat);
      masterUpah.splice(0, masterUpah.length, ...data.upah);
    } catch (e) {
      console.warn('Gagal memuat master data dari localStorage, gunakan default.');
    }
  }
}

document.addEventListener('DOMContentLoaded', loadMasterData);
