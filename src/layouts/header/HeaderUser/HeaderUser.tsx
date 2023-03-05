import Stack from '@mui/material/Stack'
import HeaderUserNav from '../HeaderUserNav/HeaderUserNav.js'
import HeaderUserProfile from '../HeaderUserProfile/HeaderUserProfile.js'
import { useAuth } from '@/features/auth'

function HeaderUser() {
  const { isSignedIn } = useAuth()
  const { loading, signedInUser } = useAuth()

  if (!isSignedIn) return null

  if (loading || !signedInUser) return <div>Loading...</div>

  return (
    <div className="header-user">
      <Stack direction="row" spacing={3} alignItems="center">
        <HeaderUserNav />
        <HeaderUserProfile data={signedInUser} />
      </Stack>
    </div>
  )
}

export default HeaderUser
