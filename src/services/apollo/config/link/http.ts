import { HttpLink } from '@apollo/client/core'

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URI
})

export default httpLink
