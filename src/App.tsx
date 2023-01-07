import { RouterProvider } from 'react-router-dom'
import router from './router'

import { ApolloProvider } from '@apollo/client'
import apolloClient from './services/apollo/config/client.js'
import CssBaseline from '@mui/material/CssBaseline'
import { AuthContextProvider } from '@/contexts/AuthContext.js'

function App() {
  return (
    <AuthContextProvider>
      <ApolloProvider client={apolloClient}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ApolloProvider>
    </AuthContextProvider>
  )
}

export default App
