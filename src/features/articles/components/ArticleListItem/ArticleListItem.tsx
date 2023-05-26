import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { Link } from 'react-router-dom'
import { Article } from '../../types'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { UserAvatar, UserLink } from '@/features/users/index.js'
import { getLocaleDateFromString, isCurrentYear, isToday } from '@/utils/date.js'

interface Props {
  data: Article
}

function ArticleListItem({ data }: Props) {
  return (
    <Paper sx={{ padding: 2 }}>
      <Stack direction="column" spacing={1.5}>
        <Box display="flex" alignItems="center">
          <UserAvatar user={data.author} size={{ width: 18, height: 18 }} link />
          <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 1 }}>
            <UserLink user={data.author}>{data.author.name}</UserLink>
          </Typography>
        </Box>
        <Box>
          <Link to={`/a/${data.id}`} style={{ textDecoration: 'inherit', color: 'inherit' }}>
            <Typography variant="h6">{data.title}</Typography>
            <Typography variant="body2" color="textSecondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          </Link>

        </Box>
        <Typography variant="body2" color="textSecondary">
          {isToday(data.createdAt) ? 'Today' : getLocaleDateFromString(data.createdAt, !isCurrentYear(data.createdAt))}
        </Typography>
      </Stack>
    </Paper>
  )
}

export default ArticleListItem
