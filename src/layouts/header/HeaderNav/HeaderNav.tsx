import Stack from '@mui/material/Stack'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'

function HeaderNav() {
  return (
    <Stack direction="row" spacing={2}>
      <Link
        component={RouterLink}
        to="/"
        underline="none"
        color="gray"
      >
        Home
      </Link>
      <Link
        component={RouterLink}
        to="/articles"
        underline="none"
        color="gray"
      >
        Articles
      </Link>
      <Link
        component={RouterLink}
        to="/users"
        underline="none"
        color="gray"
      >
        Users
      </Link>
    </Stack>
  )
}

export default HeaderNav
