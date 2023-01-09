import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout.js'
import Container from '@mui/material/Container'

function MessagesPage() {
  return (
    <DefaultLayout>
      <div className="messages-page">
        <Container>
          <h1>Messages</h1>
        </Container>
      </div>
    </DefaultLayout>
  )
}

export default MessagesPage
