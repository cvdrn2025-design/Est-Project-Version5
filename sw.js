/* ==========================================================================
   SERVICE WORKER SICERMAT (PWA)
   ========================================================================== */

const CACHE_NAME = 'sicermat-v2'; // Naikkan versi cache agar browser memperbarui file lama
const urlsToCache = [
  './',
  './index.html',
  './master-data.js'
  // Tambahkan file CSS, JS tambahan, atau ikon di sini jika ada (contoh: './style.css')
];

// 1. Event Install: Menyimpan aset ke dalam cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker: Menyimpan aset cache baru...');
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// 2. Event Activate: Menghapus cache versi lama yang sudah tidak relevan
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Menghapus cache lama:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. Event Fetch: Mengambil data dari cache, fallback ke jaringan internet
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Jika ditemukan di cache, kembalikan; jika tidak, ambil dari network
      return response || fetch(event.request);
    }).catch(() => {
      // Opsi fallback offline opsional (misal halaman offline.html)
    })
  );
});

