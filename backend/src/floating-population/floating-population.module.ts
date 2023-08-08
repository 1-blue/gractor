import { Module } from "@nestjs/common";

import { FloatingPopulationController } from "./floating-population.controller";
import { FloatingPopulationService } from "./floating-population.service";

@Module({
  controllers: [FloatingPopulationController],
  providers: [FloatingPopulationService],
})
export class FloatingPopulationModule {}
