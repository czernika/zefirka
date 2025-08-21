import { createZefirkaApp } from '@zefirka/platform'

createZefirkaApp(({ app, router, routes, el }) => {
    app
        // Инициализируем маршрутизатор. Сами маршруты могут быть дополнительно конфигурированы,
        // в параметры можно передать обыкновенные объекты vue-router маршрута
        // Например, можно настроить редирект с `/` на `/dashboard`:
        // routes.push({ path: '/', redirect: '/dashboard' }) и т.д.
        .use(router.withRoutes(routes))

        // Монтируем приложение. По-умолчанию, в корне проекта должен
        // быть элемент с id="app", однако это может быть изменено
        .mount(el)
})
