<script setup lang="ts">
import Box from '../Box.vue'
</script>

<template>
    <Box as="aside" class="sticky top-0 h-screen w-12 bg-black">
        <slot />
    </Box>
</template>
