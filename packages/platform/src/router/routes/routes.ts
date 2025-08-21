import { routes } from 'vue-router/auto-routes'
import { adminRoutes } from './admin-routes'

routes.push(...adminRoutes)

export { routes }
