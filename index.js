const dotenv = require('dotenv');

module.exports = function (sails) {
  return {
    defaults: {
      __configKey__: {
        connections: {
          adapter: 'DB_ADAPTER',
          host: 'DB_HOST',
          user: 'DB_USER',
          password: 'DB_PASSWORD',
          database: 'DB_NAME'
        },
        models: {
          connection: 'DB_CONNECTION'
        }
      },
    },

    initialize(cb) {
      dotenv.load();
      const configKey = this.configKey;

      let connectionName = process.env[sails.config[configKey].models.connection];
      let connectionsOpts = sails.config[configKey].connections;

      for(let prop in connectionsOpts) {
        let envName = connectionsOpts[prop];

        connectionsOpts[prop] = process.env[envName]
      }

      sails.config.connections[connectionName] = connectionsOpts;

      sails.config.models.connection = connectionName;

      return cb();
    }
  }
}
