import {
  ApolloLink,
  Operation,
  FetchResult,
  Observable
} from '@apollo/client/core'
import { print } from 'graphql'
import { createClient, ClientOptions, Client } from 'graphql-sse'
import { getToken } from '@/utils/token.js'

class SSELink extends ApolloLink {
  private client: Client

  constructor(options: ClientOptions) {
    super()
    this.client = createClient(options)
  }

  public request(operation: Operation): Observable<FetchResult> {
    return new Observable((sink) => {
      return this.client.subscribe<FetchResult>(
        { ...operation, query: print(operation.query) },
        {
          next: sink.next.bind(sink),
          complete: sink.complete.bind(sink),
          error: sink.error.bind(sink)
        }
      )
    })
  }
}

const sseLink = new SSELink({
  url: import.meta.env.VITE_GRAPHQL_SSE_URI,
  // @ts-ignore
  headers: () => {
    const token = getToken()

    return {
      Authorization: token ? `Bearer ${token}` : null
    }
  }
})

export default sseLink
