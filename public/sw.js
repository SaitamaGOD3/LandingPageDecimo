// Asignar nombre y versión al caché
const CACHE_VERSION = 'v2'; // Actualiza el número de versión cuando realices cambios significativos
const CACHE_NAME = `static-${CACHE_VERSION}`;

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
  '/icons/userm.jpg',
  '/icons/userv.jpg',
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

// Evento de instalación del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Almacenar todos los archivos en el caché
        return cache.addAll(urlsToCache)
          .then(() => {
            // Indicar al navegador que este nuevo Service Worker está listo
            self.skipWaiting();
          });
      })
      .catch(error => {
        console.error('Error al almacenar en caché:', error);
      })
  );
});

// Evento de activación del Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        // Indicar al navegador que este Service Worker se haga cargo de las solicitudes
        return self.clients.claim();
      })
  );
});

// Evento de solicitud de red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Si se encuentra en caché, devolver la respuesta
        }

        return fetch(event.request)
          .then(networkResponse => {
            // Verifica que la respuesta sea válida antes de guardarla en caché
            if (networkResponse && networkResponse.status === 200) {
              return caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, networkResponse.clone());
                return networkResponse;
              });
            }
            return networkResponse;
          })
          .catch(() => {
            // Manejar errores de red, por ejemplo, mostrando una página de error personalizada
            return caches.match('/offline.html');
          });
      })
  );
});
