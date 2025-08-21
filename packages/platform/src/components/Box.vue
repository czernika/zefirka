<script lang="ts" setup>
import type { DefineComponent } from 'vue'

const { as = 'div' } = defineProps<{
    as?: string | DefineComponent<any, any, any>
}>()
</script>

<template>
    <component :is="as">
        <slot />
    </component>
</template>
