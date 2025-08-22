<script lang="ts" setup generic="T extends DefineComponent">
import type { DefineComponent } from 'vue'

const { as = 'div' } = defineProps<{
    /**
     * Элемент, который будет отрендерен
     * @default 'div'
     */
    as?: string | T
}>()
</script>

<template>
    <component :is="as">
        <slot />
    </component>
</template>
