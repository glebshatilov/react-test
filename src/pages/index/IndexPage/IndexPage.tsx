import { useQuery } from '@apollo/client'
// @ts-ignore
import { AllUsers } from '../../../services/apollo/queries/users.graphql'

function IndexPage() {
  const { loading, error, data, ...rest } = useQuery(AllUsers)

  console.log('loading', loading)
  console.log('error', error)
  console.log('data', data)
  console.log('rest', rest)

  return (
    <div className="IndexPage">
      <h1>Index</h1>
    </div>
  )
}

export default IndexPage
