import { useRoutes } from 'react-router-dom'
import { getRoutes } from './routes/index.js'

function Router() {
  const routes = getRoutes()

  return useRoutes(routes)
}

export default Router
