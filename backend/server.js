require("dotenv").config({ path: ".env.development" })
const express = require("express")
const { ApolloServer } = require("apollo-server-express")
const mongoose = require("mongoose")

const typeDefs = require("./schemas/index")
const resolvers = require("./resolvers/index")
const DB_URI = process.env.MONGODB
const port = process.env.PORT

mongoose.set("useCreateIndex", true)
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once("open", () => console.log("Connected to MongoDB"))
mongoose.connection.on("error", error => console.error(error))

const apolloServer = new ApolloServer({ typeDefs, resolvers })

const app = express()
apolloServer.applyMiddleware({ app })

app.listen({ port }, () => {
  console.log(
    `Server running on http://localhost:${port}${apolloServer.graphqlPath}`
  )
})
