const contentModules = new Map([
["src/content/cursos/gauss-jordan.mdoc", () => import('./gauss-jordan_DfF0hu1s.mjs')],
["src/content/cursos/hola-mundo att.mdoc", () => import('./hola-mundo att_DO1M378O.mjs')],
["src/content/cursos/integracion-por-cambio-de-variable.mdoc", () => import('./integracion-por-cambio-de-variable_dx6Q3IsY.mjs')],
["src/content/maker/robot-sumo.mdoc", () => import('./robot-sumo_B5R_7Fq-.mjs')],
["src/content/cursos/operaciones-matrices.mdoc", () => import('./operaciones-matrices_C_DrNVc0.mjs')]]);

export { contentModules as default };
