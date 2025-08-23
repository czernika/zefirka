import { ZEFIRKA_COLLECTIONS_PROVIDER_KEY, type ZefirkaCollection } from '@/providers'

export const defineCollection = (options: ZefirkaCollection) => {
    const app = getCurrentInstance()?.appContext?.app

    app?.provide<ZefirkaCollection>(ZEFIRKA_COLLECTIONS_PROVIDER_KEY, options)
}
