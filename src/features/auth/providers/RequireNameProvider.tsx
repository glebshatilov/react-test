import { ReactNode } from 'react'
import { useAuth } from '@/features/auth'
import RequireNameForm from '../components/RequireNameForm/RequireNameForm.js'

interface RequireNameProviderProps {
  children: ReactNode
}

function RequireNameProvider({ children }: RequireNameProviderProps) {
  const { signedInUser, loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  if (signedInUser && !signedInUser.name) {
    return <RequireNameForm />
  }

  return <>{children}</>
}

export default RequireNameProvider
