import { Injectable, NotFoundException } from "@nestjs/common";

import { PrismaService } from "src/prisma/prisma.service";

import { CreateDto } from "./dto/CreateDto";
import { FindManyDto } from "./dto/FindManyDto";
import { UpdateDto } from "./dto/UpdateDto";

@Injectable()
export class FloatingPopulationService {
  private readonly prismaService: PrismaService;
  constructor(prismaService: PrismaService) {
    this.prismaService = prismaService;
  }

  /** 2023/08/07 - 유동인구 생성 - by 1-blue */
  async create({ coords: { latitude, longitude }, ...body }: CreateDto) {
    return await this.prismaService.floatingPopulation.create({
      data: {
        ...body,
        coords: {
          connectOrCreate: {
            // 이미 존재한다면 연결
            where: { latitude_longitude: { latitude, longitude } },
            // 없다면 생성
            create: { latitude, longitude },
          },
        },
      },
    });
  }
  /** 2023/08/07 - 단일 유동인구 찾기 - by 1-blue */
  async findOne(floatingPopulationIdx: number) {
    const exFloatingPopulation =
      await this.prismaService.floatingPopulation.findUnique({
        where: { idx: floatingPopulationIdx },
        include: { coords: { select: { latitude: true, longitude: true } } },
      });

    if (!exFloatingPopulation) {
      throw new NotFoundException("해당 유동인구가 존재하지 않습니다.");
    }

    return exFloatingPopulation;
  }
  /** 2023/08/07 - 유동인구들 찾기 - by 1-blue */
  async findMany({ from, size }: FindManyDto) {
    const [count, datas] = await Promise.all([
      this.prismaService.floatingPopulation.count(),
      this.prismaService.floatingPopulation.findMany({
        ...(from !== -1 && { cursor: { idx: from } }),
        skip: from === -1 ? 0 : 1,
        take: size,
        orderBy: [{ date: "desc" }],
      }),
    ]);

    return { count, datas };
  }
  /** 2023/08/07 - 유동인구 수정 - by 1-blue */
  async update(
    floatingPopulationIdx: number,
    { coords: { latitude, longitude }, ...body }: UpdateDto,
  ) {
    // 존재하는 유동인구인지 확인
    const exFloatingPopulation = await this.findOne(floatingPopulationIdx);

    // 좌표 수정했는지 여부
    const isUpdateCoords =
      exFloatingPopulation.coords.latitude === latitude &&
      exFloatingPopulation.coords.longitude === longitude;

    return await this.prismaService.floatingPopulation.update({
      where: { idx: floatingPopulationIdx },
      data: {
        ...body,
        ...(isUpdateCoords && {
          coords: {
            connectOrCreate: {
              // 이미 존재한다면 연결
              where: { latitude_longitude: { latitude, longitude } },
              // 없다면 생성
              create: { latitude, longitude },
            },
          },
        }),
      },
    });
  }
  /** 2023/08/07 - 유동인구 삭제 - by 1-blue */
  async delete(floatingPopulationIdx: number) {
    // 존재하는 유동인구인지 확인
    await this.findOne(floatingPopulationIdx);

    return await this.prismaService.floatingPopulation.delete({
      where: { idx: floatingPopulationIdx },
    });
  }
}
