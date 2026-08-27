const CACHE_NAME = 'sicermat-cache-v14'; // Ganti versi agar cache lama terhapus
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
        console.log('Cache SiCerMat v14 dibuka');
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
