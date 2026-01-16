import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";
import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
    prefetch: true,
    site: 'https://sitio-att-code-sg.vercel.app',
    output: 'server',
    adapter: vercel({
        webAnalytics: { enabled: true },
        // Esto ayuda a que las imágenes funcionen mejor en Vercel
        imageService: true,
    }),
    integrations: [
        tailwind(),
        react(),
        markdoc(),   // Markdoc antes de MDX para evitar conflictos de rutas
        keystatic(), // Keystatic antes de ML/MD para evitar conflictos de rutas
        mdx(),
    ],
    build: {
        inlineStylesheets: 'auto',
    },
    vite: {
        resolve: {
            dedupe: ['react', 'react-dom', 'yjs']
        }
    }
});
