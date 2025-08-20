import { NestFactory } from "@nestjs/core"
import { AppModule } from "../src/app.module"
import type { ZefirkaNestServerOptions } from "./types"

export class ZefirkaNestServer {
    static async bootstrap(options: ZefirkaNestServerOptions = {}) {
        const {
            port = 3000,
        } = options

        const app = await NestFactory.create(AppModule)

        // Run, Forest, run!
        await app.listen(port)

        return app
    }
}
