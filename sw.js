const CACHE_NAME = 'sicermat-cache-v7';
const urlsToCache = [
  './',
  './index.html',
  './admin.html',          // Opsional (tidak diakses user biasa)
  './qris-payment.html',
  './qris-addon.html',
  './qris-newcat.html',
  './addon-notification.js',  // File baru
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
        console.log('Cache SiCerMat v7 dibuka');
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

// Fetch: strategi cache first, tetapi untuk file yang sering berubah gunakan network first
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // File yang selalu harus update (jangan di-cache)
  if (url.pathname.endsWith('master-data.js') || url.pathname.endsWith('ahs-version.json')) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request);
      })
    );
    return;
  }

  // Untuk semua request lain: cache first, fallback ke network
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
