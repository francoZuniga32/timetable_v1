// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";



// https://astro.build/config
export default defineConfig({
    vite: {    plugins: [tailwindcss()],  },
    env: {
        schema: {
            PUBLIC_BACKEND: envField.string({ context: "client", access: "public", optional: true }),
         
        }
      }
});
