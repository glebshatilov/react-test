import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { useAuth } from '@/features/auth/index.js'

interface Props {
  data: any
}

function ChatListItemLastMessage({ data }: Props) {
  const { signedInUserId } = useAuth()

  const isCurrentUserMessage = signedInUserId === data.author?.id

  return (
    <Box gridArea="lastMessage" marginTop={0.5}>
      <Typography
        fontSize={13}
        color="rgb(104, 104, 104)"
        textOverflow="ellipsis"
        overflow="hidden"
        whiteSpace="nowrap"
      >
        {isCurrentUserMessage && <span style={{ color: 'rgb(144 144 144)' }}>You: </span>}{data.text}
      </Typography>
    </Box>
  )
}

export default ChatListItemLastMessage
