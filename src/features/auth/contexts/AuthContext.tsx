import { createContext, useState, ReactNode } from 'react'
import { getToken, clearToken, setToken } from '@/utils/token.js'

interface Props {
  children: ReactNode
}

interface AuthContextInterface {
  isSignedIn: boolean,
  signOut: () => void,
  signInWithToken: (token: string) => void,
}

const hasToken = Boolean(getToken())

const AuthContext = createContext<AuthContextInterface>(
  {
    isSignedIn: hasToken,
    signOut: () => ({}),
    signInWithToken: () => ({})
  }
)

function AuthContextProvider({ children }: Props) {
  const [isSignedIn, setSignedIn] = useState(hasToken)

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
    <AuthContext.Provider value={{ isSignedIn, signOut, signInWithToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContextProvider,
  AuthContext
}

export default AuthContext
