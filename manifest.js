const { settings } = require('./settings.js')

const manifest = {
  server: {
    host: 'localhost',
    port: settings.port
  },
  register: {
    plugins: [
      {
        plugin: './apps/hello/index.js'
      }
    ],
    options: {
      routes: { prefix: '/v1' }
    }
  }
}

module.exports = manifest
