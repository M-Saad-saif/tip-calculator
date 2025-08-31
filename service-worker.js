let CACHE_NAME = "tip calculator-cache-v1";
let urlsToCache = [
  "./",
  "./index.html",
  "./tip cal.css",
  "./tip cal.js",
  "./tip calculator  icon.ico",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
