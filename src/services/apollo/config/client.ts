import { ApolloClient, InMemoryCache } from '@apollo/client'
import apolloLink from './link/index.js'

const apolloClient = new ApolloClient({
  link: apolloLink,
  cache: new InMemoryCache()
})

export default apolloClient
