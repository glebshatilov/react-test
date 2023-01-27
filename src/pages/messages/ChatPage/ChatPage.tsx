import Container from '@mui/material/Container'
import { useParams } from 'react-router-dom'
import Chat from '@/pages/messages/Chat/Chat.js'

function ChatPage() {
  const { userId } = useParams()

  return (
    <div className="chat-page">
      <Container sx={{ paddingTop: 4 }}>
        <Chat userId={userId} />
      </Container>
    </div>
  )
}

export default ChatPage
