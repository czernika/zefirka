import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

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

        tailwindcss(),

        AutoImport({
            imports: ['vue'],
            resolvers: [ElementPlusResolver()],
            dts: './src/types/generated/auto-imports.d.ts',
        }),

        Components({
            dirs: ['src/components'],
            resolvers: [
                ElementPlusResolver(),
                (componentName) => {
                    if (componentName === 'Box') {
                        return { name: 'Box', from: '@zefirkafree/box' }
                    }
                },
            ],
            directoryAsNamespace: true,
            dts: './src/types/generated/components.d.ts',
        }),

        dts({
            copyDtsFiles: true,
            cleanVueFileName: true,
            rollupTypes: true,
            include: ['src/'],
        }),
    ],
})
