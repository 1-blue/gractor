import { PartialType } from "@nestjs/mapped-types";

import { CreateDto } from "./CreateDto";

export class UpdateDto extends PartialType(CreateDto) {}
