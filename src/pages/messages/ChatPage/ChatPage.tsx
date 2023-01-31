import { useParams } from 'react-router-dom'
import Chat from '../chat/Chat/Chat.js'

function ChatPage() {
  const { userId } = useParams()

  return (
    <Chat userId={userId} />
  )
}

export default ChatPage
