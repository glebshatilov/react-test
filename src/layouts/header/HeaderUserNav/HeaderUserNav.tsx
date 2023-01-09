import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom'
import Forum from '@mui/icons-material/Forum'

function HeaderUserNav() {
  return (
    <Stack direction="row" spacing={2}>
      <IconButton component={Link} to="/messages">
        <Forum />
      </IconButton>
    </Stack>
  )
}

export default HeaderUserNav
