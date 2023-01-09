import { Box, Typography } from '@mui/material'

interface Props {
  data: {
    name: string,
    email: string,
    username: string
  }
}

function HeaderUserMenuInfo({ data }:Props) {
  return (
    <div className="header-user-menu-info">
      <Box
        paddingX={2}
        justifyItems="center"
        display="flex"
        flexDirection="column"
      >
        {data.name && <Typography fontSize={16} fontWeight={500}>{data.name}</Typography>}
        {data.email && <Typography fontSize={14} fontWeight={400}>{data.email}</Typography>}
        {data.username && <Typography fontSize={15} marginTop={1} color="black">{data.username}</Typography>}
      </Box>

    </div>
  )
}

export default HeaderUserMenuInfo
