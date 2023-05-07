import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

function AllArticlesPage() {
  return (
    <Container sx={{ paddingY: 4 }}>
      <h1>All articles</h1>
      <Button component={Link} to="/articles/new">Add new</Button>
    </Container>
  )
}

export default AllArticlesPage
