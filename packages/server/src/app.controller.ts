import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
    /**
     * Простой маршрут для проверки состояния приложения
     */
    @Get('/health')
    health() {
        return {
            ok: true,
        }
    }
}
