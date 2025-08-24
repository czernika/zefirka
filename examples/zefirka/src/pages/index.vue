<script lang="ts" setup>
import { Screen } from '@zefirkafree/dashboard'
import { onMounted, ref } from 'vue'

const isLoading = ref(true)
const title = ref('')

onMounted(() => {
    // Симулируем значение, которое подгружается из бэка
    setTimeout(() => {
        title.value = 'Главная'
        isLoading.value = false
    }, 1000)
})
</script>

<template>
    <Screen :title description="Нереактивное описание страницы" :loading="isLoading">
        Зефирка
    </Screen>
</template>
