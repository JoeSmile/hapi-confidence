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
  }
}
const store = new Store(settings)
console.log(store.get('/', criteria))
// exports.settings = store.get('/', criteria)
module.exports = {
  settings: store.get('/', criteria)
}
