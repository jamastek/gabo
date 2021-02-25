// import {PrismicLink} from "apollo-link-prismic"
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloLink } from "apollo-link"
import { createHttpLink } from "apollo-link-http"

const httpLink = createHttpLink({
  uri: 'https://countries.trevorblades.com/',
});

const link = ApolloLink.from([httpLink])

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});