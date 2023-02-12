import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import ChatListItem from '../ChatListItem/ChatListItem.js'
import { useQuery } from '@apollo/client'
// @ts-ignore
import { AllChats } from '@/services/apollo/queries/messages.graphql'

function ChatList() {
  const { data, loading } = useQuery(AllChats)

  if (loading) return <div>Loading...</div>

  const chats: any[] = data?.messages?.allChats?.data || []

  const chatsWithMessages = chats.filter(chat => !!chat.lastMessage)

  if (chatsWithMessages.length === 0) {
    return (
      <Box>
        No chats
      </Box>
    )
  }

  return (
    <Stack overflow="auto" height="100%" borderRadius="12px 0 0 12px">
      {/* @ts-ignore */}
      {chatsWithMessages.map(chat => <ChatListItem key={chat.id} data={chat} />)}
    </Stack>
  )
}

export default ChatList
