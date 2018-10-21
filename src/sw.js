workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

// Make sure client-side routing gets re-directed to the index.html
workbox.routing.registerNavigationRoute('/index.html');

// Cache HN API
workbox.routing.registerRoute(
  /^https:\/\/api\.hnpwa\.com\/v0\//,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'hnpwa-api',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 20,
        maxEntries: 30,
      }),
    ],
  })
);
