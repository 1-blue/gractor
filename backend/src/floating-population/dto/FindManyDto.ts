import { IsNumber, IsOptional } from "class-validator";
import { Transform } from "class-transformer";

export class FindManyDto {
  @Transform(({ value }) => parseInt(value || -1))
  @IsNumber()
  @IsOptional()
  from = -1;

  @Transform(({ value }) => parseInt(value || 15))
  @IsNumber()
  @IsOptional()
  size = 15;
}
