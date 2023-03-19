import { RouterProvider } from 'react-router-dom'
import router from './router'

import { ApolloProvider } from '@apollo/client'
import apolloClient from './services/apollo/config/client.js'
import CssBaseline from '@mui/material/CssBaseline'
import ReduxProvider from '@/store/ReduxProvider.js'
import { AuthContextProvider, RequireNameProvider } from '@/features/auth'
import { MessagesContextProvider } from '@/features/messages'
import { ThemeProvider } from '@primer/react'

import './assets/global.scss'

function App() {
  return (
    <ThemeProvider>
      <ReduxProvider>
        <ApolloProvider client={apolloClient}>
          <AuthContextProvider>
            <CssBaseline />
            <MessagesContextProvider>
              <RequireNameProvider>
                <RouterProvider router={router} />
              </RequireNameProvider>
            </MessagesContextProvider>
          </AuthContextProvider>
        </ApolloProvider>
      </ReduxProvider>
    </ThemeProvider>
  )
}

export default App
