const autoProcess = require("svelte-preprocess");

module.exports = {
	preprocess: autoProcess({ postcss: true }),
    createPreproccessor: (dev) => autoProcess({ postcss: true, sourceMap: dev })
};
