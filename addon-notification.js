// ============================================================
// SISTEM NOTIFIKASI ADD-ON AHS (TERBARU)
// - Kompatibel dengan 3 tier pembayaran
// - Badge NEW dengan animasi
// - Pop-up Add-on dengan kode unik
// - Nomor seri otomatis bertambah
// ============================================================

// 1. Mapping kategori ke singkatan (untuk kode unik)
const CATEGORY_ABBR_MAP = {
  "Pekerjaan Persiapan": "PRP",
  "Pekerjaan Tanah": "TNH",
  "Pekerjaan Pondasi": "PND",
  "Pekerjaan Beton": "BTN",
  "Pekerjaan Atap": "ATP",
  "Pekerjaan Finishing/Arsitektur": "FIN",
  "Pekerjaan Mekanikal & Elektrikal": "MEK",
  "Pekerjaan Plumbing": "PLB",
  "Pekerjaan Jalan dan Jembatan": "JLN",
  "Lainnya": "GEN"
};

// 2. Ambil singkatan kategori
function getCategoryAbbreviation(category) {
  return CATEGORY_ABBR_MAP[category] || "GEN";
}

// 3. Generate kode unik: NEW + AHS + Singkatan + N + nomor seri
function generateNewCode(category, version) {
  const abbr = getCategoryAbbreviation(category);
  const serial = String(version).padStart(3, '0');
  return `NEWAHS${abbr}N${serial}`;
}

// 4. Cek apakah user sudah melihat AHS baru (dari localStorage)
function hasSeenNewAHS(ahsCode) {
  const seen = JSON.parse(localStorage.getItem('sicermat_seen_new_ahs') || '[]');
  return seen.includes(ahsCode);
}

// 5. Tandai AHS baru sudah dilihat
function markAHSAsSeen(ahsCode) {
  const seen = JSON.parse(localStorage.getItem('sicermat_seen_new_ahs') || '[]');
  if (!seen.includes(ahsCode)) {
    seen.push(ahsCode);
    localStorage.setItem('sicermat_seen_new_ahs', JSON.stringify(seen));
  }
}

// 6. Kumpulkan item AHS baru yang belum dilihat
function getUnseenNewAHS() {
  if (typeof ahsDatabase === 'undefined' || !Array.isArray(ahsDatabase)) return [];
  
  return ahsDatabase.filter(item => {
    return item.isNew === true && !hasSeenNewAHS(item.code);
  });
}

// 7. Hitung jumlah AHS baru per kategori
function getNewCountByCategory(category) {
  if (typeof ahsDatabase === 'undefined' || !Array.isArray(ahsDatabase)) return 0;
  return ahsDatabase.filter(item => item.category === category && item.isNew === true).length;
}

// 8. Tentukan halaman pembayaran berdasarkan tipe add-on
function getPaymentPage(category) {
  // Jika kategori sudah ada di daftar kategori lama (bukan kategori baru)
  const existingCategories = [
    "Pekerjaan Persiapan",
    "Pekerjaan Tanah",
    "Pekerjaan Pondasi",
    "Pekerjaan Beton",
    "Pekerjaan Atap",
    "Pekerjaan Finishing/Arsitektur",
    "Pekerjaan Mekanikal & Elektrikal",
    "Pekerjaan Plumbing"
  ];

  if (existingCategories.includes(category)) {
    return 'qris-addon.html'; // Add-on per kategori (Rp 20.000)
  } else {
    return 'qris-newcat.html'; // Kategori baru + AHS baru (Rp 150.000)
  }
}

// 9. Render kategori dengan badge "NEW"
function renderLockedCategoriesWithNew() {
  const tbody = document.getElementById('ahsTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const categories = {};
  ahsDatabase.forEach(item => {
    const cat = item.category || 'Lainnya';
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(item);
  });

  Object.keys(categories).forEach(cat => {
    const count = categories[cat].length;
    const hasNew = categories[cat].some(item => item.isNew === true);
    const newCount = categories[cat].filter(item => item.isNew === true).length;

    const tr = document.createElement('tr');
    tr.className = 'locked-category-row';
    tr.innerHTML = `
      <td colspan="3" class="p-0">
        <div class="d-flex justify-content-between align-items-center p-3 border-bottom">
          <span class="fw-bold fs-5">
            (${count}) ${cat} 
            ${hasNew ? `<span class="badge-new" onclick="showAddOnPopup('${cat}')">NEW</span>` : ''}
            <span class="category-lock-icon" onclick="showTopUpModal()">🔒</span>
          </span>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  if (Object.keys(categories).length === 0) {
    tbody.innerHTML = '<tr><td colspan="3" class="text-center py-3 text-muted">Tidak ada data AHS.</td></tr>';
  }
}

// 10. Fungsi pop-up Add-on AHS
function showAddOnPopup(category) {
  // Ambil semua AHS baru di kategori ini
  const newItems = ahsDatabase.filter(item => item.category === category && item.isNew === true);
  
  if (newItems.length === 0) return;

  // Ambil versi terbaru (untuk nomor seri)
  const latestVersion = Math.max(...newItems.map(item => item.version || 1));
  const code = generateNewCode(category, latestVersion);
  const paymentPage = getPaymentPage(category);

  // Bangun HTML isi pop-up
  let itemListHTML = '';
  newItems.forEach(item => {
    itemListHTML += `<div class="d-flex justify-content-between border-bottom py-2">
      <span>• ${item.title}</span>
      <span class="text-muted small">${item.unit}</span>
    </div>`;
  });

  const modalContent = `
    <div style="text-align: center;">
      <h4 class="fw-bold">🚀 Add-on AHS Baru!</h4>
      <p class="text-muted">Kategori: ${category}</p>
      
      <div style="background: #f1f5f9; border-radius: 12px; padding: 16px; margin: 20px 0;">
        <strong style="font-size: 1.2rem; color: #0f172a; font-family: monospace;">${code}</strong>
        <p class="mb-0 mt-2" style="font-size: 0.9rem;">
          Total ${newItems.length} item AHS baru
        </p>
      </div>
      
      <div style="text-align: left; margin-bottom: 20px;">
        <strong>Daftar AHS baru:</strong>
        ${itemListHTML}
      </div>
      
      <button class="btn btn-success w-100 py-2" onclick="window.location.href='${paymentPage}?addon=' + encodeURIComponent('${code}')">
        💳 Top Up untuk Akses
      </button>
    </div>
  `;

  // Tampilkan pop-up menggunakan modal yang sudah ada
  const addOnModal = new bootstrap.Modal(document.getElementById('addOnModal'));
  document.getElementById('addOnModalBody').innerHTML = modalContent;
  addOnModal.show();

  // Tandai sudah dilihat (agar badge hilang setelah pop-up ditutup)
  newItems.forEach(item => {
    markAHSAsSeen(item.code);
  });

  // Re-render kategori setelah ditandai
  setTimeout(() => {
    if (document.getElementById('ahsModal').classList.contains('show')) {
      renderLockedCategoriesWithNew();
    }
  }, 500);
}

// 11. Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  // Cek apakah modal addOnModal sudah ada di HTML
  if (!document.getElementById('addOnModal')) {
    // Jika belum ada, buat modal secara otomatis
    const modalHTML = `
      <div class="modal fade" id="addOnModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content" style="border-radius: 20px; border: none; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
            <div class="modal-header border-0 pb-0">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="addOnModalBody"></div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }
});
