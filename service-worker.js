self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("choxypop-app").then(cache => {
      return cache.addAll([
        "/app.html",
        "/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
