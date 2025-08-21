import type { Plugin } from 'vite'
import VueRouter from 'unplugin-vue-router/vite'
import type { ZefirkaVitePluginOptions } from './types'

export const zefirka = (options: ZefirkaVitePluginOptions = {}): Plugin[] => {
    const {
        pages = 'src/pages',
        dts: vueRouterDts = 'src/types/generated/router.d.ts',
    } = options

    return [
        // @see https://github.com/posva/unplugin-vue-router
        {
            name: '__zefirka-unplugin-vue-router',
            ...VueRouter({
                routesFolder: [
                    {
                        src: pages,
                    },
                ],
                dts: vueRouterDts,
            }),
        },
    ]
}
