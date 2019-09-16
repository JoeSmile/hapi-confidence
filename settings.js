const { Store } = require('confidence')

const { env } = process
const criteria = {
  env: env.NODE_ENV,
  random: 20
}
const settings = {
  platform: {
    $filter: 'env',
    development: 'this is DEV environment',
    qa: 'this is in QA environment',
    production: 'this is in PRO environment',
    $default: 'this is in LOCAL environment'
  },
  "key3": {
    "$filter": "random",
    "$range": [
        { "limit": 10, "value": 4 },
        { "limit": 20, "value": 5 }
    ],
    "$default": 6
}
}
const store = new Store(settings)
console.log(store.get('/', criteria))
module.exports = {
  settings: store.get('/', criteria)
}
