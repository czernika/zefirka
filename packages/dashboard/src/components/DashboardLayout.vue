<template>
    <Box class="flex antialiased lining-nums font-sans min-h-screen">
        <slot name="sidebar">
            <InternalDashboardSidebar />
        </slot>

        <Box as="main" class="flex-grow-1">
            <SharedGridContainer>
                <slot />
            </SharedGridContainer>
        </Box>
    </Box>
</template>
