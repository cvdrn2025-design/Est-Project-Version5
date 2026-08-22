// ============================================================
// SISTEM NOTIFIKASI ADD-ON AHS (FIREBASE INTEGRATION)
// - Kompatibel dengan 3 tier pembayaran
// - Badge NEW dengan animasi
// - Pop-up Add-on dengan kode unik
// - Cek akses ke Firebase Realtime Database
// - Kode unik terbawa ke halaman pembayaran
// - User Premium tetap bisa membeli Add-on untuk AHS baru
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

// 6. Ambil user ID dari localStorage
function getCurrentUserId() {
  let userId = localStorage.getItem('sicermat_user_id');
  if (!userId) {
    userId = generateUserId();
    localStorage.setItem('sicermat_user_id', userId);
  }
  return userId;
}

// 7. Generate user ID baru
function generateUserId() {
  return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// 8. Cek akses premium user di Firebase
function checkUserPremiumAccess(callback) {
  const userId = getCurrentUserId();
  const premiumRef = database.ref('usersPremium/' + userId + '/activated');
  
  premiumRef.once('value').then(snapshot => {
    callback(snapshot.val() === true);
  }).catch(err => {
    console.error('Gagal cek premium:', err);
    callback(false);
  });
}

// 9. Cek akses add-on per kategori di Firebase
function checkAddonAccess(category, callback) {
  const userId = getCurrentUserId();
  const addonRef = database.ref('usersPremium/' + userId + '/addon/' + category);
  
  addonRef.once('value').then(snapshot => {
    callback(snapshot.val() === true);
  }).catch(err => {
    console.error('Gagal cek add-on:', err);
    callback(false);
  });
}

// 10. Cek akses kategori baru di Firebase
function checkNewCategoryAccess(category, callback) {
  const userId = getCurrentUserId();
  const newCatRef = database.ref('usersPremium/' + userId + '/addon-newcat/' + category);
  
  newCatRef.once('value').then(snapshot => {
    callback(snapshot.val() === true);
  }).catch(err => {
    console.error('Gagal cek kategori baru:', err);
    callback(false);
  });
}

// 11. Tentukan halaman pembayaran berdasarkan tipe add-on
function getPaymentPage(category) {
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

// 12. Render kategori dengan badge "NEW" dan AHS lengkap untuk user premium
function renderLockedCategoriesWithNew() {
  // Sembunyikan header tabel saat mode kategori terkunci
  const thead = document.getElementById('ahsTableHead');
  if (thead) thead.style.display = 'none';

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

    // Cek akses user ke kategori ini
    checkUserPremiumAccess((isPremium) => {
      if (isPremium) {
        // ============ USER PREMIUM: TAMPILKAN AHS LAMA SAJA ============
        // AHS baru (isNew) TIDAK ditampilkan, tapi badge NEW tetap muncul
        const oldItems = categories[cat].filter(item => !item.isNew);
        oldItems.forEach((item, index) => {
          let unitPrice = 0;
          if (item.details && item.details.length > 0) {
            unitPrice = item.details.reduce((sum, d) => sum + ((d.coeff || 0) * (d.price || 0)), 0);
          } else {
            unitPrice = item.totalPrice || item.harga || 0;
          }

          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td><span class="badge bg-dark mb-1">${item.code || item.kode}</span><div class="small fw-semibold text-secondary">${cat}</div></td>
            <td><div class="fw-bold text-dark mb-1">${item.title || item.nama}</div><div class="mt-2 bg-light p-2 rounded">${item.details ? item.details.map(d => `<div class="small text-muted">• ${d.name || d.nama} (${d.coeff} ${d.unit})</div>`).join('') : ''}</div></td>
            <td class="text-center align-middle">
              <div class="fw-bold text-primary mb-2">Rp ${formatNumber(unitPrice, 2)} / ${item.unit || item.satuan || 'm2'}</div>
              <button class="btn btn-sm btn-mono-primary w-100" onclick="selectAHSItem(${index}, this)">
                ➕ Tambahkan
              </button>
            </td>
          `;
          tbody.appendChild(tr);
        });

        // Jika ada AHS baru, tampilkan kategori dengan badge NEW
        if (hasNew) {
          const tr = document.createElement('tr');
          tr.className = 'locked-category-row';
          tr.innerHTML = `
            <td colspan="3" class="p-0">
              <div class="d-flex justify-content-between align-items-center p-3 border-bottom">
                <span class="fw-bold fs-5">(${count}) ${cat} 
                  ${hasNew ? `<span class="badge-new" onclick="showAddOnPopup('${cat}')">NEW</span>` : ''}
                  <span class="category-lock-icon" style="cursor: pointer;" onclick="showTopUpModal()">🔒</span>
                </span>
              </div>
            </td>
          `;
          tbody.appendChild(tr);
        }
        return;
      }

      // ============ USER NON-PREMIUM: TAMPILKAN KATEGORI TERKUNCI ============
      checkAddonAccess(cat, (hasAddon) => {
        checkNewCategoryAccess(cat, (hasNewCat) => {
          const hasAccess = hasAddon || hasNewCat;

          if (hasAccess) {
            // User sudah punya akses kategori ini → tampilkan SEMUA AHS (lama + baru)
            const ahsItems = categories[cat];
            ahsItems.forEach((item, index) => {
              let unitPrice = 0;
              if (item.details && item.details.length > 0) {
                unitPrice = item.details.reduce((sum, d) => sum + ((d.coeff || 0) * (d.price || 0)), 0);
              } else {
                unitPrice = item.totalPrice || item.harga || 0;
              }

              const tr = document.createElement('tr');
              tr.innerHTML = `
                <td><span class="badge bg-dark mb-1">${item.code || item.kode}</span><div class="small fw-semibold text-secondary">${cat}</div></td>
                <td><div class="fw-bold text-dark mb-1">${item.title || item.nama}</div><div class="mt-2 bg-light p-2 rounded">${item.details ? item.details.map(d => `<div class="small text-muted">• ${d.name || d.nama} (${d.coeff} ${d.unit})</div>`).join('') : ''}</div></td>
                <td class="text-center align-middle">
                  <div class="fw-bold text-primary mb-2">Rp ${formatNumber(unitPrice, 2)} / ${item.unit || item.satuan || 'm2'}</div>
                  <button class="btn btn-sm btn-mono-primary w-100" onclick="selectAHSItem(${index}, this)">
                    ➕ Tambahkan
                  </button>
                </td>
              `;
              tbody.appendChild(tr);
            });
          } else {
            // User belum punya akses → tampilkan kategori terkunci
            const tr = document.createElement('tr');
            tr.className = 'locked-category-row';
            tr.innerHTML = `
              <td colspan="3" class="p-0">
                <div class="d-flex justify-content-between align-items-center p-3 border-bottom">
                  <span class="fw-bold fs-5">(${count}) ${cat} 
                    ${hasNew ? `<span class="badge-new" onclick="showAddOnPopup('${cat}')">NEW</span>` : ''}
                    <span class="category-lock-icon" onclick="showTopUpModal()">🔒</span>
                  </span>
                </div>
              </td>
            `;
            tbody.appendChild(tr);
          }
        });
      });
    });
  });

  if (Object.keys(categories).length === 0) {
    tbody.innerHTML = '<tr><td colspan="3" class="text-center py-3 text-muted">Tidak ada data AHS.</td></tr>';
  }
}

// 13. Fungsi pop-up Add-on AHS (kode unik terbawa ke halaman pembayaran)
function showAddOnPopup(category) {
  // Cek akses add-on per kategori
  checkAddonAccess(category, (hasAddon) => {
    checkNewCategoryAccess(category, (hasNewCat) => {
      
      // Jika user sudah punya akses add-on/kategori baru → beri tahu
      if (hasAddon || hasNewCat) {
        alert('Anda sudah memiliki akses ke kategori ini!');
        return;
      }

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
          
          <button class="btn btn-success w-100 py-2" onclick="window.open('${paymentPage}?addon=' + encodeURIComponent('${code}'), '_blank')">
            💳 Top Up untuk Akses (${code})
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
    });
  });
}

// 14. Inisialisasi saat halaman dimuat
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
