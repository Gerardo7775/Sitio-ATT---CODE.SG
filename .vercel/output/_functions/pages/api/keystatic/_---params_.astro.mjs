import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { config as config$1, collection, fields, component } from '@keystatic/core';
import React from 'react';
export { renderers } from '../../../renderers.mjs';

function makeHandler(_config) {
  return async function keystaticAPIRoute(context) {
    var _context$locals, _ref, _config$clientId, _ref2, _config$clientSecret, _ref3, _config$secret;
    const envVarsForCf = (_context$locals = context.locals) === null || _context$locals === void 0 || (_context$locals = _context$locals.runtime) === null || _context$locals === void 0 ? void 0 : _context$locals.env;
    const handler = makeGenericAPIRouteHandler({
      ..._config,
      clientId: (_ref = (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_ID) !== null && _ref !== void 0 ? _ref : tryOrUndefined(() => {
        return "Ov23lilsdbQJGJ74S7i5";
      }),
      clientSecret: (_ref2 = (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_SECRET) !== null && _ref2 !== void 0 ? _ref2 : tryOrUndefined(() => {
        return "e51fa606e6e8ccfee5bfab843dc275252d716ca7";
      }),
      secret: (_ref3 = (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_SECRET) !== null && _ref3 !== void 0 ? _ref3 : tryOrUndefined(() => {
        return "atlas2005V2FWEF923WFRDDA";
      })
    }, {
      slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"
    });
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    let headersInADifferentStructure = /* @__PURE__ */ new Map();
    if (headers) {
      if (Array.isArray(headers)) {
        for (const [key, value] of headers) {
          if (!headersInADifferentStructure.has(key.toLowerCase())) {
            headersInADifferentStructure.set(key.toLowerCase(), []);
          }
          headersInADifferentStructure.get(key.toLowerCase()).push(value);
        }
      } else if (typeof headers.entries === "function") {
        for (const [key, value] of headers.entries()) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
        if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
          const setCookieHeaders2 = headers.getSetCookie();
          if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) {
            headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
          }
        }
      } else {
        for (const [key, value] of Object.entries(headers)) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
      }
    }
    const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
    headersInADifferentStructure.delete("set-cookie");
    if (setCookieHeaders) {
      for (const setCookieValue of setCookieHeaders) {
        var _options$sameSite;
        const {
          name,
          value,
          ...options
        } = parseString(setCookieValue);
        const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
        context.cookies.set(name, value, {
          domain: options.domain,
          expires: options.expires,
          httpOnly: options.httpOnly,
          maxAge: options.maxAge,
          path: options.path,
          sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
        });
      }
    }
    return new Response(body, {
      status,
      headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
    });
  };
}
function tryOrUndefined(fn) {
  try {
    return fn();
  } catch {
    return void 0;
  }
}

const config = config$1({
  storage: {
    kind: "github",
    repo: {
      owner: "Gerardo7775",
      name: "Sitio-ATT---CODE.SG"
    }
  },
  collections: {
    // --- SECCIÓN: ACADEMIA (ATT) ---
    cursos: collection({
      label: "🏛️ Cursos ATT",
      slugField: "title",
      path: "src/content/cursos/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Título del Curso" } }),
        description: fields.text({ label: "Descripción Corta", multiline: true }),
        pubDate: fields.date({ label: "Fecha de Publicación", validation: { isRequired: true } }),
        author: fields.text({ label: "Autor", defaultValue: "Ing. PauMag" }),
        category: fields.text({ label: "Categoría (Ej. Programación)" }),
        image: fields.image({
          label: "Portada del Curso",
          directory: "public/images/att",
          publicPath: "/images/att/"
        }),
        // 1. Galería de Imágenes (Carrusel)
        gallery: fields.array(
          fields.image({
            label: "Foto de Galería",
            directory: "public/images/att/gallery",
            publicPath: "/images/att/gallery/"
          }),
          {
            label: "Galería del Curso",
            itemLabel: (props) => "Imagen: " + props.value
          }
        ),
        // 2. Recursos y Descargas
        resources: fields.array(
          fields.object({
            label: fields.text({ label: "Texto del Botón (Ej. Ver en GitHub)" }),
            url: fields.url({ label: "Enlace (URL)" }),
            type: fields.select({
              label: "Tipo de Recurso",
              options: [
                { label: "Código 💻", value: "code" },
                { label: "Descarga ⬇️", value: "download" },
                { label: "Video 📺", value: "video" }
              ],
              defaultValue: "code"
            })
          }),
          {
            label: "Recursos y Descargas",
            itemLabel: (props) => props.fields.label.value || "Recurso"
          }
        ),
        content: fields.document({
          label: "Contenido del Tutorial",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "public/images/att/content",
            publicPath: "/images/att/content/"
          },
          // Component Blocks for ATT
          componentBlocks: {
            alert: component({
              label: "⚠️ Alerta",
              schema: {
                message: fields.text({ label: "Mensaje de Alerta" }),
                type: fields.select({
                  label: "Tipo",
                  options: [
                    { label: "Información", value: "info" },
                    { label: "Peligro", value: "danger" }
                  ],
                  defaultValue: "info"
                })
              },
              preview: (props) => {
                return React.createElement(
                  "div",
                  {
                    style: {
                      padding: "10px",
                      background: props.fields.type.value === "danger" ? "#fee" : "#eef",
                      border: "1px solid currentColor",
                      borderRadius: "4px"
                    }
                  },
                  React.createElement("strong", null, props.fields.type.value === "danger" ? "PELIGRO:" : "NOTA:"),
                  " ",
                  props.fields.message.value
                );
              }
            })
          }
        })
      }
    }),
    // --- SECCIÓN: MAKER (CODE.SG) ---
    maker: collection({
      label: "🧢 Proyectos CODE.SG",
      slugField: "title",
      path: "src/content/maker/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Nombre del Proyecto" } }),
        description: fields.text({ label: "Descripción Maker", multiline: true }),
        pubDate: fields.date({ label: "Fecha de Registro" }),
        status: fields.select({
          label: "Estado del Proyecto",
          options: [
            { label: "En Progreso 🟡", value: "En Progreso" },
            { label: "Terminado 🟢", value: "Terminado" },
            { label: "Prototipo 🔵", value: "Prototipo" }
          ],
          defaultValue: "En Progreso"
        }),
        tags: fields.array(
          fields.text({ label: "Tag" }),
          { label: "Etiquetas (Tags)", itemLabel: (props) => props.value }
        ),
        gallery: fields.array(
          fields.image({
            label: "Foto de Galería",
            directory: "public/images/codesg/gallery",
            publicPath: "/images/codesg/gallery/"
          }),
          {
            label: "Galería del Proyecto",
            itemLabel: (props) => "Imagen: " + props.value
          }
        ),
        // Lista de Materiales (Nuevo)
        materials: fields.array(
          fields.text({ label: "Material" }),
          {
            label: "Lista de Materiales",
            itemLabel: (props) => props.value
          }
        ),
        resources: fields.array(
          fields.object({
            label: fields.text({ label: "Texto del Botón (Ej. Ver en GitHub)" }),
            url: fields.text({ label: "Enlace (URL)" }),
            type: fields.select({
              label: "Tipo de Recurso",
              options: [
                { label: "GitHub 😺", value: "github" },
                { label: "Descarga ⬇️", value: "download" },
                { label: "Video 📺", value: "video" },
                { label: "Documento 📄", value: "doc" }
              ],
              defaultValue: "download"
            })
          }),
          {
            label: "Recursos y Descargas",
            itemLabel: (props) => props.fields.label.value || "Recurso"
          }
        ),
        content: fields.document({
          label: "Bitácora del Proyecto",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "public/images/codesg/content",
            publicPath: "/images/codesg/content/"
          },
          // 3. Componentes Personalizados
          componentBlocks: {
            alert: component({
              label: "⚠️ Alerta",
              schema: {
                message: fields.text({ label: "Mensaje de Alerta" }),
                type: fields.select({
                  label: "Tipo",
                  options: [
                    { label: "Información", value: "info" },
                    { label: "Peligro", value: "danger" }
                  ],
                  defaultValue: "info"
                })
              },
              preview: (props) => {
                return React.createElement(
                  "div",
                  {
                    style: {
                      padding: "10px",
                      background: props.fields.type.value === "danger" ? "#fee" : "#eef",
                      border: "1px solid currentColor",
                      borderRadius: "4px"
                    }
                  },
                  React.createElement("strong", null, props.fields.type.value === "danger" ? "PELIGRO:" : "NOTA:"),
                  " ",
                  props.fields.message.value
                );
              }
            })
          }
        })
      }
    })
  }
});

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL,
  all,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
