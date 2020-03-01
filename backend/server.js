import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import { ApolloServer } from "apollo-server-express"
dotenv.config({ path: ".env.development" })

import typeDefs from "./schemas/index"
import resolvers from "./resolvers/index"
// Not using verifyUser yet, can pass things in context I think
const { verifyUser } = require("./helper/context/index")
const { MONGODB, PORT } = process.env

mongoose.set("useCreateIndex", true)
mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once("open", () => console.log("Connected to MongoDB"))
mongoose.connection.on("error", error => console.error(error))

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req })
})

const app = express()
// Not exactly sure what we need express.json for, something with body?
app.use(express.json())
app.use(cors())
apolloServer.applyMiddleware({ app, path: "/api" })

app.listen({ port: PORT }, () => {
  console.log(
    `Server running on http://localhost:${PORT}${apolloServer.graphqlPath}`
  )
})
