const astroZikojs = () => ({
    name: "astro-zikojs",
    hooks: {
        "astro:config:setup": async ({ addRenderer }) => {
            addRenderer({
                name: "zikojs",
                serverEntrypoint: "ziko-wrapper/wrappers/astro/server.js",
                clientEntrypoint: "ziko-wrapper/wrappers/astro/client.js",
            });
        },
    },
});
export default astroZikojs;