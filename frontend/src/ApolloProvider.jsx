import React from "react"

import { ApolloClient } from "apollo-client"
import { ApolloProvider } from "react-apollo"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

import App from "./App"

const httpLink = createHttpLink({
  uri: "http://localhost:8000/graphql"
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
