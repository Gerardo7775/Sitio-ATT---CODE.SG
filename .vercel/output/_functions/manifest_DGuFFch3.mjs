import 'piccolore';
import { x as decodeKey } from './chunks/astro/server_DTypCvEY.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_dnOBeSKd.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/HP/3D%20Objects/Sitio%20ATT%20&%20CODE.SG/","cacheDir":"file:///C:/Users/HP/3D%20Objects/Sitio%20ATT%20&%20CODE.SG/node_modules/.astro/","outDir":"file:///C:/Users/HP/3D%20Objects/Sitio%20ATT%20&%20CODE.SG/dist/","srcDir":"file:///C:/Users/HP/3D%20Objects/Sitio%20ATT%20&%20CODE.SG/src/","publicDir":"file:///C:/Users/HP/3D%20Objects/Sitio%20ATT%20&%20CODE.SG/public/","buildClientDir":"file:///C:/Users/HP/3D%20Objects/Sitio%20ATT%20&%20CODE.SG/dist/client/","buildServerDir":"file:///C:/Users/HP/3D%20Objects/Sitio%20ATT%20&%20CODE.SG/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"att/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/att","isIndex":true,"type":"page","pattern":"^\\/att\\/?$","segments":[[{"content":"att","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/att/index.astro","pathname":"/att","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"codesg/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/codesg","isIndex":true,"type":"page","pattern":"^\\/codesg\\/?$","segments":[[{"content":"codesg","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/codesg/index.astro","pathname":"/codesg","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/keystatic/[...params]","pattern":"^\\/api\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-api.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/keystatic-astro-page.G_qevF8e.css"}],"routeData":{"type":"page","isIndex":false,"route":"/keystatic/[...params]","pattern":"^\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-astro-page.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"site":"https://sitio-att-code-sg.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/pages/att/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/pages/codesg/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/pages/att/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/pages/codesg/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/att/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/att/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/codesg/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/codesg/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/node_modules/@astrojs/markdoc/components/Renderer.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/node_modules/@astrojs/markdoc/components/index.ts",{"propagation":"in-tree","containsHead":false}],["C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/content/cursos/gauss-jordan.mdoc",{"propagation":"in-tree","containsHead":false}],["C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/content/cursos/gauss-jordan.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:\\Users\\HP\\3D Objects\\Sitio ATT & CODE.SG\\.astro\\content-modules.mjs",{"propagation":"in-tree","containsHead":false}],["C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/node_modules/astro/dist/content/runtime.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/content/cursos/hola-mundo att.mdoc",{"propagation":"in-tree","containsHead":false}],["C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/content/cursos/hola-mundo att.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/content/cursos/integracion-por-cambio-de-variable.mdoc",{"propagation":"in-tree","containsHead":false}],["C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/content/cursos/integracion-por-cambio-de-variable.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/content/cursos/operaciones-matrices.mdoc",{"propagation":"in-tree","containsHead":false}],["C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/content/cursos/operaciones-matrices.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/content/maker/robot-sumo.mdoc",{"propagation":"in-tree","containsHead":false}],["C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/content/maker/robot-sumo.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-api@_@js":"pages/api/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/att/index@_@astro":"pages/att.astro.mjs","\u0000@astro-page:src/pages/att/[...slug]@_@astro":"pages/att/_---slug_.astro.mjs","\u0000@astro-page:src/pages/codesg/index@_@astro":"pages/codesg.astro.mjs","\u0000@astro-page:src/pages/codesg/[...slug]@_@astro":"pages/codesg/_---slug_.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro":"pages/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DGuFFch3.mjs","C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BFLqoLNI.mjs","C:\\Users\\HP\\3D Objects\\Sitio ATT & CODE.SG\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\Users\\HP\\3D Objects\\Sitio ATT & CODE.SG\\.astro\\content-modules.mjs":"chunks/content-modules_6_lKHbNi.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_Du0QPfgm.mjs","C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/content/cursos/integracion-por-cambio-de-variable.mdoc?astroPropagatedAssets":"chunks/integracion-por-cambio-de-variable_dx6Q3IsY.mjs","C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/content/cursos/hola-mundo att.mdoc?astroPropagatedAssets":"chunks/hola-mundo att_DO1M378O.mjs","C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/content/cursos/gauss-jordan.mdoc?astroPropagatedAssets":"chunks/gauss-jordan_DfF0hu1s.mjs","C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/content/maker/robot-sumo.mdoc?astroPropagatedAssets":"chunks/robot-sumo_B5R_7Fq-.mjs","C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/content/cursos/operaciones-matrices.mdoc?astroPropagatedAssets":"chunks/operaciones-matrices_C_DrNVc0.mjs","C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/content/cursos/integracion-por-cambio-de-variable.mdoc":"chunks/integracion-por-cambio-de-variable_DW-IBxFH.mjs","C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/content/cursos/hola-mundo att.mdoc":"chunks/hola-mundo att_Dx0J35NB.mjs","C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/content/cursos/gauss-jordan.mdoc":"chunks/gauss-jordan_DS_v6CpL.mjs","C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/content/maker/robot-sumo.mdoc":"chunks/robot-sumo_DaVm7QNh.mjs","C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/content/cursos/operaciones-matrices.mdoc":"chunks/operaciones-matrices_Dx0J35NB.mjs","C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/node_modules/@keystatic/astro/internal/keystatic-page.js":"_astro/keystatic-page.C6AC5slU.js","@astrojs/react/client.js":"_astro/client.Bdtyuut-.js","C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/components/shared/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.dIPUOiSZ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/components/shared/Navbar.astro?astro&type=script&index=0&lang.ts","const o=document.getElementById(\"mobile-menu-btn\"),c=document.getElementById(\"close-menu-btn\"),t=document.getElementById(\"mobile-menu\"),e=document.getElementById(\"mobile-backdrop\"),l=document.querySelectorAll(\".mobile-link\");function s(){t?.classList.remove(\"translate-x-full\"),e?.classList.remove(\"hidden\"),document.body.classList.add(\"overflow-hidden\")}function n(){t?.classList.add(\"translate-x-full\"),e?.classList.add(\"hidden\"),document.body.classList.remove(\"overflow-hidden\")}o?.addEventListener(\"click\",s);c?.addEventListener(\"click\",n);e?.addEventListener(\"click\",n);l.forEach(d=>{d.addEventListener(\"click\",n)});"]],"assets":["/_astro/logo.DYRCStJU.jpeg","/_astro/logo.L2--i-cg.png","/_astro/keystatic-astro-page.G_qevF8e.css","/favicon.png","/favicon.svg","/images/default-social.jpg","/_astro/client.Bdtyuut-.js","/_astro/index.DwQBafx9.js","/_astro/keystatic-page.C6AC5slU.js","/images/att/gauss-jordan/image.jpg","/images/att/hola-mundo att/image.jpg","/images/att/integracion-por-cambio-de-variable/image.png","/images/att/operaciones-matrices/image.jpg","/att/index.html","/codesg/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"KO1xso3y+yZzmDJrNYI1Zi6xW6k27TzlmAKtKrzCEZ4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
