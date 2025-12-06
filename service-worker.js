// service-worker.js (REEMPLAZA el actual por esto)
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

const CACHE_NAME = "choxypop-app-v1";

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        "/app.html",
        "/manifest.json",
        "/index.html",
        "/icon-192x192.png",
        "/icon-512x512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});