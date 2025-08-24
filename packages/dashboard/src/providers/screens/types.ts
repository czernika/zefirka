import type { RefOrRaw } from '@/types'

export interface ScreenInterface {
    /**
     * Заголовок страницы
     */
    title: RefOrRaw

    /**
     * Описание страницы
     */
    description?: RefOrRaw<string | undefined>

    /**
     * Идет ли в данный момент загрузка контента или нет
     */
    loading: RefOrRaw<boolean>
}
