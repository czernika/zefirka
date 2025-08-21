<script lang="ts" setup>
import { computed } from 'vue'
import DashboardLayout from './layouts/DashboardLayout.vue'

/**
 * Сборка CSS
 */
import './assets/css/output.css'

const layout = computed(() => {
    return DashboardLayout
})
</script>

<template>
    <component :is="layout">
        <RouterView />
    </component>
</template>
