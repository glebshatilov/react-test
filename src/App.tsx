import { RouterProvider } from 'react-router-dom'
import router from './router'

import { ApolloProvider } from '@apollo/client'
import apolloClient from './services/apollo/config/client.js'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  )
}

export default App
