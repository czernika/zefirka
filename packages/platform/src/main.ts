import { createApp } from 'vue'
import ZefirkaApp from './ZefirkaApp.vue'
import type { App } from 'vue'
import { router } from './router'

type ZefirkaVueAppSetup = (ctx: {
    /**
     * Инициализированное приложение
     */
    app: App
}) => void

const app = createApp(ZefirkaApp)

/**
 * Функция для инициализации приложения
 */
export const createZefirkaApp = (setup: ZefirkaVueAppSetup) => {
    setup({
        app,
    })

    app
        .use(router)
        .mount('#app')
}
