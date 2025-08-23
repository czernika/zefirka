<script lang="ts" setup>
import brand from './assets/img/cool.png?url'
import { DashboardLayout, defineCollection } from '@zefirkafree/dashboard'
import { onMounted, ref } from 'vue'

// Импортируем стили админки
import '@zefirkafree/dashboard/styles'

const isLoading = ref(true)
const title = ref('')

onMounted(() => {
    // Симулируем значение, которое подгружается из бэка
    setTimeout(() => {
        title.value = 'Главная'
        isLoading.value = false
    }, 1000)
})

// Определяем коллекцию
defineCollection({
    title,
    description: 'Нереактивное описание страницы',
})
</script>

<template>
    <DashboardLayout :brand :loading="isLoading">
        Зефирка
    </DashboardLayout>
</template>
