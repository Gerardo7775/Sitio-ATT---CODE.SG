/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// --- EL HILO CONDUCTOR (Común) ---
				brand: {
					cream: '#F5F2EB', // El fondo "Off-white" cálido para ambas marcas
					red: '#E63946',   // El "Hilo Rojo" (Circuitos ATT / Sombrero CodeSG)
				},
				
				// --- ATT (La Academia) ---
				att: {
					black: '#1A1A1A', // Negro autoridad (no #000 puro, mejor para lectura)
					gray: '#4A4A4A',  // Para textos secundarios
				},

				// --- CODE.SG (El Maker) ---
				code: {
					green: '#2A9D8F', // Verde código/crecimiento
					dark: '#264653',  // Contraste para el verde
				}
			},
			fontFamily: {
				// Tipografía ATT: Sans-serif, recta, técnica (Ej. Inter o Roboto)
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				
				// Tipografía CODE.SG: Chunky, display, retro (Ej. Changa One o Fredoka)
				display: ['"Changa One"', '"Fredoka"', 'cursive'],
			},
			boxShadow: {
				// Sombra "Sticker" para CODE.SG (Sólida, sin difuminar)
				'retro': '4px 4px 0px 0px rgba(0,0,0,1)',
				// Sombra "Elevación" para ATT (Sutil, precisa)
				'tech': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'), // Indispensable para que tus tutoriales MDX se vean bien
	],
}
