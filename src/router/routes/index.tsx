import MessagesPage from '../../pages/messages/MessagesPage/MessagesPage.js'
import ProfileMainPage from '../../pages/profile/ProfileMainPage/ProfileMainPage.js'
import IndexPage from '../../pages/index/IndexPage/IndexPage.js'

export function getRoutes() {
  return [
    {
      path: '/messages',
      element: <MessagesPage />
    },
    {
      path: '/profile',
      element: <ProfileMainPage />
    },
    {
      path: '/',
      element: <IndexPage />
    },
  ]
}