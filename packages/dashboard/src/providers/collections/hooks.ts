import { ZEFIRKA_COLLECTIONS_PROVIDER_KEY } from './constants'
import type { ZefirkaCollection } from './types'

export const useCollection = () => {
    const ctx = inject<ZefirkaCollection>(ZEFIRKA_COLLECTIONS_PROVIDER_KEY)

    if (!ctx) {
        throw new Error('Неизвестная коллекция! Возможно, вы забыли импортировать `defineCollection`?')
    }

    return ctx
}
