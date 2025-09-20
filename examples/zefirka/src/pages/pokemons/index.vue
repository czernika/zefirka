<script lang="ts" setup>
import { Screen, TableLayout } from '@zefirkafree/dashboard'
import { onMounted, ref } from 'vue'

const pokemons = ref<{ name: string, url: string }[]>([])

const columns = [
    { key: 'name', label: 'Название' },
    { key: 'url', label: 'Ссылка' },
]

onMounted(async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5', {
        method: 'GET',
    })
    const data = await response.json()

    pokemons.value = data.results
})
</script>

<template>
    <Screen title="Покемоны" description="Нереактивное описание страницы">
        <TableLayout :data="pokemons" :columns>
            <template #default="{ row, column }">
                <template v-if="column.key === 'url'">
                    <a :href="row.url" target="_blank">
                        {{ row.url }}
                    </a>
                </template>
            </template>
        </TableLayout>

        <TableLayout :data="pokemons" :columns title="Вторая таблица с заголовком">
            <template #default="{ row, column }">
                <template v-if="column.key === 'url'">
                    <a :href="row.url" target="_blank">
                        {{ row.url }}
                    </a>
                </template>
            </template>
        </TableLayout>
    </Screen>
</template>
