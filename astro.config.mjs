import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";
import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
    prefetch: true,
    site: 'https://sitio-att-code-sg.vercel.app',
    output: 'static',
    integrations: [
        tailwind(),
        react(),
        markdoc(),   // Markdoc antes de MDX para evitar conflictos de rutas
        keystatic(), // Keystatic antes de ML/MD para evitar conflictos de rutas
        mdx(),
    ],
    build: {
        format: 'file'
    },
    vite: {
        resolve: {
            dedupe: ['react', 'react-dom', 'yjs']
        }
    }
});
