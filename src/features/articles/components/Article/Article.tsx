import { useParams } from 'react-router-dom'
import useApiGetArticleById from '../../hooksApi/useApiGetArticleById'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import ArticleContent from '../ArticleContent/ArticleContent'
import { UserAvatar, UserLink } from '@/features/users/index.js'
import { isToday, isCurrentYear, getLocaleDateFromString } from '@/utils/date.js'
import { Helmet } from 'react-helmet'

function Article() {
  const { articleId } = useParams()
  const { data, loading, error } = useApiGetArticleById({ articleId: articleId! })

  if (loading) return <CircularProgress />
  if (error) return <p>Error: {error.message}</p>

  const article = data.article
  const content = JSON.parse(article.content)
  const formattedDate = isToday(article.createdAt) ? 'Today' : getLocaleDateFromString(article.createdAt, !isCurrentYear(article.createdAt))

  const pageTitle = `${article.title} by ${article.author.name}`

  return (
    <Grid container spacing={2}>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Box display="flex" alignItems="center">
            <UserAvatar user={article.author} size={{ width: 32, height: 32 }} link />
            <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 1 }}>
              <UserLink user={article.author}>{article.author.name}</UserLink>
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Published on <strong>{formattedDate}</strong>
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Typography variant="h3" component="h2" mt={6}>
          {article.title}
        </Typography>
        <Box mt={2}>
          <ArticleContent content={content} />
        </Box>
      </Grid>
    </Grid>
  )
}

export default Article
