import {
  Controller,
  Post,
  HttpCode,
  Body,
  Get,
  Query,
  Patch,
  Delete,
  Param,
} from "@nestjs/common";

import { FloatingPopulationService } from "./floating-population.service";

import { CreateDto } from "./dto/CreateDto";
import { FindManyDto } from "./dto/FindManyDto";
import { UpdateDto } from "./dto/UpdateDto";

@Controller("floating-population")
export class FloatingPopulationController {
  private readonly floatingPopulation: FloatingPopulationService;
  constructor(floatingPopulation: FloatingPopulationService) {
    this.floatingPopulation = floatingPopulation;
  }

  /** 2023/08/07 - 유동인구 생성 - by 1-blue */
  @Post()
  @HttpCode(201)
  async create(@Body() body: CreateDto) {
    return await this.floatingPopulation.create(body);
  }
  /** 2023/08/08 - 모든 유동인구들 찾기 - by 1-blue */
  @Get("all")
  async findAll() {
    return await this.floatingPopulation.findAll();
  }
  /** 2023/08/07 - 단일 유동인구 찾기 - by 1-blue */
  @Get(":floatingPopulationIdx")
  async findOne(@Param("floatingPopulationIdx") floatingPopulationIdx: number) {
    return await this.floatingPopulation.findOne(floatingPopulationIdx);
  }
  /** 2023/08/07 - 유동인구들 찾기 - by 1-blue */
  @Get("")
  async findMany(@Query() query: FindManyDto) {
    return await this.floatingPopulation.findMany(query);
  }
  /** 2023/08/07 - 유동인구 수정 - by 1-blue */
  @Patch(":floatingPopulationIdx")
  async update(
    @Param("floatingPopulationIdx") floatingPopulationIdx: number,
    @Body() body: UpdateDto,
  ) {
    return await this.floatingPopulation.update(floatingPopulationIdx, body);
  }
  /** 2023/08/07 - 유동인구 삭제 - by 1-blue */
  @Delete(":floatingPopulationIdx")
  async delete(@Param("floatingPopulationIdx") floatingPopulationIdx: number) {
    return await this.floatingPopulation.delete(floatingPopulationIdx);
  }
}
