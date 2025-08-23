<script setup lang="ts">
import { useZefirkaOptions } from '@/providers'

const { brand } = useZefirkaOptions()
</script>

<template>
    <Box class="w-brand h-brand">
        <SharedImagesLazy class="w-full h-full" fit="contain" :src="brand" alt="Зефирка" />
    </Box>
</template>
