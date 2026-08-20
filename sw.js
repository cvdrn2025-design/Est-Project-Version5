/* ==========================================================================
   SERVICE WORKER SICERMAT (sw.js) - DENGAN DYNAMIC UPDATE MASTER DATA
   ========================================================================== */

const CACHE_NAME = 'sicermat-cache-v3';
const urlsToCache = [
  './',
  './index.html'
  // master-data.js sengaja dipisah dari precache statis agar bisa selalu dinamis
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

// 3. Strategi Fetch dengan Network First untuk master-data.js
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // KHUSUS MASTER-DATA: Gunakan strategi Network First
  if (url.pathname.endsWith('master-data.js')) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          // Jika internet ada, ambil yang terbaru dan perbarui cache secara diam-diam
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          // Jika offline, fallback gunakan data dari cache
          return caches.match(event.request);
        })
    );
    return;
  }

  // STRATEGI UNTUK ASET LAINNYA (Cache First, fallback to Network)
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          (networkResponse) => {
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
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

