// Asignar nombre y versión al caché
const CACHE_NAME = 'v1_cache_103'; // Cambié el nombre del cache para forzar el uso de un nuevo cache

// Archivos a guardar
var urlsToCache = [
  '/icons/facebook-icon.png',
  '/icons/instagram-icon.png',
  '/icons/linkedin-icon.png',
  '/icons/logo.jpeg',
  '/icons/nano.jpeg',
  '/icons/portada.jpeg',
  '/icons/snapchat-icon.png',
  '/icons/twitter-icon.png',
  '/icons/virus.jpeg',
  '/icons/wave2.png',
  '/icons/whatsapp-icon.png',
  '/',
  '/css/style.css',
  '/main.js',
  '/manifest.json',
  '/package-lock.json',
  '/package.json',
  '/sw.js',
];

// Instalación del SW
self.addEventListener('install', e => {
  console.log('Instalando Service Worker...');
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        self.skipWaiting();
      })
      .catch(err => {
        console.log('Fallo en el registro del cache', err);
      })
  );
});

// Activar el SW
self.addEventListener('activate', e => {
  console.log('Activando Service Worker...');
  const cacheWhitelist = [CACHE_NAME];

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        self.clients.claim();
      })
  );
});

// Recuperar archivos del cache
self.addEventListener('fetch', e => {
  console.log('Evento fetch para ', e.request.url);
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          console.log('Encontrado en cache ', e.request.url);
          return res;
        }
        console.log('Solicitud de red para ', e.request.url);
        return fetch(e.request).then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(e.request, responseToCache);
            });

          return response;
        });
      }).catch(err => {
        console.log('Error al obtener y cachear nuevos datos', err);
      })
  );
});
