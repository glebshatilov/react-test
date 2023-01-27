import ChatMessages from '../ChatMessages/ChatMessages.js'
import ChatHeader from '../ChatHeader/ChatHeader.js'
import ChatFooter from '../ChatFooter/ChatFooter.js'
import { Box } from '@mui/material'
import { useQuery } from '@apollo/client'
// @ts-ignore
import { DirectMessagesChat } from '@/services/apollo/queries/messages.graphql'

interface Props {
  userId?: string
}

function Chat({ userId }: Props) {
  const { data, loading } = useQuery(DirectMessagesChat, {
    variables: { userId }
  })

  if (loading) {
    return (
      <Box
        height="500px"
        sx={{ background: '#f1f1f1' }}
        display="grid"
        gridTemplateRows="auto 1fr auto"
        borderRadius="8px"
      >
        <ChatHeader />
        <ChatMessages loading />
        <ChatFooter />
      </Box>
    )
  }

  const { messages: { chat } } = data

  return (
    <Box
      height="500px"
      sx={{ background: '#f1f1f1' }}
      display="grid"
      gridTemplateRows="auto 1fr auto"
      borderRadius="8px"
    >
      <ChatHeader interlocutor={chat.interlocutor} />
      <ChatMessages messages={chat.messages.data} />
      <ChatFooter interlocutorId={chat.interlocutor.id} />
    </Box>
  )
}

export default Chat
