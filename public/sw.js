// Asignar nombre y versión al caché
const CACHE_NAME = 'v1_cache_103'; 

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

//Install - Instalación del SW
self.addEventListener('install', e => {      
    e.waitUntil(
        caches.open(CACHE_NAME)   
        .then(cache => {
            cache.addAll(urlsToCache) 
            .then(() =>{
                self.skipWaiting();
            })
        })
        .catch(err => {
            console.log('El becario borró la base de datos!', err);
        })
    )
});

//Activar

self.addEventListener('activate', e =>{
    const cacheWhitelist = [CACHE_NAME]
    e.waitUntil(
        caches.keys()
        .then(cacheNames =>{
            return Promise.all(
                cacheNames.map(cacheName =>{
                    if(cacheWhitelist.indexOf(cacheName) == -1){
                        return caches.delete(cacheName);
                    }
                })
            );
        })
        .then(() => {
            self.clients.claim();
        })
    );
})

//Fetch

self.addEventListener('fetch', e=>{
    e.respondWith(
        caches.match(e.request)
            .then(res => {
                if(res){
                    return res;
                }
                return fetch(e.request);
            })
    );
});