import { Box, Typography } from '@mui/material'
import { MouseEvent } from 'react'
import { useAuth } from '@/features/auth/index.js'

function HeaderUserMenuInfo() {
  const { signedInUser } = useAuth()

  const handleInfoClick = (event: MouseEvent) => {
    event.stopPropagation()
  }

  return (
    <div className="header-user-menu-info" onClick={handleInfoClick}>
      <Box
        paddingX={2}
        justifyItems="center"
        display="flex"
        flexDirection="column"
      >
        {signedInUser.name && <Typography fontSize={16} fontWeight={500}>{signedInUser.name}</Typography>}
        {signedInUser.username && <Typography fontSize={14} marginTop={-0.5} color="gray">@{signedInUser.username}</Typography>}
        {signedInUser.email && <Typography fontSize={14} marginTop={signedInUser.username ? 0.5 : 0} fontWeight={400}>{signedInUser.email}</Typography>}
      </Box>

    </div>
  )
}

export default HeaderUserMenuInfo
