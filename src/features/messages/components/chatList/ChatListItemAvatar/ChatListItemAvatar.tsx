import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'

interface Props {
  data: any
}

function ChatListItemAvatar({ data }: Props) {
  const avatarLetter = (data.interlocutor.name || data.interlocutor.email)[0].toUpperCase() // ToDo: need to move to separate component

  return (
    <Box gridArea="avatar" alignSelf="center" marginRight={1}>
      <Avatar sx={{ width: 30, height: 30 }}>{avatarLetter}</Avatar>
    </Box>
  )
}

export default ChatListItemAvatar
