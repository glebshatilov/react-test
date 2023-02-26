import authRoutes from './auth.routes.js'
import userRoutes from './user.routes.js'
import messagesRoutes from './messages.routes.js'
import profileRoutes from './profile.routes.js'

import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout.js'
import RequireAuth from '@/components/router/RequireAuth/RequireAuth.js'

import IndexPage from '@/pages/Index.page.js'

export function getRoutes() {
  return [
    {
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: <IndexPage />
        },
        ...authRoutes,
        ...userRoutes,
        {
          element: <RequireAuth />,
          children: [
            ...messagesRoutes,
            ...profileRoutes
          ]
        }
      ]
    }
  ]
}
