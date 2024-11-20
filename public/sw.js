// Asignar nombre y versión al caché
const CACHE_VERSION = 'v8'; // Cambia este número al actualizar
const CACHE_NAME = `static-${CACHE_VERSION}`;

// Archivos a guardar en el caché
const urlsToCache = [
  '/img/facebook-icon.png',
  '/img/instagram-icon.png',
  '/img/linkedin-icon.png',
  '/img/logo.jpeg',
  '/img/logo1.png',
  '/img/nano.jpeg',
  '/img/portada.jpeg',
  '/img/snapchat-icon.png',
  '/img/twitter-icon.png',
  '/img/userm.jpg',
  '/img/userv.jpg',
  '/img/virus.jpeg',
  '/img/wave2.png',
  '/img/whatsapp-icon.png',
  '/img/mx.svg',
  '/img/us.svg',
  '/',
  '/css/style.css',
  '/manifest.json',
  '/sw.js',
  '/mx.json',
  '/us.json',
];

// Evento de instalación
self.addEventListener('install', event => {
  console.log(`Service Worker (versión: ${CACHE_VERSION}): Instalando...`);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caché abierto, guardando archivos...');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting(); // Activación inmediata
});

// Evento de activación
self.addEventListener('activate', event => {
  console.log(`Service Worker (versión: ${CACHE_VERSION}): Activado`);
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              console.log(`Eliminando caché antiguo: ${cacheName}`);
              return caches.delete(cacheName);
            }
          })
        );
      })
  );
  self.clients.claim(); // Tomar control de las pestañas abiertas
});

// Evento fetch
self.addEventListener('fetch', event => {
  console.log('Solicitando recurso:', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => caches.match('/offline.html'))
  );
});

