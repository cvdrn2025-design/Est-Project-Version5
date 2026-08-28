// ============================================================
// SISTEM NOTIFIKASI ADD-ON AHS (FIREBASE INTEGRATION) - V2
// ============================================================

// 1. Mapping kategori ke singkatan
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

const ABBR_CATEGORY_MAP = {
  "PRP": "Pekerjaan Persiapan",
  "TNH": "Pekerjaan Tanah",
  "PND": "Pekerjaan Pondasi",
  "BTN": "Pekerjaan Beton",
  "ATP": "Pekerjaan Atap",
  "FIN": "Pekerjaan Finishing/Arsitektur",
  "MEK": "Pekerjaan Mekanikal & Elektrikal",
  "PLB": "Pekerjaan Plumbing",
  "JLN": "Pekerjaan Jalan dan Jembatan",
  "GEN": "Lainnya"
};

// Kategori lama (bukan kategori baru)
const OLD_CATEGORIES = [
  "Pekerjaan Persiapan",
  "Pekerjaan Tanah",
  "Pekerjaan Pondasi",
  "Pekerjaan Beton",
  "Pekerjaan Atap",
  "Pekerjaan Finishing/Arsitektur",
  "Pekerjaan Mekanikal & Elektrikal",
  "Pekerjaan Plumbing"
];

// ============================================================
// FUNGSI UTILITAS
// ============================================================

function getCategoryAbbreviation(category) {
  return CATEGORY_ABBR_MAP[category] || "GEN";
}

function getCategoryFromAbbreviation(abbr) {
  return ABBR_CATEGORY_MAP[abbr] || "Lainnya";
}

function isNewCategory(category) {
  return !OLD_CATEGORIES.includes(category);
}

// Generate kode unik: NEWAHS + Singkatan + N + Nomor Seri
function generateNewCode(category, version) {
  const abbr = getCategoryAbbreviation(category);
  const serial = String(version || 1).padStart(3, '0');
  return `NEWAHS${abbr}N${serial}`;
}

// Parse kode unik untuk mendapatkan kategori
function getCategoryFromCode(code) {
  // Cek format NEWAHS[ABBR]N[VERSION]
  const match = code.match(/^NEWAHS([A-Z]{3})N(\d+)$/);
  if (match) {
    return getCategoryFromAbbreviation(match[1]);
  }
  return null;
}

// Tentukan halaman pembayaran dan harga berdasarkan kategori
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

// Ambil user ID
function getCurrentUserId() {
  let userId = localStorage.getItem('sicermat_user_id');
  if (!userId) {
    userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('sicermat_user_id', userId);
  }
  return userId;
}

// ============================================================
// FUNGSI CEK AKSES
// ============================================================

// Cek akses Premium
function checkPremiumAccess(callback) {
  const userId = getCurrentUserId();
  const premiumRef = database.ref('usersPremium/' + userId + '/activated');
  premiumRef.once('value')
    .then(snapshot => callback(snapshot.val() === true))
    .catch(err => { console.error('Error checking premium:', err); callback(false); });
}

// Cek akses Add-on per kategori
function checkAddonAccess(category, callback) {
  const userId = getCurrentUserId();
  const addonRef = database.ref('usersPremium/' + userId + '/addon/' + category);
  addonRef.once('value')
    .then(snapshot => callback(snapshot.val() === true))
    .catch(err => { console.error('Error checking addon:', err); callback(false); });
}

// Cek akses New Category per kategori
function checkNewCategoryAccess(category, callback) {
  const userId = getCurrentUserId();
  const newCatRef = database.ref('usersPremium/' + userId + '/addon-newcat/' + category);
  newCatRef.once('value')
    .then(snapshot => callback(snapshot.val() === true))
    .catch(err => { console.error('Error checking newcat:', err); callback(false); });
}

// Cek SEMUA akses addon user (untuk AHS lama)
function checkAnyAddonAccess(callback) {
  const userId = getCurrentUserId();
  
  Promise.all([
    database.ref('usersPremium/' + userId + '/addon').once('value'),
    database.ref('usersPremium/' + userId + '/addon-newcat').once('value')
  ]).then(([addonSnap, newCatSnap]) => {
    const addons = addonSnap.val() || {};
    const newCats = newCatSnap.val() || {};
    
    const hasAnyAddon = Object.keys(addons).length > 0;
    const hasAnyNewCat = Object.keys(newCats).length > 0;
    
    callback(hasAnyAddon || hasAnyNewCat);
  }).catch(err => {
    console.error('Error checking all addons:', err);
    callback(false);
  });
}

// ============================================================
// FUNGSI POP-UP ADD-ON (DIPERBAIKI)
// ============================================================

