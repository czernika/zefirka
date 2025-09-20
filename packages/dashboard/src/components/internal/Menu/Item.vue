<script lang="ts" setup>
import type { AppIcon } from '@/types'

const { title, icon = undefined } = defineProps<{
    title: string
    icon?: AppIcon
}>()
</script>

<template>
    <SharedGridRow x="start" y="center" class="gap-4 cursor-pointer p-2.5 rounded-md hover:bg-slate-50 duration-200">
        <InternalMenuIcon v-if="icon" :icon />
        <SharedTypographyText muted>
            {{ title }}
        </SharedTypographyText>
    </SharedGridRow>
</template>
