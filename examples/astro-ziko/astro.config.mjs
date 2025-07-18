// @ts-check
import { defineConfig } from 'astro/config';
import zikojs from "ziko-wrapper/astro"
// import mdzjs from "mdzjs/astro"

// https://astro.build/config
export default defineConfig({
    integrations : [
        zikojs(),
        // mdzjs()
    ],
});
