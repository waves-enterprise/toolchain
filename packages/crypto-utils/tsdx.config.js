const nodePolyfills = require('rollup-plugin-polyfill-node');


module.exports = {
    rollup(config, options) {



        console.log(config.external('buffer'))
        config.plugins.push(
            nodePolyfills({
                include: ['stream']
            })
        );
        return config;
    },
};