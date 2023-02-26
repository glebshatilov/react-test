import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/features/auth'

function RequireAuth() {
  const { isSignedIn } = useAuth()
  const location = useLocation()

  return (
    isSignedIn
      ? <Outlet />
      : <Navigate to="/auth" state={{ from: location }} replace />
  )
}

export default RequireAuth
