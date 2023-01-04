import { split } from '@apollo/client/core';
import { getMainDefinition } from '@apollo/client/utilities'
import httpLink from './http.js'
import sseLink from './sse.js'

const apolloLink = split(
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

export default apolloLink
