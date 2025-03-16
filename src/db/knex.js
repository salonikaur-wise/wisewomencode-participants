// By default, Jest will set NODE_ENV to test when you are running your tests.
const environment = process.env.NODE_ENV === 'test' ? 'test' : 'development'
const config = require('../../knexfile.js')[environment];
export default require('knex')(config);