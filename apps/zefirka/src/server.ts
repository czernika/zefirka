import { ZefirkaNestServer, type ZefirkaNestServerOptions } from '@zefirka/server'

// Запускаем бэкенд для управления пользователями админки
const options: ZefirkaNestServerOptions = {
    // ...
}

await ZefirkaNestServer.bootstrap(options)
