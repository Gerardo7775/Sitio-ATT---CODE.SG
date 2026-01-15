import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";
import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    site: 'https://sitio-att-code-sg.vercel.app',
    output: 'static',
    adapter: vercel(),
    integrations: [
        tailwind(),
        react(),
        keystatic(), // Keystatic antes de ML/MD para evitar conflictos de rutas
        mdx(),
        markdoc(),
    ],
});
