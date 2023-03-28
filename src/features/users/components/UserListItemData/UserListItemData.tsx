import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { UserAvatar, UserLink } from '@/features/users/index.js'

interface Props {
  data: any
}

function UserListItemData({ data }: Props) {
  return (
    <Stack direction="row" spacing={2}>
      <UserAvatar user={data} size={{ width: 45, height: 45 }} link />
      <Box
        justifyItems="center"
        display="flex"
        flexDirection="column"
      >
        {data.name &&
          <UserLink user={data}>
            <Typography fontSize={16} fontWeight={500}>{data.name}
              {data.username &&
                <Typography
                  fontSize={14}
                  variant="body2"
                  variantMapping={{ body2: 'span' }}
                  color="gray"
                > @{data.username}
                </Typography>}
            </Typography>
          </UserLink>}
        {data.email &&
          <Typography fontSize={14} fontWeight={400}>{data.email}</Typography>}
      </Box>
    </Stack>
  )
}

export default UserListItemData
