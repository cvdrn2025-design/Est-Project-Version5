/* ==========================================================================
   SERVICE WORKER SICERMAT (sw.js)
   ========================================================================== */

const CACHE_NAME = 'sicermat-cache-v2';
const urlsToCache = [
  './',
  './index.html',
  './master-data.js'
  // Tambahkan file aset lain jika ada (misal: icon, file CSS eksternal, dll)
];

// 1. Install Service Worker & Cache Aset Utama
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache SICERMAT berhasil dibuka');
        return cache.addAll(urlsToCache);
      })
  );
  // Langsung aktifkan service worker tanpa menunggu tab lama ditutup
  self.skipWaiting();
});

// 2. Aktifkan dan Bersihkan Cache Versi Lama
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Menghapus cache lama:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. Strategi Fetch: Cache First, fallback to Network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Kembalikan dari cache jika ada
        if (response) {
          return response;
        }
        
        // Jika tidak ada di cache, ambil dari network
        return fetch(event.request).then(
          (networkResponse) => {
            // Validasi respons
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            // Clone respons untuk disimpan ke cache dinamis
            const responseToCache = networkResponse.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return networkResponse;
          }
        );
      })
  );
});

