<script lang="ts" setup>
import type { AppIcon } from '@/types'

const { icon } = defineProps<{
    icon: AppIcon
}>()

const iconClass = computed(() => `icon-${icon}`)
</script>

<template>
    <Box as="i" :class="iconClass" class="text-2xl text-slate-600" />
</template>
