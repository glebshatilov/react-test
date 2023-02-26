import { useQuery } from '@apollo/client'
// @ts-ignore
import { SignedInUserInfo } from '@/services/apollo/queries/users.graphql'
import { MessageInterface } from '../../../@types/index.js'
import { Box, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import ChatMessagesItemTime from '../ChatMessagesItemTime/ChatMessagesItemTime.js'

interface Props {
  data: MessageInterface
}

function ChatMessagesItem({ data: message }: Props) {
  const { data, loading } = useQuery(SignedInUserInfo)
  if (loading) return null

  const isCurrentUserMessage = data.user.id === message.author?.id

  return (
    <Box padding={1} display="flex" justifyContent={isCurrentUserMessage ? 'end' : 'start'}>
      <Paper sx={{ paddingX: 2, paddingTop: 1, paddingBottom: 0.5, maxWidth: '40%', display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
        <Typography fontSize={15} marginBottom="2px">
          {message.text}
        </Typography>
        <ChatMessagesItemTime date={message.createdAt} />
      </Paper>
    </Box>
  )
}

export default ChatMessagesItem
