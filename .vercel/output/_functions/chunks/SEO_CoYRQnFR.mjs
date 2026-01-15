import { d as createAstro, c as createComponent, b as addAttribute, a as renderTemplate } from './astro/server_DTypCvEY.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://sitio-att-code-sg.vercel.app");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description,
    // CAMBIO AQUÍ: Apuntamos a tu nueva imagen social en lugar del favicon
    image = "/images/default-social.jpg",
    article = false
  } = Astro2.props;
  const siteUrl = Astro2.site ? Astro2.site.href : "http://localhost:4321/";
  const canonicalURL = new URL(Astro2.url.pathname, siteUrl);
  const socialImageURL = new URL(image, siteUrl);
  const fullTitle = `${title} | ATT & CODE.SG`;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="google-site-verification" content="Popdi7rT3zpThgpNFJMTn3_YuZNva9-7r724rpvCGu4"><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${fullTitle}</title><meta name="title"${addAttribute(fullTitle, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(article ? "article" : "website", "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(fullTitle, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(socialImageURL, "content")}><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(fullTitle, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(socialImageURL, "content")}>`;
}, "C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/components/shared/SEO.astro", void 0);

export { $$SEO as $ };
