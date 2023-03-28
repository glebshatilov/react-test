import Container from '@mui/material/Container'
import { UserProfile } from '@/features/users/index.js'

function UserPage() {
  return (
    <div className="user-page">
      <Container sx={{ paddingY: 4 }}>
        <UserProfile />
      </Container>
    </div>
  )
}

export default UserPage
