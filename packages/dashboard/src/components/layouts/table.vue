<script lang="ts" setup generic="T extends Record<string, any>">
const { data, columns, title = undefined } = defineProps<{
    data: T[]
    columns: {
        key: string
        label: string
    }[]
    title?: string
}>()
</script>

<template>
    <Box class="p-4 rounded-md shadow-sm bg-white mb-4">
        <SharedTypographyHeading v-if="title" as="h2">
            {{ title }}
        </SharedTypographyHeading>

        <SharedDataTable :data :columns>
            <template #default="{ row, column }">
                <slot :row :column />
            </template>
        </SharedDataTable>
    </Box>
</template>
