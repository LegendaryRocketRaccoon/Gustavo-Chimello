const CACHE_NAME = "portfolio-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/script.js",
  "/icon-192.png",
  "/icon-512.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(urlsToCache).catch((error) => {
          console.error("Falha ao adicionar arquivos ao cache:", error);
        });
      })
    );
  });