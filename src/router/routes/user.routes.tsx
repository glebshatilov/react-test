import UsersPage from '@/pages/users/Users.page.js'
import UserPage from '@/pages/users/User.page.js'

export default [
  {
    path: '/users',
    element: <UsersPage />
  },
  {
    path: '/u/:userSlug',
    element: <UserPage />
  }
]
