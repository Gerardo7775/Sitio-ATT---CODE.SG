/* empty css                                                */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_WUUEiQnw.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_T-7CV5dQ.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Du0MALOb.mjs';
import { a as attLogo } from '../chunks/logo_WkAp00Bn.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_fU2aHSzX.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("cursos");
  posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Cat\xE1logo Acad\xE9mico", "description": "Explora todos nuestros recursos educativos. Ingenier\xEDa rigurosa, explicada con claridad y orden.", "image": "/images/default-social.jpg" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-8"> <nav class="mb-12"> <a href="/" class="font-bold hover:text-brand-red">← VOLVER AL HUB</a> </nav> <header class="mb-12 border-b-4 border-att-black pb-4 text-center"> <div class="w-24 h-24 mb-4 mx-auto"> ${renderComponent($$result2, "Image", $$Image, { "src": attLogo, "alt": "ATT Logo", "class": "w-full h-full object-contain drop-shadow-md", "loading": "eager" })} </div> <h1 class="text-5xl font-bold tracking-tight">
Catálogo Académico
</h1> <p class="text-att-gray mt-2">
Recursos educativos abiertos para ingeniería.
</p> </header> <!-- A. Sección "Sobre Nosotros" --> <section class="max-w-4xl mx-auto mb-16 px-4"> <h2 class="text-2xl font-bold uppercase tracking-widest text-brand-red mb-6 border-l-4 border-brand-red pl-4">
Nuestra Filosofía
</h2> <div class="grid md:grid-cols-2 gap-8"> <div> <h3 class="font-bold text-lg mb-2">Misión</h3> <p class="text-gray-700 leading-relaxed">
Proveer recursos educativos de alta calidad y precisión
                        técnica que refuercen la formación de estudiantes de
                        ingeniería, transformando la complejidad teórica en
                        conocimiento claro, estructurado y aplicable.
</p> </div> <div> <h3 class="font-bold text-lg mb-2">Visión</h3> <p class="text-gray-700 leading-relaxed">
Convertirnos en el referente digital de apoyo académico
                        más confiable para futuros ingenieros, elevando el
                        estándar de la enseñanza tecnológica a través de la
                        excelencia y el orden.
</p> </div> </div> </section> <!-- B. Sección "Nuestros Pilares" --> <section class="max-w-6xl mx-auto mb-16"> <div class="grid grid-cols-1 md:grid-cols-4 gap-4"> ${[
    {
      title: "Excelencia",
      text: "No subimos contenido 'a medias'. Todo tiene rigor."
    },
    {
      title: "Claridad",
      text: "Hacemos f\xE1cil lo dif\xEDcil. El orden es nuestra firma."
    },
    {
      title: "Disciplina",
      text: "La tecnolog\xEDa requiere constancia y m\xE9todo."
    },
    {
      title: "Fundamento",
      text: "No solo ense\xF1amos c\xF3mo funciona, sino por qu\xE9 funciona."
    }
  ].map((pilar) => renderTemplate`<div class="border border-att-black bg-brand-cream p-4 hover:shadow-tech transition-shadow"> <h4 class="font-bold text-att-black mb-2 uppercase text-sm border-b border-gray-300 pb-1"> ${pilar.title} </h4> <p class="text-sm text-gray-600 font-medium"> ${pilar.text} </p> </div>`)} </div> </section> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => renderTemplate`<a${addAttribute(`/att/${post.slug}`, "href")} class="group block h-full"> <article class="bg-white border border-gray-200 p-6 h-full hover:shadow-tech transition-shadow duration-300 flex flex-col"> ${post.data.image && renderTemplate`<div class="mb-4 overflow-hidden rounded-sm border border-gray-100"> ${renderComponent($$result2, "Image", $$Image, { "src": post.data.image, "alt": post.data.title, "class": "w-full h-48 object-cover hover:scale-105 transition-transform duration-500", "width": 400, "height": 200 })} </div>`} <div class="text-xs font-bold text-brand-red uppercase tracking-widest mb-2"> ${post.data.category} </div> <h2 class="text-2xl font-bold mb-3 group-hover:underline decoration-2 underline-offset-4"> ${post.data.title} </h2> <p class="text-gray-600 text-sm mb-4 flex-1"> ${post.data.description} </p> <div class="text-xs font-mono text-gray-400 mt-auto pt-4 border-t border-gray-100"> ${post.data.pubDate.toLocaleDateString()} </div> </article> </a>`)} </div> <!-- 3. El Elemento Conector --> <section class="mt-24 py-12 border-t border-gray-300 text-center"> <div class="max-w-2xl mx-auto"> <h2 class="text-2xl font-bold mb-4">
Un Propósito, Dos Caminos.
</h2> <p class="text-gray-600 mb-8 italic">
"Compartimos la misma sangre: Empoderar a través de la
                    tecnología. <br> <strong>ATT</strong> pone el Conocimiento (Saber). <strong>CODE.SG</strong> pone la Ejecución (Hacer)."
</p> <a href="/codesg" class="inline-block px-8 py-3 bg-code-green text-white font-bold uppercase tracking-wide hover:shadow-lg hover:scale-105 transition-all">
Ir al Taller (CODE.SG)
</a> </div> </section> <!-- Footer Académico --> <footer class="border-t-4 border-att-black bg-white py-16 mt-16 text-center"> <div class="max-w-4xl mx-auto px-6"> <span class="block font-bold text-2xl tracking-tighter mb-6">ATT</span> <div class="flex justify-center gap-8 mb-8 text-sm font-bold uppercase tracking-widest"> <a href="#" class="hover:text-brand-red decoration-2 underline-offset-4 hover:underline">YouTube</a> <a href="#" class="hover:text-brand-red decoration-2 underline-offset-4 hover:underline">Instagram</a> <a href="#" class="hover:text-brand-red decoration-2 underline-offset-4 hover:underline">GitHub</a> </div> <p class="text-xs text-matt-gray leading-relaxed">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Academia Tecnológica de Toluca.<br>
Formando ingenieros con rigor y pasión.
</p> </div> </footer> </div> ` })}`;
}, "C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/pages/att/index.astro", void 0);

const $$file = "C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/pages/att/index.astro";
const $$url = "/att";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
