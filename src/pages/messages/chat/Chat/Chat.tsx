import ChatMessages from '../ChatMessages/ChatMessages.js'
import ChatHeader from '../ChatHeader/ChatHeader.js'
import ChatFooter from '../ChatFooter/ChatFooter.js'
import { Box } from '@mui/material'
import { useQuery } from '@apollo/client'
// @ts-ignore
import { DirectMessagesChat } from '@/services/apollo/queries/messages.graphql'
import { useEffect } from 'react'
import useMessages from '@/hooks/useMessages.js'

interface Props {
  userId?: string
}

function Chat({ userId }: Props) {
  const { data, loading, updateQuery } = useQuery(DirectMessagesChat, {
    variables: { userId }
  })

  const { newMessageInChat } = useMessages()

  useEffect(() => {
    if (!newMessageInChat) return // preventing initial call

    updateQuery((prev) => {
      if (newMessageInChat.id !== prev.messages.chat.id) return prev // if new message isn't from this chat

      const newMessage = newMessageInChat.lastMessage

      return Object.assign({}, prev, {
        messages: {
          ...prev.messages,
          chat: {
            ...prev.messages.chat,
            messages: {
              ...prev.messages.chat.messages,
              data: [newMessage, ...prev.messages.chat.messages.data]
            }
          }
        }
      })
    })
  }, [newMessageInChat])

  if (loading) {
    return (
      <Box
        display="grid"
        gridTemplateRows="auto 1fr auto"
        borderRadius="8px"
        height="100%"
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
