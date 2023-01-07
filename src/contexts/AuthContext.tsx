import { createContext, useState, ReactNode } from 'react'
import { getToken } from '@/utils/token.js'

interface Props {
  children: ReactNode
}

interface AuthContextInterface {
  isSignedIn: boolean,
  setSignedIn: (value: boolean) => void
}

const hasToken = Boolean(getToken())

const AuthContext = createContext<AuthContextInterface>({
  isSignedIn: hasToken,
  setSignedIn: value => value
})

function AuthContextProvider({ children }: Props) {
  const [isSignedIn, setSignedIn] = useState(hasToken)

  return (
    <AuthContext.Provider value={{ isSignedIn, setSignedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContextProvider,
  AuthContext
}

export default AuthContext
