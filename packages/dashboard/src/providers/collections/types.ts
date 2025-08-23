import type { RefOrRaw } from '@/types'

export interface ZefirkaCollection {
    /**
     * Заголовок страницы
     */
    title: RefOrRaw

    /**
     * Описание страницы
     */
    description?: RefOrRaw
}
