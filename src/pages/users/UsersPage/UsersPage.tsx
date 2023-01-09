import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout.js'
import Container from '@mui/material/Container'

function UsersPage() {
  return (
    <DefaultLayout>
      <div className="users-page">
        <Container>
          <h1>Users</h1>
        </Container>
      </div>
    </DefaultLayout>
  )
}

export default UsersPage
