import { useParams } from 'react-router-dom'
import { Chat } from '@/features/messages'

function ChatPage() {
  const { userId } = useParams()

  return (
    <Chat userId={userId} />
  )
}

export default ChatPage
