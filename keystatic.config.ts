// keystatic.config.ts
import { config, fields, collection, component } from '@keystatic/core';
import React from 'react';

export default config({
    storage: import.meta.env.PROD
        ? {
            // EN PRODUCCIÓN (Vercel): Usamos GitHub
            kind: 'github',
            repo: 'Gerardo7775/Sitio-ATT---CODE.SG', // <--- ¡Verifica que esto esté bien!
        }
        : {
            // EN LOCAL (Tu PC): Usamos modo Local
            kind: 'local',
        },
    collections: {
        // --- SECCIÓN: ACADEMIA (ATT) ---
        cursos: collection({
            label: '🏛️ Cursos ATT',
            slugField: 'title',
            path: 'src/content/cursos/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Título del Curso' } }),
                description: fields.text({ label: 'Descripción Corta', multiline: true }),
                pubDate: fields.date({ label: 'Fecha de Publicación', validation: { isRequired: true } }),
                author: fields.text({ label: 'Autor', defaultValue: 'Ing. PauMag' }),
                category: fields.text({ label: 'Categoría (Ej. Programación)' }),
                image: fields.image({
                    label: 'Portada del Curso',
                    directory: 'public/images/att',
                    publicPath: '/images/att/',
                }),
                // 1. Galería de Imágenes (Carrusel)
                gallery: fields.array(
                    fields.image({
                        label: 'Foto de Galería',
                        directory: 'public/images/att/gallery',
                        publicPath: '/images/att/gallery/',
                    }),
                    {
                        label: 'Galería del Curso',
                        itemLabel: (props) => 'Imagen: ' + props.value,
                    }
                ),
                // 2. Recursos y Descargas
                resources: fields.array(
                    fields.object({
                        label: fields.text({ label: 'Texto del Botón (Ej. Ver en GitHub)' }),
                        url: fields.url({ label: 'Enlace (URL)' }),
                        type: fields.select({
                            label: 'Tipo de Recurso',
                            options: [
                                { label: 'Código 💻', value: 'code' },
                                { label: 'Descarga ⬇️', value: 'download' },
                                { label: 'Video 📺', value: 'video' },
                            ],
                            defaultValue: 'code',
                        }),
                    }),
                    {
                        label: 'Recursos y Descargas',
                        itemLabel: (props) => props.fields.label.value || 'Recurso',
                    }
                ),
                content: fields.document({
                    label: 'Contenido del Tutorial',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/att/content',
                        publicPath: '/images/att/content/',
                    },
                    // Component Blocks for ATT
                    componentBlocks: {
                        alert: component({
                            label: '⚠️ Alerta',
                            schema: {
                                message: fields.text({ label: 'Mensaje de Alerta' }),
                                type: fields.select({
                                    label: 'Tipo',
                                    options: [
                                        { label: 'Información', value: 'info' },
                                        { label: 'Peligro', value: 'danger' }
                                    ],
                                    defaultValue: 'info'
                                })
                            },
                            preview: (props) => {
                                return React.createElement('div', {
                                    style: {
                                        padding: '10px',
                                        background: props.fields.type.value === 'danger' ? '#fee' : '#eef',
                                        border: '1px solid currentColor',
                                        borderRadius: '4px'
                                    }
                                },
                                    React.createElement('strong', null, props.fields.type.value === 'danger' ? 'PELIGRO:' : 'NOTA:'),
                                    ' ',
                                    props.fields.message.value
                                )
                            }
                        }),
                    },
                }),
            },
        }),

        // --- SECCIÓN: MAKER (CODE.SG) ---
        maker: collection({
            label: '🧢 Proyectos CODE.SG',
            slugField: 'title',
            path: 'src/content/maker/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Nombre del Proyecto' } }),
                description: fields.text({ label: 'Descripción Maker', multiline: true }),
                pubDate: fields.date({ label: 'Fecha de Registro' }),
                status: fields.select({
                    label: 'Estado del Proyecto',
                    options: [
                        { label: 'En Progreso 🟡', value: 'En Progreso' },
                        { label: 'Terminado 🟢', value: 'Terminado' },
                        { label: 'Prototipo 🔵', value: 'Prototipo' },
                    ],
                    defaultValue: 'En Progreso',
                }),
                tags: fields.array(
                    fields.text({ label: 'Tag' }),
                    { label: 'Etiquetas (Tags)', itemLabel: props => props.value }
                ),

                gallery: fields.array(
                    fields.image({
                        label: 'Foto de Galería',
                        directory: 'public/images/codesg/gallery',
                        publicPath: '/images/codesg/gallery/',
                    }),
                    {
                        label: 'Galería del Proyecto',
                        itemLabel: (props) => 'Imagen: ' + props.value,
                    }
                ),

                resources: fields.array(
                    fields.object({
                        label: fields.text({ label: 'Texto del Botón (Ej. Ver en GitHub)' }),
                        url: fields.text({ label: 'Enlace (URL)' }),
                        type: fields.select({
                            label: 'Tipo de Recurso',
                            options: [
                                { label: 'GitHub 😺', value: 'github' },
                                { label: 'Descarga ⬇️', value: 'download' },
                                { label: 'Video 📺', value: 'video' },
                                { label: 'Documento 📄', value: 'doc' },
                            ],
                            defaultValue: 'download',
                        }),
                    }),
                    {
                        label: 'Recursos y Descargas',
                        itemLabel: (props) => props.fields.label.value || 'Recurso',
                    }
                ),

                content: fields.document({
                    label: 'Bitácora del Proyecto',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/codesg/content',
                        publicPath: '/images/codesg/content/',
                    },
                    // 3. Componentes Personalizados
                    componentBlocks: {
                        alert: component({
                            label: '⚠️ Alerta',
                            schema: {
                                message: fields.text({ label: 'Mensaje de Alerta' }),
                                type: fields.select({
                                    label: 'Tipo',
                                    options: [
                                        { label: 'Información', value: 'info' },
                                        { label: 'Peligro', value: 'danger' }
                                    ],
                                    defaultValue: 'info'
                                })
                            },
                            preview: (props) => {
                                return React.createElement('div', {
                                    style: {
                                        padding: '10px',
                                        background: props.fields.type.value === 'danger' ? '#fee' : '#eef',
                                        border: '1px solid currentColor',
                                        borderRadius: '4px'
                                    }
                                },
                                    React.createElement('strong', null, props.fields.type.value === 'danger' ? 'PELIGRO:' : 'NOTA:'),
                                    ' ',
                                    props.fields.message.value
                                )
                            }
                        }),
                    },
                }),
            },
        }),
    },
});
