const CACHE_NAME = 'sicermat-cache-v17'; // Ganti versi agar cache lama terhapus
const urlsToCache = [
  './',
  './index.html',
  './admin.html',
  './qris-payment.html',
  './qris-addon.html',
  './qris-newcat.html',
  './addon-notification.js',
  './master-data.js?v=20260912',
  './manifest.json',
  './icon.png',
  './icon-192.png',
  './qris.png',
  // CDN Eksternal
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
  'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js',
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js',
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js'
];

// Install: cache aset statis
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache SiCerMat v17 dibuka');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Aktifkan: bersihkan cache lama
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Menghapus cache lama:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Strategi NETWORK FIRST untuk semua file penting
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // JANGAN pernah cache request ke Firebase (agar data realtime selalu fresh)
  if (url.hostname.includes('firebaseio.com') || url.hostname.includes('firebasedatabase.app')) {
    return; // Biarkan browser request langsung ke Firebase tanpa intervensi cache
  }

  // JANGAN cache request ke Firebase Auth
  if (url.hostname.includes('googleapis.com')) {
    return;
  }

  // Strategi Network First:
  // 1. Coba ambil dari internet (selalu fresh)
  // 2. Jika gagal (offline), ambil dari cache
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Jika berhasil diambil dari network, simpan salinan ke cache
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // Jika gagal (offline), coba ambil dari cache
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Jika halaman navigasi dan tidak ada cache, fallback ke index.html
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});

// ============================================================
// FITUR TAMBAHAN: NOTIFIKASI & SYNC (Opsional)
// ============================================================

// Push Notification (untuk notifikasi update)
self.addEventListener('push', event => {
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    },
    actions: [
      {
        action: 'open',
        title: 'Buka Aplikasi'
      },
      {
        action: 'close',
        title: 'Tutup'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Klik Notifikasi
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'close') {
    return;
  }

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      // Jika sudah ada tab yang terbuka, fokus ke tab tersebut
      for (const client of clientList) {
        if (client.url.includes('index.html') && 'focus' in client) {
          return client.focus();
        }
      }
      // Jika belum ada, buka tab baru
      if (clients.openWindow) {
        return clients.openWindow('./index.html');
      }
    })
  );
});

// Message Handler untuk update dari aplikasi
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Background Sync (untuk pending data saat offline)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-pending-payments') {
    event.waitUntil(syncPendingPayments());
  }
});

// Fungsi sync pending payments
async function syncPendingPayments() {
  try {
    const cache = await caches.open(CACHE_NAME);
    const pendingData = await cache.match('pending-payments');
    
    if (pendingData) {
      const data = await pendingData.json();
      // Kirim data ke server
      const response = await fetch('https://sicermat-db-default-rtdb.asia-southeast1.firebasedatabase.app/pendingPayments.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        await cache.delete('pending-payments');
      }
    }
  } catch (error) {
    console.error('Gagal sync pending payments:', error);
  }
}
