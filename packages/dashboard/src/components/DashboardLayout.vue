<script lang="ts" setup>
import logo from '../assets/images/brand.svg?url'
import { ZEFIRKA_OPTIONS_PROVIDER_KEY, type ZefirkaOptions } from '@/providers'

const props = defineProps<{
    /**
     * Логотип (путь до файла) бренда,
     * который будет отображаться в сайдбаре
     */
    brand?: string

    /**
     * Идет ли в данный момент загрузка контента или нет
     */
    loading?: boolean
}>()

/**
 * Основные опции приложения
 */
provide<ZefirkaOptions>(ZEFIRKA_OPTIONS_PROVIDER_KEY, {
    brand: props.brand || logo,
    loading: computed(() => props.loading),
})
</script>

<template>
    <Box class="lg:flex antialiased lining-nums text-sm font-sans min-h-screen bg-slate-50 text-slate-800 selection:bg-slate-800 selection:text-slate-50">
        <slot name="sidebar">
            <InternalDashboardSidebar />
        </slot>

        <Box class="flex-grow-1 py-4 pb-16 lg:pb-0">
            <SharedGridContainer>
                <InternalDashboardHeader class="mb-8" />

                <Box as="main">
                    <slot />
                </Box>
            </SharedGridContainer>
        </Box>
    </Box>
</template>
