import Container from '@mui/material/Container'
import { AllUsers } from '@/features/users'

function UsersPage() {
  return (
    <div className="users-page">
      <Container>
        <h1>Users</h1>
        <AllUsers />
      </Container>
    </div>
  )
}

export default UsersPage
