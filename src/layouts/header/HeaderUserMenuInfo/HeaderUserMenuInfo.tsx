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
        {data.username && <Typography fontSize={14} marginTop={-0.5} color="gray">@{data.username}</Typography>}
        {data.email && <Typography fontSize={14} marginTop={data.username ? 0.5 : 0} fontWeight={400}>{data.email}</Typography>}
      </Box>

    </div>
  )
}

export default HeaderUserMenuInfo
