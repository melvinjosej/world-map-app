const CACHE_NAME = 'world-map-v2';
const ASSETS = [
  'index.html',
  'style.css',
  'app.js',
  'data.js',
  'world_map_data.js',
  'manifest.json',
  'images/icon-192.png',
  'images/icon-512.png',
  'images/continents/africa.png',
  'images/continents/asia.png',
  'images/continents/europe.png',
  'images/continents/northAmerica.png',
  'images/continents/southAmerica.png',
  'images/continents/oceania.png',
  'images/continents/antarctica.png',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchPromise = fetch(event.request).then(response => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);

      return cached || fetchPromise;
    })
  );
});
