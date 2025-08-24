<script lang="ts" setup>
import { ZEFIRKA_SCREEN_PROVIDER_KEY, type ScreenInterface } from '@/providers'

const { title, description = undefined, loading = false } = defineProps<{
    /**
     * Заголовок страницы
     */
    title: string

    /**
     * Описание страницы
     */
    description?: string

    /**
     * Идет ли в данный момент загрузка контента или нет
     */
    loading?: boolean
}>()

provide<ScreenInterface>(ZEFIRKA_SCREEN_PROVIDER_KEY, {
    title: computed(() => title),
    description: computed(() => description),
    loading: computed(() => loading),
})
</script>

<template>
    <InternalDashboardHeader class="mb-8" />

    <Box as="main">
        <slot />
    </Box>
</template>
