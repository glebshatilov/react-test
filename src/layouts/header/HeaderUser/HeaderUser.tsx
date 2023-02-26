import Stack from '@mui/material/Stack'
import HeaderUserNav from '../HeaderUserNav/HeaderUserNav.js'
import HeaderUserProfile from '../HeaderUserProfile/HeaderUserProfile.js'
import { useAuth } from '@/features/auth'
import { useQuery } from '@apollo/client'
// @ts-ignore
import { SignedInUserInfo } from '@/services/apollo/queries/users.graphql'

function HeaderUser() {
  const { isSignedIn, signOut } = useAuth()
  const { data, error, loading } = useQuery(SignedInUserInfo)

  if (!isSignedIn) return null

  if (error) {
    if (error.graphQLErrors) {
      const unauthorizedError = error.graphQLErrors.find(e => e.extensions.code === 'UNAUTHORIZED')

      if (unauthorizedError) {
        signOut()
      }
    }
  }

  if (loading || !data) return <div>Loading...</div>

  return (
    <div className="header-user">
      <Stack direction="row" spacing={3} alignItems="center">
        <HeaderUserNav />
        <HeaderUserProfile data={data.user} />
      </Stack>
    </div>
  )
}

export default HeaderUser
