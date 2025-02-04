// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    vite: {    plugins: [tailwindcss()],  },
    site: 'https://francozuniga32.github.io/',
    base: 'timetable_v1',
});
