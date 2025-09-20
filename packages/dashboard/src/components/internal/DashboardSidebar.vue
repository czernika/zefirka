<template>
    <Box as="aside" class="lg:sticky lg:top-0 lg:bottom-auto fixed bottom-0 inset-x-0 lg:inset-x-auto lg:h-screen shadow-sm shrink-0 z-10 py-2.5 lg:py-4 bg-white w-full lg:max-w-80">
        <SharedGridContainer class="flex justify-between items-center lg:items-stretch lg:justify-start gap-4 lg:gap-0 lg:flex-col">
            <SharedGridRow class="lg:h-header gap-4" :wrap="false">
                <InternalDashboardLogo />

                <Box>
                    <SharedTypographyHeading>
                        Зефирка
                    </SharedTypographyHeading>
                    <SharedTypographyText muted size="xs">
                        Бета-версия
                    </SharedTypographyText>
                </Box>
            </SharedGridRow>

            <Box class="hidden lg:block">
                <SharedGridDivider />

                <InternalMenuItem icon="stars" title="Коллекции" />
            </Box>

            <SharedGridCentered class="lg:hidden">
                <InternalMenuIcon icon="hamburger" />
            </SharedGridCentered>
        </SharedGridContainer>
    </Box>
</template>
