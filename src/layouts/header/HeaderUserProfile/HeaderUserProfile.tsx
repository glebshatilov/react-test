import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import HeaderUserMenuInfo from '../HeaderUserMenuInfo/HeaderUserMenuInfo.js'
import HeaderUserMenuSignOut from '../HeaderUserMenuSignOut/HeaderUserMenuSignOut.js'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Edit from '@mui/icons-material/Edit.js'
import ListItemIcon from '@mui/material/ListItemIcon'
import { UserAvatar } from '@/features/users/index.js'

function HeaderUserProfile() {
  const [isOpenMenu, setOpenMenu] = useState(false)
  const anchorEl = useRef(null)

  const handleClick = () => {
    setOpenMenu(true)
  }

  const handleClose = () => {
    setOpenMenu(false)
  }

  return (
    <div className="header-user-profile">
      <IconButton ref={anchorEl} size="small" onClick={handleClick}>
        <UserAvatar size={{ width: 30, height: 30 }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl.current}
        open={isOpenMenu}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <HeaderUserMenuInfo />
        <Divider sx={{ marginY: 1 }} />
        <MenuItem component={Link} to="/edit">
          <ListItemIcon>
            <Edit />
          </ListItemIcon>
          Edit profile
        </MenuItem>
        <HeaderUserMenuSignOut />
      </Menu>
    </div>
  )
}

export default HeaderUserProfile
