const plugin = {
  name: 'hello',
  async register (server) {
    server.route([
      {
        method: 'GET',
        path: '/hello',
        handler: async(request, h) => {
          return h.response('hello')
        }
      }
    ])
  }
}
module.exports = {
  ...plugin
}
