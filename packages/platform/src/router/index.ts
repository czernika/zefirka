import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

// Обязательные маршруты приложения
routes.push(
    {
        path: '/dashboard',
        component: () => import('../pages/dashboard.vue'),
    },
)

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { routes }
