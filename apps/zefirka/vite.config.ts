import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { zefirka } from '@zefirkafree/platform/vite'

export default defineConfig({
    plugins: [
        // Требуется для работы с проектами на VueJS
        vue(),

        zefirka({
            // ...
        }),
    ],
})
