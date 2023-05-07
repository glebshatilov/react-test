import { AddArticle } from '@/features/articles/index.js'
import Container from '@mui/material/Container'

function NewArticlePage() {
  return (
    <Container sx={{ paddingY: 4 }}>
      <h1>Create an article</h1>
      <AddArticle />
    </Container>
  )
}

export default NewArticlePage
