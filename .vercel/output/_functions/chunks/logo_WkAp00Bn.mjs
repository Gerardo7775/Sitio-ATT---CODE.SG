const attLogo = new Proxy({"src":"/_astro/logo.L2--i-cg.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/HP/3D Objects/Sitio ATT & CODE.SG/src/assets/images/att/logo.png";
							}
							
							return target[name];
						}
					});

export { attLogo as a };
