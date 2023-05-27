import { useQuery } from '@apollo/client'
// @ts-ignore
import { ArticleById } from '@/services/apollo/queries/articles.graphql'

interface Props {
  articleId: string
}

function useApiGetArticleById({ articleId }: Props) {
  const { data, loading, error } = useQuery(ArticleById, {
    variables: {
      articleId
    }
  })

  return { data, loading, error }
}

export default useApiGetArticleById
