import NewArticlePage from '@/pages/articles/NewArticle.page.js'
import AllArticlesPage from '@/pages/articles/AllArticles.page.js'
import RequireAuth from '@/components/router/RequireAuth/RequireAuth.js'

export default [
  {
    path: '/articles',
    element: <AllArticlesPage />
  },
  {
    element: <RequireAuth />,
    children: [
      {
        path: '/articles/new',
        element: <NewArticlePage />
      }
    ]
  }
]
