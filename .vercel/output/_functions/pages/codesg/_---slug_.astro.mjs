/* empty css                                                   */
import { d as createAstro, c as createComponent, r as renderComponent, e as renderHead, b as addAttribute, f as renderSlot, a as renderTemplate } from '../../chunks/astro/server_DTypCvEY.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_DT8awAy3.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_Cp6_kJuj.mjs';
import { c as codeLogo } from '../../chunks/logo_sau3nNta.mjs';
import { $ as $$SEO } from '../../chunks/SEO_CoYRQnFR.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://sitio-att-code-sg.vercel.app");
const $$CodePostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CodePostLayout;
  const { frontmatter } = Astro2.props;
  const title = frontmatter?.title || "Proyecto CODE.SG";
  const description = frontmatter?.description || "Proyecto Maker de CODE.SG.";
  const image = frontmatter?.image;
  const status = frontmatter?.status || "En Progreso";
  const tags = frontmatter?.tags || ["Maker", "DIY"];
  const pubDate = frontmatter?.pubDate ? new Date(frontmatter.pubDate).toLocaleDateString() : "Hoy";
  const resources = frontmatter.resources || [];
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "image": image, "article": true })}${renderHead()}</head> <body class="bg-brand-cream text-att-black font-sans antialiased selection:bg-code-green selection:text-white"> <div class="fixed inset-0 opacity-10 pointer-events-none z-0" style="background-image: radial-gradient(#264653 2px, transparent 2px); background-size: 24px 24px;"></div> <nav class="relative z-50 border-b-4 border-black bg-code-green py-4 px-6"> <div class="max-w-6xl mx-auto flex justify-between items-center"> <div class="flex items-center gap-3"> <div class="bg-white border-2 border-black h-12 w-12 flex items-center justify-center shadow-retro shrink-0 overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": codeLogo, "alt": "CODE.SG Logo", "class": "w-full h-auto object-contain", "loading": "eager" })} </div> <span class="font-display text-2xl text-white drop-shadow-md tracking-wide">CODE.SG</span> </div> <a href="/" class="bg-white px-4 py-2 border-2 border-black font-display text-sm hover:shadow-retro transition-all hover:-translate-y-1 hover:bg-brand-red hover:text-white">
SALIR DEL TALLER
</a> </div> </nav> <main class="relative z-10 max-w-5xl mx-auto p-6 md:p-12"> <header class="mb-12 text-center md:text-left relative"> <div class="absolute -top-6 right-0 md:right-10 transform rotate-6 animate-pulse"> <span${addAttribute(`
                    px-6 py-2 border-2 border-black font-display text-lg uppercase shadow-retro text-white
                    ${status === "Terminado" ? "bg-code-green" : "bg-brand-red"}
                `, "class")}> ${status} </span> </div> <div class="flex flex-wrap gap-2 mb-4 justify-center md:justify-start"> ${tags.map((tag) => renderTemplate`<span class="bg-brand-cream border border-black px-2 py-1 text-xs font-bold font-mono uppercase">
#${tag} </span>`)} </div> <h1 class="font-display text-5xl md:text-7xl text-code-dark mb-4 drop-shadow-sm leading-none"> ${title} </h1> <p class="font-mono text-sm text-gray-500 bg-white inline-block px-2 border border-black">
Log de fecha: ${pubDate} </p> </header> <div class="grid grid-cols-1 md:grid-cols-12 gap-8"> <article class="md:col-span-8"> <div class="bg-white border-4 border-black p-8 shadow-retro
                    prose prose-lg max-w-none
                    prose-headings:font-display prose-headings:text-code-dark
                    prose-a:text-code-green prose-a:font-black prose-a:decoration-4 prose-a:underline-offset-2
                    prose-blockquote:border-l-8 prose-blockquote:border-code-green prose-blockquote:bg-gray-100 prose-blockquote:p-4 prose-blockquote:not-italic prose-blockquote:font-display
                    prose-img:border-2 prose-img:border-black prose-img:shadow-retro prose-img:rotate-1 hover:prose-img:rotate-0 prose-img:transition-transform
                    prose-pre:border-2 prose-pre:border-black prose-pre:bg-[#2d2d2d] prose-pre:rounded-none"> ${renderSlot($$result, $$slots["default"])} </div> </article> <aside class="md:col-span-4 space-y-6"> <div class="bg-[#FFF9C4] border-2 border-black p-6 shadow-retro transform -rotate-1"> <h3 class="font-display text-xl mb-4 border-b-2 border-black pb-1">
📦 Materiales
</h3> <ul class="list-disc list-inside space-y-2 font-mono text-sm"> <li>Arduino Nano / ESP32</li> <li>Filamento PLA+</li> <li>Tornillos M3 x 10mm</li> <li>Café (Mucho café)</li> </ul> </div> ${resources.length > 0 && renderTemplate`<div class="bg-white border-2 border-black p-6 shadow-retro"> <h3 class="font-display text-xl mb-4 flex items-center gap-2">
💾 Descargas
</h3> <div class="space-y-3"> ${resources.map((res) => renderTemplate`<a${addAttribute(res.url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`
                                            group flex items-center justify-center gap-3 w-full py-3 border-2 border-black font-display text-sm transition-all
                                            ${res.type === "github" ? "bg-[#24292e] text-white hover:bg-black" : ""}
                                            ${res.type === "download" ? "bg-code-green text-white hover:bg-code-dark" : ""}
                                            ${res.type === "video" ? "bg-brand-red text-white hover:bg-red-700" : ""}
                                            ${res.type === "doc" ? "bg-white text-black hover:bg-gray-100" : ""}
                                            hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1
                                        `, "class")}> ${res.type === "github" && renderTemplate`<span>😺</span>`} ${res.type === "download" && renderTemplate`<span>⬇️</span>`} ${res.type === "video" && renderTemplate`<span>📺</span>`} ${res.type === "doc" && renderTemplate`<span>📄</span>`} <span>${res.label}</span> </a>`)} </div> </div>`} </aside> </div> </main> <footer class="mt-20 py-8 bg-black text-white text-center font-mono text-xs">
// CODE.SG_SYSTEMS // BUILD_VER_2.0 // EOF
</footer> </body></html>`;
}, "C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/layouts/CodePostLayout.astro", void 0);

const $$Astro = createAstro("https://sitio-att-code-sg.vercel.app");
async function getStaticPaths() {
  const makerEntries = await getCollection("maker");
  return makerEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "CodePostLayout", $$CodePostLayout, { "frontmatter": entry.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/pages/codesg/[...slug].astro", void 0);

const $$file = "C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/pages/codesg/[...slug].astro";
const $$url = "/codesg/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
