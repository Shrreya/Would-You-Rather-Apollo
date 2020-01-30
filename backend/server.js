const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const mongoose = require('mongoose')
const DB_URI = 'mongodb://localhost:27017/would-you-rather-db'
mongoose.set('useCreateIndex', true)
mongoose.connect(DB_URI, { useNewUrlParser: true })
mongoose.connection.once('open', () => console.log('Connected to MongoDB'))
mongoose.connection.on('error', error => console.error(error))

const typeDefs = require('./schemas/index')
const resolvers = require('./resolvers/index')
const server = new ApolloServer({ typeDefs, resolvers })

const app = express()
server.applyMiddleware({ app })
const port = 8000
app.listen({ port }, () => {
    console.log(`Server running on http://localhost:${port}${server.graphqlPath}`)
});

//Test Comment