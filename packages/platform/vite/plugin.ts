import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

export const zefirka = (): Plugin[] => {
    return [
        vue(),
    ]
}
