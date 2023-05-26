import NewArticlePage from '@/pages/articles/NewArticle.page.js'
import AllArticlesPage from '@/pages/articles/AllArticles.page.js'
import ArticlePage from '@/pages/articles/Article.page'
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
  },
  {
    path: '/a/:articleSlug',
    element: <ArticlePage />
  }
]
