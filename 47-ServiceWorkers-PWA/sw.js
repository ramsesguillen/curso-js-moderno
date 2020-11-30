/**
 * *
*/
const nombreCache = 'apv-v1';
const archivos = [
    '/',
    '/index.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/error.html',
    '/js/app.js',
    '/js/apv.js'
];


//* Cuando se instala el service worker
self.addEventListener('install', e => {
    console.log('Instalando el Service Worker');
    console.log(e);

    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                console.log('cacheando');
                cache.addAll(archivos);
            })
    );
});

//* Activar el Service Worker
self.addEventListener('activate', e => {
    console.log('Service Worker Activado');
    console.log(e);
});

//* Evento fetch para descargra archivos estaticos
self.addEventListener('fetch', e => {
    console.log('Fetch... ', e);

    e.respondWith(
        caches.match( e.request)
            .then( respuestaCahce => respuestaCahce)
            .catch( () => caches.match('/error.html'))
    );
});