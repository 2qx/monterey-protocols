this.addEventListener("install", (event) => {
    event.waitUntil(
        caches
            .open("v1")
            .then((cache) =>
                cache.addAll([
                    "/",
                    "/0/",
                    "/1/",
                    "/2/",
                    "/3/",
                    "/4/",
                    "/5/",
                    "/about",
                    "/donate",
                    "/manifest.webmanifest",
                    "/zine",
                    "/assets/merc.png",
                    "/assets/css/style.css"
                ]),
            ),
    );
});

const putInCache = async (request, response) => {
  const cache = await caches.open('v1');
  await cache.put(request, response);
};

const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    // Enable navigation preloads!
    await self.registration.navigationPreload.enable();
  }
};

self.addEventListener('activate', (event) => {
  event.waitUntil(enableNavigationPreload());
});


const cacheFirst = async (request, event) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  const responseFromNetwork = await fetch(request);
  event.waitUntil(putInCache(request, responseFromNetwork.clone()));
  return responseFromNetwork;
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request, event));
});