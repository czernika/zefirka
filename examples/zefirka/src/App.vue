<script lang="ts" setup>
import brand from './assets/img/cool.png?url'
import { DashboardLayout } from '@zefirkafree/dashboard'

// Импортируем стили админки
import '@zefirkafree/dashboard/styles'
</script>

<template>
    <DashboardLayout :brand>
        <RouterView />
    </DashboardLayout>
</template>
