<script lang="ts" setup>
const {
    x = 'start',
    y = 'center',
    column = false,
    wrap = false,
} = defineProps<{
    /**
     * Выравнивание по оси X
     */
    x?: 'center' | 'start' | 'end' | 'between'

    /**
     * Выравнивание по оси Y
     */
    y?: 'center' | 'start' | 'end' | 'stretch'

    /**
     * Выравнивание в колонку
     */
    column?: boolean

    /**
     * Прерывать ли колонку или нет
     */
    wrap?: boolean
}>()

const rowClass = computed(() => ({
    'justify-start': x === 'start',
    'justify-center': x === 'center',
    'justify-end': x === 'end',
    'justify-between': x === 'between',

    'items-start': y === 'start',
    'items-center': y === 'center',
    'items-end': y === 'end',
    'items-stretch': y === 'stretch',

    'flex-col': column,

    'flex-wrap': wrap,
}))
</script>

<template>
    <Box class="flex" :class="rowClass">
        <slot />
    </Box>
</template>
