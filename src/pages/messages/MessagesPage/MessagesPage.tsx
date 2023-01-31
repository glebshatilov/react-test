import Container from '@mui/material/Container'
import ChatList from '../chatList/ChatList/ChatList.js'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

function MessagesPage() {
  return (
    <div className="messages-page">
      <Container sx={{ paddingTop: 4 }}>
        <Box
          display="grid"
          gridTemplateColumns="350px 1fr"
          gridTemplateRows="100%"
          height="500px"
          sx={{ background: '#f1f1f1' }}
          borderRadius={3}
        >
          <Box borderRight="1px solid #d4d4d4" height="100%">
            <ChatList />
          </Box>
          <Box>
            <Outlet />
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default MessagesPage
