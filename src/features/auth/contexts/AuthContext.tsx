import { createContext, useState, ReactNode } from 'react'
import { getToken, clearToken, setToken } from '@/utils/token.js'
import { useQuery } from '@apollo/client'
// @ts-ignore
import { SignedInUserInfo } from '@/services/apollo/queries/users.graphql'

interface Props {
  children: ReactNode
}

interface AuthContextInterface {
  isSignedIn: boolean
  signOut: () => void
  signInWithToken: (token: string) => void
  signedInUserId: string | null
  signedInUser: any
  loading: boolean
}

const hasToken = Boolean(getToken())

const AuthContext = createContext<AuthContextInterface>(
  {
    isSignedIn: hasToken,
    signOut: () => ({}),
    signInWithToken: () => ({}),
    signedInUserId: null,
    signedInUser: null,
    loading: false
  }
)

function AuthContextProvider({ children }: Props) {
  const [isSignedIn, setSignedIn] = useState(hasToken)
  const { data, loading, error } = useQuery(SignedInUserInfo, {
    skip: !isSignedIn,
    fetchPolicy: 'cache-and-network'
  })

  if (error) {
    if (error.graphQLErrors) {
      const unauthorizedError = error.graphQLErrors.find(e => e.extensions.code === 'UNAUTHORIZED')

      if (unauthorizedError) {
        signOut()
      }
    }
  }

  const signedInUser = data?.user || null
  const signedInUserId = data?.user?.id || null

  function signOut() {
    clearToken()
    setTimeout(() => { // ToDo: why errors in console without timeout?
      setSignedIn(false)
    })
  }

  function signInWithToken(token: string) {
    setToken(token)
    setSignedIn(true)
  }

  return (
    <AuthContext.Provider value={{ isSignedIn, signOut, signInWithToken, signedInUserId, signedInUser, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContextProvider,
  AuthContext
}

export default AuthContext
