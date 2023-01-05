import { Link } from 'react-router-dom'
import { useQuery, useSubscription } from '@apollo/client'
// @ts-ignore
// import { AllUsers } from '../../../services/apollo/queries/users.graphql'
// @ts-ignore
import { TestSubscription } from '../../../services/apollo/subscriptions/test.graphql'

function IndexPage() {
  // const { loading, error, data, ...rest } = useQuery(AllUsers)
  const { data, loading, error, ...rest } = useSubscription(TestSubscription)

  return (
    <div className="IndexPage">
      <h1>Index {data?.numberIncremented || 'test'}</h1>
      <Link to="/profile">Profile</Link>
      <Link to="/signin">SignIn</Link>
      <Link to="/profile">SignUp</Link>
    </div>
  )
}

export default IndexPage
