import Container from '@mui/material/Container'
import { Article } from '@/features/articles'

function ArticlePage() {
  return (
    <div className="article-page">
      <Container sx={{ paddingY: 4 }}>
        <Article />
      </Container>
    </div>
  )
}

export default ArticlePage
