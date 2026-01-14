import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    // 👇 AGREGA ESTA LÍNEA CON TU URL DE VERCEL EXACTA (sin barra al final)
    site: 'https://sitio-att-code-sg.vercel.app',
    integrations: [tailwind()],
});
