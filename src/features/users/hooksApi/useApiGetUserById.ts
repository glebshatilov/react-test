import { useQuery } from '@apollo/client'
// @ts-ignore
import { UserById } from '@/services/apollo/queries/users.graphql'

interface Props {
  userId?: string
}

function useApiGetUserById({ userId }: Props) {
  const { data, loading, error } = useQuery(UserById, {
    variables: {
      userId
    }
  })

  return { data, loading, error }
}

export default useApiGetUserById
