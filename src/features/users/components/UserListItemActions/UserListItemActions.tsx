import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Message from '@mui/icons-material/Message'
import PersonAdd from '@mui/icons-material/PersonAdd'
import { Link } from 'react-router-dom'

interface Props {
  data: any
}

function UserListItemActions({ data }: Props) {
  return (
    <Stack direction="row" spacing={2}>
      <IconButton>
        <PersonAdd />
      </IconButton>
      <IconButton component={Link} to={'/messages/dm/' + data.id}>
        <Message />
      </IconButton>
    </Stack>
  )
}

export default UserListItemActions
