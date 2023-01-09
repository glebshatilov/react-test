import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Message from '@mui/icons-material/Message'
import PersonAdd from '@mui/icons-material/PersonAdd'

function UserListItemActions() {
  return (
    <Stack direction="row" spacing={2}>
      <IconButton>
        <PersonAdd />
      </IconButton>
      <IconButton>
        <Message />
      </IconButton>
    </Stack>
  )
}

export default UserListItemActions
