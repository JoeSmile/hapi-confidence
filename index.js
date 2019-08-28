const Hapi = require('@hapi/hapi')
const { settings } = require('./settings.js')
const init = async () => {
  console.log('settings', settings)
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  })

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
