// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4000; // Usa el puerto de la variable de entorno o 3000 por defecto
console.log(PORT);

export default defineConfig({
    site:`http://localhost:${PORT}/`,
    base: "/",
    vite: {    plugins: [tailwindcss()],  },
    env: {
        schema: {
            PUBLIC_BACKEND: envField.string({ context: "client", access: "public", optional: true }),
         
        }
      }
});
