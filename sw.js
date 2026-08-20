const CACHE_NAME = 'sicermat-v2.2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './js/master-data.js',
  './manifest.json',
  './icon-192.png',
  './icon.png',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
  'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js'
];

// Install Event - Caching Aset Utama
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Membuka Cache & Menyiapkan File SiCerMat v2.2');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Hapus Cache Lama Otomatis
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[SW] Menghapus Cache Lama:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Stale-While-Revalidate Strategy (Mengutamakan Jaringan untuk Perubahan Kode)
self.addEventListener('fetch', (event) => {
  // Hiraukan request non-GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Jika berhasil ambil dari jaringan, perbarui isi cache
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Jika offline, fallback ke cache yang tersimpan
        return caches.match(event.request);
      })
  );
});

