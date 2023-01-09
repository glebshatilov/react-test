import { Outlet, Navigate, useLocation } from 'react-router-dom'
import useAuth from '@/hooks/useAuth.js'

function RequireAuth() {
  const { isSignedIn } = useAuth()
  const location = useLocation()

  return (
    isSignedIn
      ? <Outlet />
      : <Navigate to="/signin" state={{ from: location }} replace />
  )
}

export default RequireAuth
