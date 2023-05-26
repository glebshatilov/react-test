import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { AllArticles } from '@/features/articles/index.js'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function AllArticlesPage() {
  return (
    <Container sx={{ paddingY: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={2}
      >
        <Typography variant="h4">All articles</Typography>
        <Button
          component={Link}
          to="/articles/new"
          variant="contained"
          color="primary"
        >Add new
        </Button>
      </Box>
      <AllArticles />
    </Container>
  )
}

export default AllArticlesPage
