// Asignar nombre y versión al caché
const CACHE_VERSION = 'v6'; // Actualiza el número de versión cuando realices cambios significativos
const CACHE_NAME = `static-${CACHE_VERSION}`;

// Archivos a guardar
var urlsToCache = [
  '/img/facebook-icon.png',
  '/img/instagram-icon.png',
  '/img/linkedin-icon.png',
  '/img/logo.jpeg',
  '/img/logo1.jpeg',
  '/img/nano.jpeg',
  '/img/portada.jpeg',
  '/img/snapchat-icon.png',
  '/img/twitter-icon.png',
  '/img/userm.jpg',
  '/img/userv.jpg',
  '/img/virus.jpeg',
  '/img/wave2.png',
  '/img/whatsapp-icon.png',
  '/',
  '/css/style.css',
  '/manifest.json',
  '/package.json',
  '/sw.js',
];

// Evento de instalación del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting()) // Service Worker listo
          .catch(error => {
            console.error('Error al almacenar en caché:', error);
          });
      })
  );
});

// Evento de activación del Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName); // Borrar cachés antiguos
          }
        })
      ))
      .then(() => self.clients.claim()) // Tomar control inmediato
  );
});

// Evento de solicitud de red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request)
        .then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            return caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            });
          }
          return networkResponse;
        })
        .catch(() => caches.match('/offline.html')) // Opcional
      )
  );
});
