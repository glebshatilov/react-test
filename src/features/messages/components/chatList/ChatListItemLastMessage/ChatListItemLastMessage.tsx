import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { useQuery } from '@apollo/client'
// @ts-ignore
import { SignedInUserInfo } from '@/services/apollo/queries/users.graphql'

interface Props {
  data: any
}

function ChatListItemLastMessage({ data }: Props) {
  const { data: currentUserData } = useQuery(SignedInUserInfo)

  const isCurrentUserMessage = currentUserData ? currentUserData.user.id === data.author?.id : false

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
