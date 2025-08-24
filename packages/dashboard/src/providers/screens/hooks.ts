import { ZEFIRKA_SCREEN_PROVIDER_KEY } from './constants'
import type { ScreenInterface } from './types'

export const useScreen = () => {
    const ctx = inject<ScreenInterface>(ZEFIRKA_SCREEN_PROVIDER_KEY)

    if (!ctx) {
        throw new Error('Неизвестная коллекция! Возможно, вы забыли импортировать компонент `Screen`?')
    }

    return ctx
}
