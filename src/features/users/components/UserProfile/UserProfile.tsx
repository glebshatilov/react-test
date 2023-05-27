import { useParams } from 'react-router-dom'
import { useApiGetUserById } from '@/features/users/index.js'
import UserAvatar from '../UserAvatar/UserAvatar.js'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import UserProfileActions from '../UserProfileActions/UserProfileActions.js'
import { useAuth } from '@/features/auth/index.js'
import Chip from '@mui/material/Chip'

function UserProfile() {
  const { isSignedIn, signedInUserId } = useAuth()
  const { userId } = useParams()
  const { data, loading, error } = useApiGetUserById({ userId })

  if (loading) return <CircularProgress />
  if (error) return <p>Error: {error.message}</p>

  const user = data.user
  const isCurrentUserProfile = signedInUserId === user.id

  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item>
        <UserAvatar user={user} size={{ width: 150, height: 150 }} />
      </Grid>
      <Grid item xs>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography variant="h4" component="h2">
            {user.name}
          </Typography>
          {user.username && <Typography variant="subtitle1">@{user.username}</Typography>}
          <Typography variant="body1">{user.email}</Typography>
        </Box>
      </Grid>
      <Grid item>
        {isSignedIn && (isCurrentUserProfile ? <Chip label="It's you" size="small" /> : <UserProfileActions />)}
      </Grid>
    </Grid>
  )
}

export default UserProfile
