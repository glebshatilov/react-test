import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import Divider from '@mui/material/Divider'
import HeaderUserMenuInfo from '../HeaderUserMenuInfo/HeaderUserMenuInfo.js'
import HeaderUserMenuSignOut from '../HeaderUserMenuSignOut/HeaderUserMenuSignOut.js'
import { useState, useRef } from 'react'

interface Props {
  data: {
    name: string,
    email: string,
    username: string
  }
}

function HeaderUserProfile({ data }: Props) {
  const avatarLetter = (data.name || data.email)[0].toUpperCase()
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
        <Avatar sx={{ width: 30, height: 30 }}>{avatarLetter}</Avatar>
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
        <HeaderUserMenuInfo data={data} />
        <Divider sx={{ marginY: 1 }} />
        <HeaderUserMenuSignOut />
      </Menu>
    </div>
  )
}

export default HeaderUserProfile
