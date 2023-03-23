import Box from '@mui/material/Box'
import { UserAvatar } from '@/features/users/index.js'

interface Props {
  data: any
}

function ChatListItemAvatar({ data }: Props) {
  return (
    <Box gridArea="avatar" alignSelf="center" marginRight={1}>
      <UserAvatar user={data.interlocutor} size={{ width: 30, height: 30 }} />
    </Box>
  )
}

export default ChatListItemAvatar
