import { useQuery } from '@apollo/client'
// @ts-ignore
import { AllArticles } from '@/services/apollo/queries/articles.graphql'

function useApiGetAllArticles() {
  const { data, loading, error } = useQuery(AllArticles)

  return { data, loading, error }
}

export default useApiGetAllArticles
