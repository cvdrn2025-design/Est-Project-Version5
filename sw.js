const CACHE_NAME = 'sicermat-v1.4'; // Versi dinaikkan ke v1.4
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  './icon-192.png'
];

// Install Service Worker & Cache Aset Statis
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activate & Hapus Cache Versi Lama Otomatis
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Strategi Pengambilan Data (Fetch)
self.addEventListener('fetch', (e) => {
  const requestUrl = new URL(e.request.url);

  // NETWORK-FIRST KHUSUS LIBRARY AHS (master-data.js)
  if (requestUrl.pathname.includes('master-data.js')) {
    e.respondWith(
      fetch(e.request)
        .then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // CACHE-FIRST UNTUK TAMPILAN & ASET STATIS LAINNYA
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});

