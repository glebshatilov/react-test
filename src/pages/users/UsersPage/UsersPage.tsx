import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout.js'
import Container from '@mui/material/Container'
import AllUsers from '../AllUsers/AllUsers.js'

function UsersPage() {
  return (
    <DefaultLayout>
      <div className="users-page">
        <Container>
          <h1>Users</h1>
          <AllUsers />
        </Container>
      </div>
    </DefaultLayout>
  )
}

export default UsersPage
