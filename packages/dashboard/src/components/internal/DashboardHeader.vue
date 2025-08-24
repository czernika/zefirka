<script lang="ts" setup>
import { useScreen } from '@/providers'

const { title, description, loading } = useScreen()
</script>

<template>
    <SharedGridRow v-loading="loading" as="header" class="rounded-xl bg-white p-4 min-h-header shadow-md overflow-hidden">
        <Box>
            <SharedTypographyHeading bold>
                {{ title }}
            </SharedTypographyHeading>

            <Box v-if="description" class="line-clamp-1">
                <SharedTypographyParagraph size="xs" muted>
                    {{ description }}
                </SharedTypographyParagraph>
            </Box>
        </Box>
    </SharedGridRow>
</template>
