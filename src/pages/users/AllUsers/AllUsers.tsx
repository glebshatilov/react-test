import { useQuery } from '@apollo/client'
// @ts-ignore
import { AllUsers as AllUsersQuery } from '@/services/apollo/queries/users.graphql'
import UserList from '../UserList/UserList.js'

function AllUsers() {
  const { data, loading, error } = useQuery(AllUsersQuery)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  return (
    <div className="all-user">
      <UserList list={data.users} />
    </div>
  )
}

export default AllUsers
