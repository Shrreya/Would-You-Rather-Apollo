import React from "react"

import { ApolloClient } from "apollo-client"
import { ApolloProvider } from "react-apollo"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import { setContext } from "apollo-link-context"

import App from "./App"

const httpLink = createHttpLink({
  uri: "http://localhost:8050/api"
})  

const authLink = setContext(() => {
  const token = localStorage.getItem("jwtToken")
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : ""
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