function showAddOnPopup(category) {
  if (!category) {
    alert('Kategori tidak valid!');
    return;
  }

  // Cek akses user
  checkAddonAccess(category, (hasAddon) => {
    checkNewCategoryAccess(category, (hasNewCat) => {
      checkPremiumAccess((hasPremium) => {
        
        // Jika sudah punya akses kategori ini
        if (hasAddon || hasNewCat) {
          alert('✅ Anda sudah memiliki akses ke kategori ini!');
          return;
        }

        // Ambil semua AHS baru di kategori ini
        const newItems = typeof ahsDatabase !== 'undefined' 
          ? ahsDatabase.filter(item => item.category === category && item.isNew === true)
          : [];
        
        if (newItems.length === 0) {
          alert('Tidak ada AHS baru di kategori ini.');
          return;
        }

        // Ambil versi terbaru & buat kode unik yang BENAR
        const latestVersion = Math.max(...newItems.map(item => item.version || 1));
        const code = generateNewCode(category, latestVersion);
        
        // Dapatkan halaman & harga berdasarkan kategori
        const paymentInfo = getPaymentDetails(category);

        // Bangun HTML isi pop-up
        let itemListHTML = '';
        newItems.forEach(item => {
          itemListHTML += `<div class="d-flex justify-content-between border-bottom py-2">
            <span>• ${item.title || item.nama}</span>
            <span class="text-muted small">${item.unit || item.satuan || ''}</span>
          </div>`;
        });

        // Cek apakah user sudah premium (bisa akses AHS lama tapi tidak AHS baru)
        const premiumNote = hasPremium 
          ? '<div class="alert alert-info mt-3 mb-3" style="font-size: 0.85rem;">💡 Anda sudah Premium, tapi AHS Baru memerlukan Add-on tambahan.</div>'
          : '';

        const modalContent = `
          <div style="text-align: center;">
            <h4 class="fw-bold">🚀 Add-on AHS Baru!</h4>
            <p class="text-muted">Kategori: ${category}</p>
            
            ${premiumNote}
            
            <div style="background: #f1f5f9; border-radius: 12px; padding: 16px; margin: 20px 0;">
              <strong style="font-size: 1.2rem; color: #0f172a; font-family: monospace;">${code}</strong>
              <p class="mb-0 mt-2" style="font-size: 0.9rem;">
                Harga: <strong style="color: #198754;">Rp ${paymentInfo.price.toLocaleString('id-ID')}</strong>
              </p>
            </div>
            
            <div style="text-align: left; margin-bottom: 20px;">
              <strong>Daftar AHS baru:</strong>
              ${itemListHTML}
            </div>
            
            <button class="btn btn-success w-100 py-2" onclick="window.open('${paymentInfo.page}?addon=' + encodeURIComponent('${code}') + '&category=' + encodeURIComponent('${category}'), '_blank')">
              💳 Top Up untuk Akses (${code})
            </button>
            
            <button class="btn btn-outline-secondary w-100 py-2 mt-2" onclick="closeAddOnModal()">
              ✖️ Batal
            </button>
          </div>
        `;

        // Tampilkan pop-up
        const addOnModal = new bootstrap.Modal(document.getElementById('addOnModal'));
        document.getElementById('addOnModalBody').innerHTML = modalContent;
        addOnModal.show();
      });
    });
  });
}

// Fungsi untuk menutup modal
function closeAddOnModal() {
  const modal = bootstrap.Modal.getInstance(document.getElementById('addOnModal'));
  if (modal) modal.hide();
}

// ============================================================
// FUNGSI REDIRECT KE HALAMAN PEMBAYARAN
// ============================================================

function redirectToPayment(category) {
  const paymentInfo = getPaymentDetails(category);
  const latestVersion = typeof ahsDatabase !== 'undefined'
    ? Math.max(...ahsDatabase.filter(i => i.category === category && i.isNew === true).map(i => i.version || 1))
    : 1;
  
  const code = generateNewCode(category, latestVersion);
  
  window.location.href = paymentInfo.page + 
    '?addon=' + encodeURIComponent(code) + 
    '&category=' + encodeURIComponent(category);
}

// ============================================================
// FUNGSI CEK STATUS AKTIVASI (UNTUK UI)
// ============================================================

function getAddonStatus(callback) {
  const userId = getCurrentUserId();
  
  Promise.all([
    database.ref('usersPremium/' + userId + '/activated').once('value'),
    database.ref('usersPremium/' + userId + '/addon').once('value'),
    database.ref('usersPremium/' + userId + '/addon-newcat').once('value')
  ]).then(([premiumSnap, addonSnap, newCatSnap]) => {
    callback({
      premium: premiumSnap.val() === true,
      addons: addonSnap.val() || {},
      newCats: newCatSnap.val() || {}
    });
  }).catch(err => {
    console.error('Error getting status:', err);
    callback({ premium: false, addons: {}, newCats: {} });
  });
}

// ============================================================
// INISIALISASI MODAL
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
  // Cek apakah modal sudah ada
  if (!document.getElementById('addOnModal')) {
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

  // Inisialisasi Bootstrap Modal jika belum ada
  if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
    // Modal sudah siap digunakan
  }
});

// ============================================================
// EKSPOR FUNGSI UNTUK DIGUNAKAN DI FILE LAIN
// ============================================================

// Pastikan fungsi-fungsi ini tersedia secara global
window.generateNewCode = generateNewCode;
window.getCategoryFromCode = getCategoryFromCode;
window.getPaymentDetails = getPaymentDetails;
window.showAddOnPopup = showAddOnPopup;
window.redirectToPayment = redirectToPayment;
window.isNewCategory = isNewCategory;
window.getCategoryAbbreviation = getCategoryAbbreviation;
window.getCategoryFromAbbreviation = getCategoryFromAbbreviation;
window.checkAddonAccess = checkAddonAccess;
window.checkNewCategoryAccess = checkNewCategoryAccess;
window.checkPremiumAccess = checkPremiumAccess;
window.checkAnyAddonAccess = checkAnyAddonAccess;
window.getAddonStatus = getAddonStatus;
