/* empty css                                                */
import { c as createComponent, m as maybeRenderHead, r as renderComponent, j as renderScript, a as renderTemplate, d as createAstro, e as renderHead } from '../chunks/astro/server_DTypCvEY.mjs';
import 'piccolore';
import { $ as $$Image } from '../chunks/_astro_assets_Cp6_kJuj.mjs';
import { a as attLogo } from '../chunks/logo_WkAp00Bn.mjs';
import { c as codeLogo } from '../chunks/logo_sau3nNta.mjs';
import { $ as $$SEO } from '../chunks/SEO_CoYRQnFR.mjs';
export { renderers } from '../renderers.mjs';

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav id="main-nav" class="fixed top-0 w-full z-50 transition-all duration-300 bg-brand-cream/90 backdrop-blur-sm border-b border-att-black/10"> <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"> <a href="/" class="font-sans font-black text-xl tracking-tighter text-att-black z-50 relative">
ATT <span class="text-brand-red">/</span> CODE.SG
</a> <!-- Desktop Menu --> <div class="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wide"> <a href="/#hero" class="hover:text-brand-red transition-colors">Inicio</a> <a href="/#nosotros" class="hover:text-brand-red transition-colors">Nosotros</a> <a href="/#filosofia" class="hover:text-brand-red transition-colors">Misión</a> <div class="border-l border-gray-300 pl-8 flex gap-4"> <a href="/att" class="text-att-black hover:underline decoration-2 underline-offset-4">Academia</a> <a href="/codesg" class="text-code-green font-display hover:scale-110 transition-transform">Maker Space</a> </div> </div> <!-- Mobile Button (Hamburger only) --> <button id="mobile-menu-btn" class="md:hidden text-2xl z-50 relative focus:outline-none" aria-label="Abrir menú"> <span id="open-icon">☰</span> </button> </div> <!-- Mobile Backdrop --> <div id="mobile-backdrop" class="fixed inset-0 bg-black/50 z-[90] hidden transition-opacity duration-300 backdrop-blur-sm md:hidden"></div> <!-- Mobile Menu Drawer (Sidebar) --> <div id="mobile-menu" class="fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-[#F5F2EB] z-[100] flex flex-col pt-8 px-8 space-y-6 transform translate-x-full transition-transform duration-300 shadow-2xl md:hidden overflow-y-auto border-l-4 border-att-black"> <!-- Drawer Header with Close Button --> <div class="flex justify-between items-center border-b-2 border-att-black/10 pb-4 mb-2"> <span class="font-bold text-lg tracking-widest text-brand-red">MENÚ</span> <button id="close-menu-btn" class="text-3xl leading-none hover:text-brand-red focus:outline-none">
&times;
</button> </div> <a href="/#hero" class="mobile-link text-xl font-bold uppercase hover:text-brand-red border-b border-gray-300 pb-2">Inicio</a> <a href="/#nosotros" class="mobile-link text-xl font-bold uppercase hover:text-brand-red border-b border-gray-300 pb-2">Nosotros</a> <a href="/#filosofia" class="mobile-link text-xl font-bold uppercase hover:text-brand-red border-b border-gray-300 pb-2">Misión</a> <div class="h-2"></div> <a href="/att" class="mobile-link text-lg text-att-black font-bold border-2 border-black px-4 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:shadow-none transition-all text-center rounded-sm bg-white flex items-center justify-center gap-3"> <div class="w-6 h-6"> ${renderComponent($$result, "Image", $$Image, { "src": attLogo, "alt": "ATT", "class": "w-full h-full object-contain" })} </div>
Academia
</a> <a href="/codesg" class="mobile-link text-lg text-code-dark font-display border-2 border-black px-4 py-3 bg-white shadow-[4px_4px_0px_0px_#2A9D8F] hover:translate-x-1 hover:shadow-none transition-all text-center rounded-sm flex items-center justify-center gap-3"> <div class="w-6 h-6"> ${renderComponent($$result, "Image", $$Image, { "src": codeLogo, "alt": "CODE.SG", "class": "w-full h-full object-contain rounded-sm" })} </div>
Maker Space
</a> <div class="mt-auto pb-8 text-xs text-gray-400 font-mono text-center">
ATT / CODE.SG<br>
v1.0
</div> </div> </nav> ${renderScript($$result, "C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/components/shared/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/components/shared/Navbar.astro", void 0);

const $$Astro = createAstro("https://sitio-att-code-sg.vercel.app");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const values = [
    {
      title: "Rigor",
      desc: "La ingenier\xEDa no admite atajos. Ense\xF1amos con precisi\xF3n t\xE9cnica.",
      icon: "\u{1F4D0}"
    },
    {
      title: "Creatividad",
      desc: "La teor\xEDa sin aplicaci\xF3n es letra muerta. Construimos para entender.",
      icon: "\u{1F4A1}"
    },
    {
      title: "Comunidad",
      desc: "El conocimiento crece cuando se comparte. C\xF3digo abierto, mente abierta.",
      icon: "\u{1F91D}"
    }
  ];
  return renderTemplate`<html lang="es" class="scroll-smooth"> <head>${renderComponent($$result, "SEO", $$SEO, { "title": "Ingenier\xEDa Real", "description": "Academia Tecnol\xF3gica de Toluca y CODE.SG. Formaci\xF3n rigurosa y creatividad maker en un solo lugar." })}${renderHead()}</head> <body class="bg-brand-cream text-att-black font-sans antialiased"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <section id="hero" class="relative w-full h-screen flex flex-col md:flex-row pt-16"> <a href="/att" class="group relative flex-1 flex flex-col items-center justify-center bg-brand-cream border-r-4 border-brand-red hover:flex-[1.5] transition-all duration-500 overflow-hidden cursor-pointer"> <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(#1A1A1A 1px, transparent 1px); background-size: 20px 20px;"></div> <div class="z-10 text-center transition-transform group-hover:scale-105"> <div class="w-32 h-32 mb-6 mx-auto"> ${renderComponent($$result, "Image", $$Image, { "src": attLogo, "alt": "ATT Logo", "class": "w-full h-full object-contain drop-shadow-xl", "loading": "eager" })} </div> <h2 class="font-sans font-black text-5xl tracking-tighter">
ATT
</h2> <p class="mt-2 text-sm tracking-widest uppercase">
Academia Tecnológica
</p> <span class="mt-6 inline-block px-6 py-2 bg-att-black text-white text-xs font-bold uppercase group-hover:bg-brand-red transition-colors">Entrar al Aula</span> </div> </a> <a href="/codesg" class="group relative flex-1 flex flex-col items-center justify-center bg-brand-cream hover:flex-[1.5] transition-all duration-500 overflow-hidden cursor-pointer"> <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#2A9D8F 2px, transparent 2px); background-size: 24px 24px;"></div> <div class="z-10 text-center transition-transform group-hover:scale-105"> <div class="w-32 h-32 mb-6 mx-auto transform -rotate-6 group-hover:rotate-12 transition-transform"> ${renderComponent($$result, "Image", $$Image, { "src": codeLogo, "alt": "CODE.SG Logo", "class": "w-full h-full object-contain drop-shadow-retro shadow-black rounded-lg border-2 border-black bg-white", "loading": "eager" })} </div> <h2 class="font-display text-5xl text-code-dark">
CODE.SG
</h2> <p class="mt-2 font-display text-code-green text-lg">
Maker Space
</p> <span class="mt-6 inline-block px-6 py-2 border-2 border-black bg-white text-black font-display text-sm shadow-retro group-hover:shadow-none group-hover:translate-y-1 transition-all">Ir al Taller</span> </div> </a> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"> <span class="text-2xl text-att-black opacity-50">⬇</span> </div> </section> <section id="nosotros" class="py-24 px-6 border-t-4 border-black bg-white"> <div class="max-w-4xl mx-auto text-center"> <span class="text-brand-red font-bold tracking-widest uppercase text-sm mb-4 block">Sobre Nosotros</span> <h2 class="text-4xl md:text-5xl font-black mb-8 leading-tight">
Dos caras de la misma moneda:<br> <span class="bg-brand-cream px-2">Teoría y Práctica.</span> </h2> <p class="text-xl text-gray-600 leading-relaxed mb-12">
Hola, soy <strong>PauMag</strong>. Fundé este ecosistema
                    porque noté una desconexión en la ingeniería: o sobraba
                    teoría y faltaba realidad, o sobraba entusiasmo y faltaba
                    fundamento.
<br><br> <strong>ATT</strong> y <strong>CODE.SG</strong> nacen para cerrar
                    esa brecha. Aquí no elegimos entre ser un académico o un hacker.
<span class="underline decoration-brand-red decoration-4 underline-offset-2">Somos ambos.</span> </p> </div> </section> <section id="filosofia" class="py-24 px-6 bg-att-black text-brand-cream relative overflow-hidden"> <div class="absolute top-0 right-0 w-64 h-64 bg-brand-red rounded-full blur-[100px] opacity-20"></div> <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"> <div class="space-y-12"> <div> <h3 class="text-2xl font-bold text-white mb-4 flex items-center gap-3"> <span class="text-brand-red">01.</span> Misión
</h3> <p class="text-lg opacity-80 border-l-2 border-gray-700 pl-6">
Democratizar la educación tecnológica de alto nivel,
                            proveyendo bases teóricas sólidas y fomentando la
                            experimentación práctica sin miedo al error.
</p> </div> <div> <h3 class="text-2xl font-bold text-white mb-4 flex items-center gap-3"> <span class="text-code-green">02.</span> Visión
</h3> <p class="text-lg opacity-80 border-l-2 border-gray-700 pl-6">
Convertirnos en el referente latinoamericano de la
                            "Ingeniería Maker", creando una comunidad capaz de
                            resolver problemas complejos con soluciones
                            creativas.
</p> </div> </div> <div class="grid gap-6"> ${values.map((val) => renderTemplate`<div class="bg-[#2a2a2a] p-6 rounded-sm border border-gray-700 hover:border-brand-red transition-colors group"> <div class="flex items-start gap-4"> <span class="text-3xl bg-black w-12 h-12 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform"> ${val.icon} </span> <div> <h4 class="font-bold text-white text-lg mb-1"> ${val.title} </h4> <p class="text-sm text-gray-400"> ${val.desc} </p> </div> </div> </div>`)} </div> </div> </section> <footer class="bg-brand-cream border-t border-gray-300 py-12 px-6 text-center"> <div class="mb-8"> <span class="font-bold text-2xl tracking-tighter">ATT / CODE.SG</span> </div> <div class="flex justify-center gap-8 mb-8 font-bold text-sm"> <a href="#" class="hover:text-brand-red">YouTube</a> <a href="#" class="hover:text-brand-red">Instagram</a> <a href="#" class="hover:text-brand-red">GitHub</a> </div> <p class="text-xs text-gray-500">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Academia Tecnológica de Toluca.
                Todos los derechos reservados.<br>
Desarrollado con Astro y Café por PauMag.
</p> </footer> </body></html>`;
}, "C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/pages/index.astro", void 0);

const $$file = "C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
