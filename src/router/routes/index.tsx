import RequireAuth from '@/components/router/RequireAuth/RequireAuth.js'
import MessagesPage from '@/pages/messages/MessagesPage/MessagesPage.js'
import ChatPage from '@/pages/messages/ChatPage/ChatPage.js'
import ProfileMainPage from '@/pages/profile/ProfileMainPage/ProfileMainPage.js'
import IndexPage from '@/pages/index/IndexPage/IndexPage.js'
import SignInPage from '@/pages/auth/SignInPage/SignInPage.js'
import UsersPage from '@/pages/users/UsersPage/UsersPage.js'
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout.js'
import EmptyChatPage from '@/pages/messages/EmptyChatPage/EmptyChatPage.js'

export function getRoutes() {
  return [
    {
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: <IndexPage />
        },
        {
          path: '/signin',
          element: <SignInPage />
        },
        {
          path: '/users',
          element: <UsersPage />
        },
        {
          element: <RequireAuth />,
          children: [
            {
              path: '/messages',
              element: <MessagesPage />,
              children: [
                {
                  index: true,
                  element: <EmptyChatPage />
                },
                {
                  path: '/messages/dm/:userId',
                  element: <ChatPage />
                }
              ]
            },
            {
              path: '/profile',
              element: <ProfileMainPage />
            }
          ]
        }
      ]
    }
  ]
}
