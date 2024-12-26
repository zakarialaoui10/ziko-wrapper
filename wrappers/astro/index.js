const astroZikojs = () => ({
    name: "astro-zikojs",
    hooks: {
        "astro:config:setup": async ({ addRenderer }) => {
            addRenderer({
                name: "zikojs",
                serverEntrypoint: "ziko-wrapper/astro/server.js",
                clientEntrypoint: "ziko-wrapper/astro/client.js",
            });
        },
    },
});
export default astroZikojs;