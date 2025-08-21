import type { RouteRecordRaw } from 'vue-router'

export const adminRoutes: RouteRecordRaw[] = [
    {
        path: '/dashboard',
        name: 'dashboard.index',
        component: () => import('../../pages/dashboard.vue'),
    },
]
