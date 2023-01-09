import MenuItem from '@mui/material/MenuItem'
import Logout from '@mui/icons-material/Logout'
import ListItemIcon from '@mui/material/ListItemIcon'
import useAuth from '@/hooks/useAuth.js'

function HeaderUserMenuSignOut() {
  const { signOut } = useAuth()

  function handleClick() {
    signOut()
  }

  return (
    <MenuItem onClick={() => handleClick()}>
      <ListItemIcon>
        <Logout />
      </ListItemIcon>
      Sign out
    </MenuItem>
  )
}

export default HeaderUserMenuSignOut
