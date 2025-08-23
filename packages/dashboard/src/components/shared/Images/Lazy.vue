<script lang="ts" setup>
const { src, fit = 'cover' } = defineProps<{
    /**
     * Источник изображения
     */
    src: string

    /**
     * Вписываемость изображения
     */
    fit?: 'cover' | 'contain'
}>()
</script>

<template>
    <ElImage :fit :src lazy />
</template>
