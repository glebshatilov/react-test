import { createBrowserRouter } from 'react-router-dom'
import { getRoutes } from './routes/index.js'

const routes = getRoutes()
const router = createBrowserRouter(routes)

export default router
