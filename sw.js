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
                    "/assets/css/style.css",
                    "/about",
                    "/assets/merc.png"
                ]),
            ),
    );
});