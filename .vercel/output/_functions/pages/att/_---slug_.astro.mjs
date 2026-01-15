/* empty css                                                   */
import { d as createAstro, c as createComponent, r as renderComponent, e as renderHead, f as renderSlot, a as renderTemplate } from '../../chunks/astro/server_DTypCvEY.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_DT8awAy3.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_Cp6_kJuj.mjs';
import { a as attLogo } from '../../chunks/logo_WkAp00Bn.mjs';
import { $ as $$SEO } from '../../chunks/SEO_CoYRQnFR.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://sitio-att-code-sg.vercel.app");
const $$ATTPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ATTPostLayout;
  const { frontmatter } = Astro2.props;
  const title = frontmatter?.title || "Art\xEDculo ATT";
  const description = frontmatter?.description || "Recurso educativo de la Academia Tecnol\xF3gica.";
  const image = frontmatter?.image;
  const category = frontmatter?.category || "Fundamentos de Programaci\xF3n";
  const author = "Ing. PauMag";
  const date = "12 OCT 2025";
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "image": image, "article": true })}${renderHead()}</head> <body class="bg-brand-cream text-att-black font-sans antialiased"> <nav class="border-b-4 border-att-black bg-white py-4 px-6 flex justify-between items-center sticky top-0 z-50"> <div class="flex items-center gap-2"> <div class="w-12 h-12 flex items-center justify-center shrink-0"> ${renderComponent($$result, "Image", $$Image, { "loading": "eager", "src": attLogo, "alt": "ATT Logo", "class": "w-full h-full object-contain mix-blend-multiply" })} </div> <span class="font-bold tracking-tighter text-xl">ATT <span class="text-brand-red">ACADEMIA TECNOLOGICA</span></span> </div> <a href="/" class="text-sm font-bold uppercase hover:text-brand-red hover:underline decoration-2 underline-offset-4">
&larr; Volver al Hub
</a> </nav> <main class="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-12 p-6 md:p-12"> <article class="flex-1 min-w-0"> <header class="mb-10 pb-8 border-b border-att-gray/30"> <div class="flex items-center gap-3 mb-4 text-xs font-bold tracking-widest uppercase text-brand-red"> <span class="border border-brand-red px-2 py-1">${category}</span> <span>•</span> <span>${date}</span> </div> <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-att-black"> ${title} </h1> <div class="flex items-center gap-3"> <div class="w-10 h-10 bg-att-black rounded-full text-white flex items-center justify-center font-bold">
PM
</div> <div> <p class="text-sm font-bold text-att-black"> ${author} </p> <p class="text-xs text-att-gray">
Director Académico
</p> </div> </div> </header> <div class="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-att-black
                prose-p:text-att-gray prose-p:leading-relaxed
                prose-a:text-brand-red prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                prose-strong:text-att-black
                prose-code:text-brand-red prose-code:bg-white prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:border prose-code:border-gray-200
                prose-pre:bg-[#1e1e1e] prose-pre:shadow-tech prose-pre:border prose-pre:border-gray-800
                prose-img:rounded-sm prose-img:border prose-img:border-att-black"> ${renderSlot($$result, $$slots["default"])} <p class="lead">
Los punteros son una de las herramientas más potentes y
                        a la vez temidas de C++. Entender cómo gestionan la
                        memoria es crucial para la optimización.
</p> <h3>¿Qué es una dirección de memoria?</h3> <p>
Imagina la memoria RAM como una serie de casilleros
                        numerados...
</p> <pre><code class="language-cpp">// Ejemplo de Puntero Básico
int var = 20;   // Declaración de variable
int *ip;        // Declaración de puntero

ip = &var;      // Asigna la dirección de var a ip</code></pre> <blockquote>
"El gran poder conlleva una gran responsabilidad (de
                        gestión de memoria)."
</blockquote> </div> </article> <aside class="w-full md:w-64 lg:w-80 space-y-8 hidden md:block"> <div class="sticky top-24 p-6 bg-white border border-gray-200 shadow-tech"> <h3 class="font-bold text-sm uppercase tracking-widest mb-4 text-att-black border-b border-brand-red pb-2">
En este artículo
</h3> <ul class="space-y-3 text-sm text-att-gray"> <li> <a href="#" class="hover:text-brand-red hover:translate-x-1 transition-transform block">1. Definición de Punteros</a> </li> <li> <a href="#" class="hover:text-brand-red hover:translate-x-1 transition-transform block">2. Operadores & y *</a> </li> <li> <a href="#" class="hover:text-brand-red hover:translate-x-1 transition-transform block font-bold text-brand-red">3. Gestión de Memoria</a> </li> <li> <a href="#" class="hover:text-brand-red hover:translate-x-1 transition-transform block">4. Ejercicios Prácticos</a> </li> </ul> </div> <div class="p-6 bg-att-black text-white"> <h3 class="font-bold text-lg mb-2">Recursos ATT</h3> <p class="text-sm text-gray-400 mb-4">
Descarga el código fuente y diagramas de esta lección.
</p> <button class="w-full py-2 bg-brand-red text-white font-bold uppercase text-xs hover:bg-white hover:text-brand-red transition-colors">
Descargar .ZIP
</button> </div> </aside> </main> <footer class="border-t border-gray-300 py-12 text-center text-att-gray text-sm"> <p>&copy; 2024 Academia Tecnológica de Toluca.</p> </footer> </body></html>`;
}, "C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/layouts/ATTPostLayout.astro", void 0);

const $$Astro = createAstro("https://sitio-att-code-sg.vercel.app");
async function getStaticPaths() {
  const blogEntries = await getCollection("cursos");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "ATTPostLayout", $$ATTPostLayout, { "frontmatter": entry.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/pages/att/[...slug].astro", void 0);

const $$file = "C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/pages/att/[...slug].astro";
const $$url = "/att/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
