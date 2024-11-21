// Asignar nombre y versión al caché
const CACHE_VERSION = 'v9'; // Cambia este número al actualizar
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
  '/',
  '/css/style.css',
  '/manifest.json',
  '/sw.js',
  '/es.json',
  '/en.json',
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
            // Borra cachés antiguas si no coinciden con la nueva versión
            if (cacheName !== CACHE_NAME) {
              console.log(`Eliminando caché antiguo: ${cacheName}`);
              return caches.delete(cacheName);
            }
          })
        );
      })
  );
  self.clients.claim(); // Toma control de las pestañas abiertas
});

// Evento fetch
self.addEventListener('fetch', event => {
  console.log('Solicitando recurso:', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si el recurso está en caché, lo devuelves, si no, haces una solicitud
        return response || fetch(event.request)
          .then(networkResponse => {
            // Actualiza el caché con la respuesta de la red para futuras solicitudes
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, networkResponse.clone());
                });
            }
            return networkResponse;
          });
      })
      .catch(() => caches.match('/offline.html')) // Si no hay conexión, muestra una página offline
  );
});
