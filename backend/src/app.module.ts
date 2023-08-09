import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

import { PrismaModule } from "./prisma/prisma.module";
import { FloatingPopulationModule } from "./floating-population/floating-population.module";

@Module({
  imports: [
    PrismaModule,
    FloatingPopulationModule,
    // React 정적 배포 ( BE가 빌드된 곳을 기준으로 FE 파일 빌드된 경로 입력 )
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "..", "..", "frontend", "dist"),
    }),
  ],
})
export class AppModule {}
