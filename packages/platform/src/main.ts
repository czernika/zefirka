import { createApp } from 'vue'
import ZefirkaApp from './ZefirkaApp.vue'
import { adminRoutes, router } from './router'
import type { ZefirkaVueAppSetup } from './types'

/**
 * Функция для инициализации приложения
 */
export const createZefirkaApp = (setup: ZefirkaVueAppSetup) => {
    const app = createApp(ZefirkaApp)

    setup({
        app,
        router,
        adminRoutes,
        el: '#app',
    })
}
