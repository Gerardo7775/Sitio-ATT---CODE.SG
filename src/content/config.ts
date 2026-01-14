// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 1. Colección para la ACADEMIA (ATT)
const cursosCollection = defineCollection({
    type: 'content', // Son archivos Markdown/MDX
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(), // Asegura que sea una fecha válida
        author: z.string().default('Ing. PauMag'), // Valor por defecto
        category: z.string(),
        // Opcional: Una imagen destacada
        image: z.string().optional(),
    }),
});

// 2. Colección para el MAKER SPACE (CODE.SG)
const makerCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        status: z.enum(['En Progreso', 'Terminado', 'Prototipo']), // Solo permite estos 3 estados
        tags: z.array(z.string()), // Lista de etiquetas (ej. ["Arduino", "3D"])
    }),
});

// Exportamos las colecciones para que Astro las vea
export const collections = {
    'cursos': cursosCollection, // La carpeta se debe llamar "src/content/cursos"
    'maker': makerCollection,   // La carpeta se debe llamar "src/content/maker"
};
