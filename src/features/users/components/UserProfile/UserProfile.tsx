import { useParams } from 'react-router-dom'
import { useApiGetUserBySlug } from '@/features/users/index.js'
import UserAvatar from '../UserAvatar/UserAvatar.js'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

function UserProfile() {
  const { userSlug } = useParams()
  const { data, loading, error } = useApiGetUserBySlug({ userSlug })

  if (loading) return <CircularProgress />
  if (error) return <p>Error: {error.message}</p>

  const user = data.user

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
        <Box display="flex" flexDirection="column" gap={1}>
          <Button variant="contained" color="primary">
            Follow
          </Button>
          <Button variant="contained" color="secondary">
            Message
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default UserProfile
