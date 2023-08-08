import { Module } from "@nestjs/common";

import { PrismaModule } from "./prisma/prisma.module";
import { FloatingPopulationModule } from "./floating-population/floating-population.module";

@Module({
  imports: [PrismaModule, FloatingPopulationModule],
})
export class AppModule {}
