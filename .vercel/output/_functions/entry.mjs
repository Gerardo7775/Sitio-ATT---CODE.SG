import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_nFVS-0s2.mjs';
import { manifest } from './manifest_FMsvM5Pj.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page2 = () => import('./pages/att.astro.mjs');
const _page3 = () => import('./pages/att/_---slug_.astro.mjs');
const _page4 = () => import('./pages/codesg.astro.mjs');
const _page5 = () => import('./pages/codesg/_---slug_.astro.mjs');
const _page6 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page1],
    ["src/pages/att/index.astro", _page2],
    ["src/pages/att/[...slug].astro", _page3],
    ["src/pages/codesg/index.astro", _page4],
    ["src/pages/codesg/[...slug].astro", _page5],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4c6bfab6-370d-42fb-b685-bc7e710c50b4",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
