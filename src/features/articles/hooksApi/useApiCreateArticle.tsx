import { useMutation } from '@apollo/client'
// @ts-ignore
import { CreateArticle } from '@/services/apollo/mutations/articles.graphql'

interface UpdateUserVariables {
  title: string
  content: string
}

function useApiCreateArticle() {
  const [createArticle, { loading, error }] = useMutation(CreateArticle)

  const createArticleHandler = async(variables: UpdateUserVariables) => {
    const { data } = await createArticle({ variables })

    return data
  }

  return { createArticleHandler, loading, error }
}

export default useApiCreateArticle
