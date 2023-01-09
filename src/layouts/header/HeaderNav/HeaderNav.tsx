import Stack from '@mui/material/Stack'
import { Link } from 'react-router-dom'

function HeaderNav() {
  return (
    <Stack direction="row" spacing={2}>
      <Link to="/">Home</Link>
      <Link to="/">Articles</Link>
      <Link to="/users">Users</Link>
    </Stack>
  )
}

export default HeaderNav
