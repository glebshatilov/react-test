import MessagesPage from '@/pages/messages/MessagesPage/MessagesPage.js'
import ProfileMainPage from '@/pages/profile/ProfileMainPage/ProfileMainPage.js'
import IndexPage from '@/pages/index/IndexPage/IndexPage.js'
import SignInPage from '@/pages/auth/SignInPage/SignInPage.js'
import RequireAuth from '@/components/router/RequireAuth/RequireAuth.js'

export function getRoutes() {
  return [
    {
      path: '/',
      element: <IndexPage />
    },
    {
      path: '/signin',
      element: <SignInPage />
    },
    {
      element: <RequireAuth />,
      children: [
        {
          path: '/messages',
          element: <MessagesPage />
        },
        {
          path: '/profile',
          element: <ProfileMainPage />
        }
      ]
    }
  ]
}
