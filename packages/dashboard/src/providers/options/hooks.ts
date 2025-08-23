import { ZEFIRKA_OPTIONS_PROVIDER_KEY } from './constants'
import type { ZefirkaOptions } from './types'

export const useZefirkaOptions = () => {
    const ctx = inject<ZefirkaOptions>(ZEFIRKA_OPTIONS_PROVIDER_KEY)

    if (!ctx) {
        throw new Error(`Некорректное использование провайдера ${ZEFIRKA_OPTIONS_PROVIDER_KEY}`)
    }

    return ctx
}
