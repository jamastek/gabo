// import {PrismicLink} from "apollo-link-prismic"
import { ApolloClient, InMemoryCache, from, HttpLink } from "@apollo/client"
import fetch from "isomorphic-fetch"

const httpLink = new HttpLink({
  uri: "https://countries.trevorblades.com/",
  fetch,
})

const link = from([httpLink])

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})
