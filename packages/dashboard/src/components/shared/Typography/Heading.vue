<script lang="ts" setup>
const { as = 'h2', bold = true } = defineProps<{
    /**
     * Возможные значения HTML-тегов для рендеринга компонента
     * Исключаем h5 и h6
     */
    as?: 'h1' | 'h2' | 'h3' | 'h4'

    /**
     * Показывать заголовок жирным или нет
     * По-умолчанию текст не жирный, потому мы переписываем здесь дефолтное значение
     */
    bold?: boolean
}>()
</script>

<template>
    <SharedTypographyText :as :bold>
        <slot />
    </SharedTypographyText>
</template>
