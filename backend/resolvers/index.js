const userResolvers = require('./User')
const questionResolvers = require('./Question')

const resolvers = [userResolvers, questionResolvers]

module.exports = resolvers