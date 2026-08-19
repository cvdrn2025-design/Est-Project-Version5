const CACHE_NAME = 'sicermat-v1';
const ASSETS = [
  './',
  './index.html',
  './js/master-data.js',
  './manifest.json',
  './icon.png',
  './icon-192.png',
  './icon-512.png',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
];

// Event: Install Service Worker & Cache Aset Utama
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Event: Activate Service Worker & Bersihkan Cache Lama
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Event: Fetch Strategy (Stale-While-Revalidate)
// Mengambil data dari cache agar cepat saat offline, lalu memperbarui cache di background saat online
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      const fetchPromise = fetch(e.request).then((networkResponse) => {
        // Update cache dengan respon terbaru dari jaringan
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, networkResponse.clone());
          });
        }
        return networkResponse;
      }).catch(() => {
        // Jika offline dan tidak ada di cache, biarkan gagal dengan elegan
      });

      return cachedResponse || fetchPromise;
    })
  );
});

