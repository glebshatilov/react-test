import { Link } from 'react-router-dom'
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout.js'

function IndexPage() {
  return (
    <DefaultLayout>
      <div className="IndexPage">
        <h1>Index</h1>
        <Link to="/profile">Profile</Link>
        <Link to="/signin">SignIn</Link>
        <Link to="/profile">SignUp</Link>
        <Link to="/messages">messages</Link>
      </div>
    </DefaultLayout>
  )
}

export default IndexPage
