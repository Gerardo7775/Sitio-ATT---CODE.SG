const codeLogo = new Proxy({"src":"/_astro/logo.DYRCStJU.jpeg","width":1080,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/assets/images/codesg/logo.jpeg";
							}
							
							return target[name];
						}
					});

export { codeLogo as c };
