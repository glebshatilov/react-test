import { split, ApolloLink, from } from '@apollo/client/core'
import { getMainDefinition } from '@apollo/client/utilities'
import { getToken } from '@/utils/token.js'
import httpLink from './http.js'
import sseLink from './sse.js'

const mainLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  sseLink,
  httpLink
)

const authHeaderLink = new ApolloLink((operation, forward) => {
  operation.setContext(
    ({ headers = {} }) => {
      const token = getToken()

      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : null
        }
      }
    }
  )

  return forward(operation)
})

export default from([authHeaderLink, mainLink])
