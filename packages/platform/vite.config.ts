import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    build: {
        lib: {
            entry: {
                index: './index.ts',
            },
            formats: ['es'],
            name: 'zefirkaApp',
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    plugins: [
        vue(),
        tailwindcss(),
    ],
})
