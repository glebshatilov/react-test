import { useMutation } from '@apollo/client'
// @ts-ignore
import { UserUpdateInfo } from '@/services/apollo/mutations/users.graphql'

interface UpdateUserVariables {
  name?: string
  username?: string
  email?: string
}

function useApiUpdateUser() {
  const [updateUser, { loading, error }] = useMutation(UserUpdateInfo)

  const updateUserHandler = async(variables: UpdateUserVariables) => {
    const { data } = await updateUser({ variables: { data: variables } })

    return data
  }

  return { updateUserHandler, loading, error }
}

export default useApiUpdateUser
