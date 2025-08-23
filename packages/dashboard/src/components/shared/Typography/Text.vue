<script setup lang="ts">
const {
    size = 'sm',
    bold = false,
    muted = false,
    align = undefined,
} = defineProps<{
    /**
     * Размер текста
     */
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'

    /**
     * Показывать текст жирным или нет
     */
    bold?: boolean

    /**
     * "Приглушен" текст или нет
     */
    muted?: boolean

    /**
     * Выравнивание текста
     */
    align?: 'left' | 'center' | 'right'
}>()

const textClass = computed(() => ({
    'text-xs': size === 'xs',
    'text-sm': size === 'sm',
    'text-base': size === 'base',
    'text-lg': size === 'lg',
    'text-xl': size === 'xl',

    'font-semibold': bold,

    'text-left': align === 'left',
    'text-center': align === 'center',
    'text-right': align === 'right',

    'text-slate-500': muted,
}))
</script>

<template>
    <Box :class="textClass">
        <slot />
    </Box>
</template>
