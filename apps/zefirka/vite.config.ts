import { defineConfig } from 'vite'
import { zefirka } from '@zefirka/platform/vite'

export default defineConfig({
    plugins: [
        zefirka({
            // ...
        }),
    ],
})
