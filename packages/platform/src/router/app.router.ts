import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

export class AppRouter {
    protected static instance: AppRouter

    static getInstance(): AppRouter {
        if (!AppRouter.instance) {
            AppRouter.instance = new AppRouter()
        }

        return AppRouter.instance
    }

    /**
     * Инициализировать маршрутизатор с переданными маршрутами
     */
    withRoutes(routes: RouteRecordRaw[]) {
        return createRouter({
            history: createWebHistory(),
            routes,
        })
    }
}
