import { RouterProvider } from 'react-router-dom'
import router from './router'

import { ApolloProvider } from '@apollo/client'
import apolloClient from './services/apollo/config/client.js'
import CssBaseline from '@mui/material/CssBaseline'
import { AuthContextProvider } from '@/contexts/AuthContext.js'
import ReduxProvider from '@/store/ReduxProvider.js'
import { MessagesContextProvider } from '@/contexts/MessagesContext.js'

function App() {
  return (
    <ReduxProvider>
      <AuthContextProvider>
        <ApolloProvider client={apolloClient}>
          <CssBaseline />
          <MessagesContextProvider>
            <RouterProvider router={router} />
          </MessagesContextProvider>
        </ApolloProvider>
      </AuthContextProvider>
    </ReduxProvider>
  )
}

export default App
