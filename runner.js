const Glue = require('glue')
const manifest = require('./manifest.js')

const compose = async () => {
  return Glue.compose(manifest, { relativeTo: __dirname })
}

;(async ()=> {
  const server = await compose()
  await server.start()
  console.log('server is running...', server.info.uri)
})()
