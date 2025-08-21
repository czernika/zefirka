import { createZefirkaApp } from '@zefirkafree/platform'

createZefirkaApp(({ app, router, adminRoutes, el }) => {
    app
        // Инициализируем маршрутизатор. Сами маршруты могут быть дополнительно конфигурированы,
        // в параметры можно передать обыкновенные объекты vue-router маршрута
        .use(router.withRoutes(adminRoutes))

        // Монтируем приложение. По-умолчанию, в корне проекта должен
        // быть элемент с id="app", однако это может быть изменено
        .mount(el)
})
