import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

function UserProfileActions() {
  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Button variant="contained" color="primary">
        Follow
      </Button>
      <Button variant="contained" color="secondary">
        Message
      </Button>
    </Box>
  )
}

export default UserProfileActions
