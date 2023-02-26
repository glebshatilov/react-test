// layouts
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout.js'

// profile pages
import ProfileMainPage from '@/pages/profile/ProfileMain.page.js'

// messages pages
import MessagesPage from '@/pages/messages/Messages.page.js'
import ChatPage from '@/pages/messages/Chat.page.js'
import EmptyChatPage from '@/pages/messages/EmptyChat.page.js'

// other pages
import IndexPage from '@/pages/Index.page.js'
import AuthPage from '@/pages/Auth.page.js'
import UsersPage from '@/pages/Users.page.js'

// other
import RequireAuth from '@/components/router/RequireAuth/RequireAuth.js'

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
          path: '/auth',
          element: <AuthPage />
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
