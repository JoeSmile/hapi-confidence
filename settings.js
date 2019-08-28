const { Store } = require('confidence')

const { env } = process
const criteria = {
  env: env.NODE_ENV
}
const settings = {
  platform: {
    $filter: 'env',
    development: 'this is DEV environment',
    qa: 'this is in QA environment',
    production: 'this is in PRO environment',
    $default: 'this is in LOCAL environment'
  },
  port: {
    $filter: 'env',
    development: 3333,
    qa: 4444,
    production: 5555,
    $default: 3000
  }
}
const store = new Store(settings)
console.log(store.get('/', criteria))
// exports.settings = store.get('/', criteria)
module.exports = {
  settings: store.get('/', criteria)
}
