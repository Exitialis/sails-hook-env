const dotenv = require('dotenv');

module.exports = function (sails) {
    return {
        defaults: {
            __configKey__: {
                datastores: {
                    adapter: 'DB_ADAPTER',
                    url: 'DB_URL'
                }
            },
        },

        initialize(cb) {
            dotenv.load();
            const configKey = this.configKey;

            if (sails.hooks.orm) {
                let adapter = process.env[sails.config[configKey].datastores.adapter];
                let connectionUrl = process.env[sails.config[configKey].datastores.url];

                if (!sails.config.datastores) {
                    sails.config.datastores = {
                        default: {
                            adapter: adapter,
                            url: connectionUrl
                        }
                    }
                } else {
                    sails.config.datastores.default.adapter = adapter;
                    sails.config.datastores.default.url = connectionUrl;
                }
            }

            return cb();
        }
    }
}
