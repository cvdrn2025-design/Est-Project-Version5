// ============================================================
// SISTEM NOTIFIKASI ADD-ON AHS (FIREBASE INTEGRATION)
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

function getCategoryAbbreviation(category) {
  return CATEGORY_ABBR_MAP[category] || "GEN";
}

// 2. Generate kode unik: NEWAHS + Singkatan + N + Nomor Seri
function generateNewCode(category, version) {
  const abbr = getCategoryAbbreviation(category);
  const serial = String(version || 1).padStart(3, '0');
  return `NEWAHS${abbr}N${serial}`;
}

// 3. Tentukan halaman pembayaran dan harga berdasarkan kategori
function getPaymentDetails(category) {
  const isNewCategory = ![
    "Pekerjaan Persiapan",
    "Pekerjaan Tanah",
    "Pekerjaan Pondasi",
    "Pekerjaan Beton",
    "Pekerjaan Atap",
    "Pekerjaan Finishing/Arsitektur",
    "Pekerjaan Mekanikal & Elektrikal",
    "Pekerjaan Plumbing"
  ].includes(category);

  if (isNewCategory) {
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

// 4. Ambil user ID
function getCurrentUserId() {
  let userId = localStorage.getItem('sicermat_user_id');
  if (!userId) {
    userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('sicermat_user_id', userId);
  }
  return userId;
}

// 5. Cek akses (Premium, Add-on, New Category)
function checkAddonAccess(category, callback) {
  const userId = getCurrentUserId();
  const addonRef = database.ref('usersPremium/' + userId + '/addon/' + category);
  addonRef.once('value').then(snapshot => callback(snapshot.val() === true))
    .catch(err => { console.error(err); callback(false); });
}

function checkNewCategoryAccess(category, callback) {
  const userId = getCurrentUserId();
  const newCatRef = database.ref('usersPremium/' + userId + '/addon-newcat/' + category);
  newCatRef.once('value').then(snapshot => callback(snapshot.val() === true))
    .catch(err => { console.error(err); callback(false); });
}

// 6. Fungsi Pop-up Add-on (DIPERBAIKI)
function showAddOnPopup(category) {
  // Cek akses user
  checkAddonAccess(category, (hasAddon) => {
    checkNewCategoryAccess(category, (hasNewCat) => {
      
      if (hasAddon || hasNewCat) {
        alert('Anda sudah memiliki akses ke kategori ini!');
        return;
      }

      // Ambil semua AHS baru di kategori ini
      const newItems = ahsDatabase.filter(item => item.category === category && item.isNew === true);
      if (newItems.length === 0) return;

      // Ambil versi terbaru & buat kode unik yang BENAR
      const latestVersion = Math.max(...newItems.map(item => item.version || 1));
      const code = generateNewCode(category, latestVersion);
      
      // Dapatkan halaman & harga berdasarkan kategori
      const paymentInfo = getPaymentDetails(category);

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
              Harga: <strong style="color: #198754;">Rp ${paymentInfo.price.toLocaleString('id-ID')}</strong>
            </p>
          </div>
          
          <div style="text-align: left; margin-bottom: 20px;">
            <strong>Daftar AHS baru:</strong>
            ${itemListHTML}
          </div>
          
          <button class="btn btn-success w-100 py-2" onclick="window.open('${paymentInfo.page}?addon=' + encodeURIComponent('${code}'), '_blank')">
            💳 Top Up untuk Akses (${code})
          </button>
        </div>
      `;

      // Tampilkan pop-up
      const addOnModal = new bootstrap.Modal(document.getElementById('addOnModal'));
      document.getElementById('addOnModalBody').innerHTML = modalContent;
      addOnModal.show();
    });
  });
}

// 7. Inisialisasi modal
document.addEventListener('DOMContentLoaded', function() {
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
});
