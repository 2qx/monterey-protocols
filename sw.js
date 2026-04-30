const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
    event.waitUntil(
        addResourcesToCache([
            "/",
            "/0/",
            "/1/",
            "/2/",
            "/3/",
            "/4/",
            "/5/",
            "/style.css",
            "/about",
            "/merc.png"
        ]),
    );
});