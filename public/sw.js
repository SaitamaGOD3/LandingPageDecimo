// Asignar nombre y versión al caché
const CACHE_VERSION = 'v7'; // Actualiza el número de versión cuando realices cambios significativos
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

// Evento de instalación del Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker: Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => console.log('Archivos cacheados correctamente'))
          .catch(error => console.error('Error al almacenar en caché:', error));
      })
  );
  self.skipWaiting(); // Forzar activación inmediata
});

// Evento de activación del Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker: Activado');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              console.log(`Eliminando caché antiguo: ${cacheName}`);
              return caches.delete(cacheName); // Borrar cachés antiguos
            }
          })
        );
      })
      .then(() => self.clients.claim()) // Tomar control de las páginas abiertas
  );
});

// Evento de solicitud de red (fetch)
self.addEventListener('fetch', event => {
  console.log('Interceptando solicitud:', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Si el recurso está en caché, devuélvelo
        if (cachedResponse) {
          return cachedResponse;
        }
        // Si no, obtén el recurso de la red
        return fetch(event.request)
          .then(networkResponse => {
            // Solo almacena en caché si es una respuesta válida
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            // Clona la respuesta antes de almacenarla en caché
            const clonedResponse = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, clonedResponse))
              .catch(error => console.error('Error al guardar en caché:', error));
            return networkResponse;
          });
      })
      .catch(() => caches.match('/offline.html')) // Si todo falla, usa un fallback opcional
  );
});
