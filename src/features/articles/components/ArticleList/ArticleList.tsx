import Stack from '@mui/material/Stack'
import { Article } from '../../types'
import ArticleListItem from '../ArticleListItem/ArticleListItem'

interface Props {
  list: Article[]
}

function ArticleList({ list }: Props) {
  return (
    <div>
      <Stack spacing={2}>
        {list.map(article => (
          <ArticleListItem key={article.id} data={article} />
        ))}
      </Stack>
    </div>
  )
}

export default ArticleList
