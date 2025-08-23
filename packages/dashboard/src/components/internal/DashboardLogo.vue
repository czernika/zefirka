<script setup lang="ts">
import logo from '../../assets/images/brand.svg?url'
</script>

<template>
    <Box class="w-brand h-brand">
        <SharedImagesLazy class="w-full h-full" fit="contain" :src="logo" alt="Зефирка" />
    </Box>
</template>
