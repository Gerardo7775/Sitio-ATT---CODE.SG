import { d as createAstro, c as createComponent, r as renderComponent, e as renderHead, f as renderSlot, a as renderTemplate } from './astro/server_DTypCvEY.mjs';
import 'piccolore';
import { $ as $$SEO } from './SEO_CoYRQnFR.mjs';

const $$Astro = createAstro("https://sitio-att-code-sg.vercel.app");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Ingenier\xEDa Real",
    description = "Academia Tecnol\xF3gica de Toluca y CODE.SG.",
    image
  } = Astro2.props;
  return renderTemplate`<html lang="es" class="scroll-smooth"> <head>${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "image": image })}${renderHead()}</head> <body class="bg-brand-cream text-att-black min-h-screen"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
