<script lang="ts" setup>
import logo from '../assets/images/brand.svg?url'
import { ZEFIRKA_OPTIONS_PROVIDER_KEY, type ZefirkaOptions } from '@/providers'

const { brand = logo } = defineProps<{
    /**
     * Логотип (путь до файла) бренда,
     * который будет отображаться в сайдбаре
     */
    brand?: string
}>()

/**
 * Основные опции приложения
 */
provide<ZefirkaOptions>(ZEFIRKA_OPTIONS_PROVIDER_KEY, {
    brand,
})
</script>

<template>
    <Box class="lg:flex antialiased lining-nums text-sm font-sans min-h-screen bg-slate-50 text-slate-800 selection:bg-slate-800 selection:text-slate-50">
        <slot name="sidebar">
            <InternalDashboardSidebar />
        </slot>

        <Box class="flex-grow-1 py-4 pb-16 lg:pb-0">
            <SharedGridContainer>
                <slot />
            </SharedGridContainer>
        </Box>
    </Box>
</template>
