import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import HeaderUserNav from '../HeaderUserNav/HeaderUserNav.js'
import useAuth from '@/hooks/useAuth.js'
import { useQuery } from '@apollo/client'
import { clearToken } from '@/utils/token.js'
// @ts-ignore
import { SignedInUserInfo } from '@/services/apollo/queries/users.graphql'

function HeaderUserInfo() {
  const { isSignedIn, setSignedIn } = useAuth()
  const { data, error, loading } = useQuery(SignedInUserInfo)

  if (!isSignedIn) return null

  if (error) {
    if (error.graphQLErrors) {
      const unauthorizedError = error.graphQLErrors.find(e => e.extensions.code === 'UNAUTHORIZED')

      if (unauthorizedError) {
        setTimeout(() => {
          clearToken()
          setSignedIn(false)
        })
      }
    }
  }

  if (loading || !data) return <div>Loading...</div>

  return (
    <div className="header-user-info">
      <Stack direction="row" spacing={4} alignItems="center">
        <HeaderUserNav />
        <Button>
          {data.user.name || data.user.email}
        </Button>
      </Stack>
    </div>
  )
}

export default HeaderUserInfo
