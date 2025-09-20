<script lang="ts" setup generic="T extends Record<string, any>">
const { data, columns } = defineProps<{
    data: T[]

    columns: {
        key: string
        label: string
    }[]
}>()
</script>

<template>
    <ElTable :data>
        <ElTableColumn
            v-for="(column, idx) in columns"
            :key="idx"
            :prop="column.key"
            :label="column.label"
        >
            <template #default="{ row }">
                <slot :row :column>
                    {{ row[column.key] }}
                </slot>
            </template>
        </ElTableColumn>
    </ElTable>
</template>
