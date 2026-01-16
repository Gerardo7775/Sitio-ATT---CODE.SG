/* empty css                                                */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_WUUEiQnw.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_BbTG80wO.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Du0MALOb.mjs';
import { c as codeLogo } from '../chunks/logo_sau3nNta.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_fU2aHSzX.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("maker");
  projects.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Proyectos Maker", "description": "Zona de Caos Creativo. Proyectos de Arduino, Impresi\xF3n 3D y Rob\xF3tica. Romper para aprender.", "image": "/images/default-social.jpg" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="min-h-screen p-8 bg-[radial-gradient(#264653_1px,transparent_1px)] [background-size:20px_20px]"> <nav class="mb-12"> <a href="/" class="bg-white border-2 border-black px-4 py-2 font-display hover:shadow-retro">← SALIR</a> </nav> <header class="mb-12 text-center"> <div class="w-24 h-24 mb-6 mx-auto transform -rotate-3 hover:rotate-6 transition-transform"> ${renderComponent($$result2, "Image", $$Image, { "src": codeLogo, "alt": "CODE.SG Logo", "class": "w-full h-full object-contain drop-shadow-retro shadow-black rounded-lg border-2 border-black bg-white", "loading": "eager" })} </div> <h1 class="font-display text-6xl text-code-dark drop-shadow-sm mb-2">
PROYECTOS
</h1> <span class="bg-code-green text-white px-4 py-1 font-mono text-sm border-2 border-black shadow-retro transform rotate-2 inline-block">
WARNING: ZONE OF CHAOS
</span> </header> <!-- A. Sección "El Manifiesto" --> <section class="max-w-4xl mx-auto mb-16 text-center px-6"> <h2 class="font-display text-4xl text-code-dark mb-8 uppercase transform -rotate-1">
Nuestra Causa
</h2> <div class="space-y-6 text-lg font-medium"> <p class="bg-white border-2 border-black p-4 shadow-retro transform rotate-1"> <span class="font-bold text-code-green">MISIÓN:</span> Democratizar
                    la ingeniería eliminando las barreras de entrada, fomentando una
                    comunidad activa donde el conocimiento se comparte libremente
                    y se aprende construyendo proyectos reales.
</p> <p class="bg-white border-2 border-black p-4 shadow-retro transform -rotate-1"> <span class="font-bold text-brand-red">VISIÓN:</span> Crear un
                    ecosistema donde cualquier estudiante, sin importar sus recursos,
                    tenga la confianza y las herramientas para pasar de 'tener una
                    idea' a 'crear una solución' tecnológica.
</p> </div> </section> <!-- B. Sección "Código de Honor" --> <section class="max-w-5xl mx-auto mb-20 px-4"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="md:col-span-2 text-center mb-4"> <span class="bg-black text-white px-4 py-1 font-mono uppercase text-sm">System.Config: CODE OF HONOR</span> </div> ${[
    {
      icon: "\u{1F30D}",
      title: "Accesibilidad",
      text: "La tecnolog\xEDa es para todos, no para una \xE9lite."
    },
    {
      icon: "\u{1F91D}",
      title: "Colaboraci\xF3n",
      text: "Nadie compila solo. Compartimos c\xF3digo y errores."
    },
    {
      icon: "\u{1F4A1}",
      title: "Creatividad Maker",
      text: "Menos teor\xEDa, m\xE1s prototipos. 'Romper para aprender'."
    },
    {
      icon: "\u{1F6E0}\uFE0F",
      title: "Innovaci\xF3n Social",
      text: "Usamos la ingenier\xEDa para impactar y mejorar nuestro entorno."
    }
  ].map((val, i) => renderTemplate`<div${addAttribute(`flex items-start gap-4 p-4 border-2 border-black bg-white shadow-retro ${i % 2 === 0 ? "transform rotate-1" : "transform -rotate-1"}`, "class")}> <span class="text-2xl">${val.icon}</span> <div> <h4 class="font-display text-xl text-code-dark"> ${val.title} </h4> <p class="font-mono text-xs text-gray-600 mt-1"> ${val.text} </p> </div> </div>`)} </div> </section> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"> ${projects.map((project) => renderTemplate`<a${addAttribute(`/codesg/${project.slug}`, "href")} class="group relative block transform hover:-translate-y-2 transition-transform duration-300"> <article class="bg-white border-4 border-black p-0 h-full shadow-retro group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow"> <div class="h-48 bg-gray-200 border-b-4 border-black flex items-center justify-center overflow-hidden"> <span class="text-4xl group-hover:scale-125 transition-transform duration-500">
🤖
</span> </div> <div class="p-6"> <div class="flex gap-2 mb-3"> ${project.data.tags.slice(0, 2).map((tag) => renderTemplate`<span class="bg-black text-white text-[10px] px-2 py-1 font-mono uppercase"> ${tag} </span>`)} </div> <h2 class="font-display text-2xl text-code-dark mb-2 leading-none"> ${project.data.title} </h2> <p class="font-mono text-xs text-gray-500">
Estado: ${project.data.status} </p> </div> </article> </a>`)} </div> <!-- 3. El Elemento Conector --> <section class="mt-24 py-12 border-t-4 border-black bg-white text-center"> <div class="max-w-2xl mx-auto px-6"> <h2 class="font-display text-3xl mb-4">
Un Propósito, Dos Caminos.
</h2> <p class="font-mono text-gray-600 mb-8 p-4 border-2 border-dashed border-gray-400">
"Compartimos la misma sangre: Empoderar a través de la
                    tecnología.<br>
ATT pone el Conocimiento (Saber). <strong>CODE.SG</strong> pone
                    la Ejecución (Hacer)."
</p> <a href="/att" class="inline-block px-8 py-3 bg-brand-red text-white font-display border-2 border-black hover:shadow-retro hover:-translate-y-1 transition-all">
Ir a la Academia (ATT)
</a> </div> </section> <!-- Footer Maker/Hacker --> <footer class="mt-24 py-16 bg-black text-white font-mono text-center border-t-4 border-code-green relative overflow-hidden"> <!-- Glitch decorative element --> <div class="absolute top-0 left-0 w-full h-1 bg-code-green opacity-50 animate-pulse"></div> <div class="max-w-4xl mx-auto px-6 relative z-10"> <div class="mb-8"> <span class="inline-block px-3 py-1 border border-code-green text-code-green text-xs">
> SYSTEM.SHUTDOWN_sequence_init()
</span> </div> <h3 class="font-display text-4xl mb-8 text-white drop-shadow-[2px_2px_0px_#2A9D8F]">
CODE.SG
</h3> <div class="flex justify-center gap-6 mb-10 text-xs"> <a href="#" class="hover:bg-white hover:text-black px-2 py-1 transition-colors">[ YOUTUBE ]</a> <a href="#" class="hover:bg-white hover:text-black px-2 py-1 transition-colors">[ INSTAGRAM ]</a> <a href="#" class="hover:bg-white hover:text-black px-2 py-1 transition-colors">[ GITHUB ]</a> </div> <p class="text-[10px] opacity-60">
// BUILD_VER_${(/* @__PURE__ */ new Date()).getFullYear()}.0.1<br>
// NO_SLEEP_UNTIL_DEPLOY_SUCCESS
</p> </div> </footer> </div> ` })}`;
}, "C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/pages/codesg/index.astro", void 0);

const $$file = "C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/pages/codesg/index.astro";
const $$url = "/codesg";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
