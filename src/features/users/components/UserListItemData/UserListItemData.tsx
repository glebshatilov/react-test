import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface Props {
  data: any
}

function UserListItemData({ data }: Props) {
  const avatarLetter = (data.name || data.email)[0].toUpperCase() // ToDo: need to move to separate component

  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ width: 45, height: 45 }}>{avatarLetter}</Avatar>
      <Box
        justifyItems="center"
        display="flex"
        flexDirection="column"
      >
        {data.name &&
          <Typography fontSize={16} fontWeight={500}>{data.name}
            {data.username &&
              <Typography
                fontSize={14}
                variant="body2"
                variantMapping={{ body2: 'span' }}
                color="gray"
              > @{data.username}
              </Typography>}
          </Typography>}
        {data.email &&
          <Typography fontSize={14} fontWeight={400}>{data.email}</Typography>}
      </Box>
    </Stack>
  )
}

export default UserListItemData
