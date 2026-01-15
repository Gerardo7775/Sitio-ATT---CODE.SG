import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// 👇 1. Importar integraciones
import mdx from "@astrojs/mdx";
import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    // 👇 AGREGA ESTA LÍNEA CON TU URL DE VERCEL EXACTA (sin barra al final)
    // 👇 AGREGA ESTA LÍNEA CON TU URL DE VERCEL EXACTA (sin barra al final)
    site: 'https://sitio-att-code-sg.vercel.app',
    output: 'static',
    adapter: vercel(),
    integrations: [
        tailwind(),
        // 👇 2. Inicializar integraciones (mdx must be before keystatic usually, or as needed)
        react(),
        keystatic(),
        mdx(),
        markdoc(),
    ],
});
