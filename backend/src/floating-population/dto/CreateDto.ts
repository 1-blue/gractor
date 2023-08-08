import { IsDate, IsNumber, IsObject, IsString } from "class-validator";
import { Transform } from "class-transformer";
import type { Coords } from "@prisma/client";

export class CreateDto {
  @IsString()
  name: string;

  @IsNumber()
  amount: number;

  @IsObject()
  coords: Pick<Coords, "latitude" | "longitude">;

  @IsDate()
  @Transform(({ value }) => new Date(value))
  date: Date;
}
