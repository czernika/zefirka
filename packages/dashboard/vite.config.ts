import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        lib: {
            entry: {
                index: './src/index.ts',
            },
            formats: ['es'],
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

        dts({
            copyDtsFiles: true,
            cleanVueFileName: true,
            rollupTypes: true,
            include: ['src/'],
        }),
    ],
})
