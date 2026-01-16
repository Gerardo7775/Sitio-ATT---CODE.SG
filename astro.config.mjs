import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";
import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import keystatic from '@keystatic/astro';
// import vercel from '@astrojs/vercel';

// https://astro.build/config
const isDev = process.argv.includes('dev');

export default defineConfig({
    prefetch: true,
    site: 'https://sitio-att-code-sg.vercel.app',
    output: 'static',
    // adapter: vercel({
    //     webAnalytics: { enabled: true },
    //     imageService: true,
    // }),
    integrations: [
        tailwind(),
        react(),
        markdoc(),   // Markdoc antes de MDX para evitar conflictos de rutas
        ...(isDev ? [keystatic()] : []), // Keystatic SOLO en modo desarrollo (local)
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
