import type { App } from 'vue'
import type { AppRouter } from '../router/app.router'
import type { RouteRecordRaw } from 'vue-router'

export type ZefirkaVueAppSetup = (ctx: {
    /**
     * Инициализированное приложение
     */
    app: App

    /**
     * Маршрутизатор
     */
    router: AppRouter

    /**
     * Предустановленные маршруты приложения
     */
    routes: RouteRecordRaw[]

    /**
     * Элемент, куда будет монтировано приложение
     */
    el: string
}) => void
