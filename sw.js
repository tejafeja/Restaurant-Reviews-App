const CACHE_NAME = 'rra-static-v1';
//describe an array of resources to be cached
let cachedData = [
    './',
    './index.html',
    './restaurant.html',
    './css/responsive.css',
    './css/styles.css',
    './data/restaurants.json',
    './js/dbhelper.js',
    './js/main.js',
    './js/restaurant_info.js',
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js'
];
/**
 * install service worker and cache all the data
 */
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(cachedData);
        })
    );
});
/** 
 * activate service work and delete any existing old cache
*/
self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                    return cacheName.startsWith('rra-') &&
                        cacheName != CACHE_NAME;
                }).map(function (cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});
/**
 * listen for every request and load what was requested from cache
*/
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request).then(function(response){
                // Check if we received a valid response
                if (!response || response.status !== 200) {
                    return response;
                }
                // A response is a stream
                // and because we want the browser to consume the response
                // as well as the cache consuming the response, we need
                // to clone it so we have two streams.
                let responseToCache = response.clone();
                caches.open(CACHE_NAME)
                    .then(function (cache) {
                        cache.put(event.request, responseToCache);
                    });
                 return response;   
            }).catch(function () {
                // generic error message when data is not in cache yet, and user is offline
                return new Response("Please, try again later! :( you are completely offline now!");
            });
        })
    );
});
/**
 * listen to message to skipWaiting 
 */
self.addEventListener('message', function (event) {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});