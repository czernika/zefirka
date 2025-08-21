import { ZefirkaNestServer, type ZefirkaNestServerOptions } from '@zefirkafree/server'

// Запускаем бэкенд для управления пользователями админки
const options: ZefirkaNestServerOptions = {
    // ...
}

await ZefirkaNestServer.bootstrap(options)
