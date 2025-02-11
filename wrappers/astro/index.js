const astroZikojs = () => ({
    name: "astro-zikojs",
    hooks: {
        "astro:config:setup": async ({ addRenderer }) => {
            addRenderer({
                name: "zikojs",
                serverEntrypoint: "ziko-wrapper/astro/server",
                clientEntrypoint: "ziko-wrapper/astro/client",
            });
        },
    },
});
export default astroZikojs;
