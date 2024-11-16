// Asignar nombre y versión al caché
const CACHE_VERSION = 'v6'; // Actualiza este número cuando cambies el caché
const CACHE_NAME = `static-${CACHE_VERSION}`;

// Archivos que serán cacheados
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
  '/package.json',
  '/sw.js',
];

// Evento de instalación del Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker: Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Archivos cacheados correctamente');
        return cache.addAll(urlsToCache);
      })
      .catch(error => console.error('Error al almacenar en caché:', error))
  );
  self.skipWaiting(); // Hacer que el SW tome control inmediatamente
});

// Evento de activación del Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker: Activado');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log(`Borrando caché antiguo: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      ))
      .then(() => self.clients.claim()) // Tomar control inmediato de la página
  );
});

// Evento de interceptar solicitudes de red
self.addEventListener('fetch', event => {
  console.log('Interceptando solicitud:', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devuelve el recurso desde la caché si existe
        if (response) {
          return response;
        }
        // Si no está en caché, obtén el recurso de la red
        return fetch(event.request)
          .then(networkResponse => {
            // Almacenar en caché el nuevo recurso si es válido
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, networkResponse.clone());
              });
            }
            return networkResponse;
          })
          .catch(() => caches.match('/offline.html')); // Recurso de fallback
      })
  );
});
