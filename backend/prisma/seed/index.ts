import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// type
import type { Prisma } from "@prisma/client";

/** (주) 그렉터 유동인구의 하루 가짜 데이터들 */
const getMocFloatingPopulation = (
  count: number,
  name: string,
  coordsIdx: number,
  value: number,
): Prisma.FloatingPopulationCreateManyInput[] =>
  Array(count)
    .fill(null)
    .map((_v, i) => i + 1)
    .map((v) => ({
      name,
      amount: value * Math.ceil(Math.random() * 100),
      date: new Date(2023, 9, 8, v - 1, 0, 0),
      coordsIdx,
    }));

async function main() {
  // "(주) 그렉터" 좌표 등록
  await prisma.coords.create({
    data: { latitude: 37.5114116206258, longitude: 127.079687718424 },
  });
  // 잠실종합운동장
  await prisma.coords.create({
    data: { latitude: 37.5148022, longitude: 127.0736261 },
  });
  // 아시아공원
  await prisma.coords.create({
    data: { latitude: 37.5106823860183, longitude: 127.075936810272 },
  });
  // 송파어린이도서관
  await prisma.coords.create({
    data: { latitude: 37.5121020708813, longitude: 127.08242916877 },
  });

  // 가짜 유동인구 데이터 등록
  await Promise.all([
    prisma.floatingPopulation.createMany({
      skipDuplicates: true,
      data: getMocFloatingPopulation(6, "(주) 그렉터", 1, 300),
    }),
    prisma.floatingPopulation.createMany({
      skipDuplicates: true,
      data: getMocFloatingPopulation(23, "잠실종합운동장", 2, 700),
    }),
    prisma.floatingPopulation.createMany({
      skipDuplicates: true,
      data: getMocFloatingPopulation(23, "아시아공원", 3, 500),
    }),
    prisma.floatingPopulation.createMany({
      skipDuplicates: true,
      data: getMocFloatingPopulation(23, "송파어린이도서관", 4, 900),
    }),
  ]);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    // process.exit(1);
  });
