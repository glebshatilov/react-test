import { useQuery } from '@apollo/client'
// @ts-ignore
import { UserBySlug } from '@/services/apollo/queries/users.graphql'

interface Props {
  userSlug?: string
}

function useApiGetUserBySlug({ userSlug }: Props) {
  const { data, loading, error } = useQuery(UserBySlug, {
    variables: {
      userSlug
    }
  })

  return { data, loading, error }
}

export default useApiGetUserBySlug
