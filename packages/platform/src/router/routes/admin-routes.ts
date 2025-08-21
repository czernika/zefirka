import type { RouteRecordRaw } from 'vue-router'

export const adminRoutes: RouteRecordRaw[] = [
    {
        path: '/dashboard',
        component: () => import('../../pages/dashboard.vue'),
    },
]
