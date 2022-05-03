import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  ArrayMaxSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';

export class S2SRequestDTO {
  @IsNotEmpty()
  naIdToken: string;

  @IsNotEmpty()
  timestamp: number;
}

export class S2SResultDTO {
  @IsNotEmpty()
  naIdToken: string;

  @IsNotEmpty()
  timestamp: number;

  @IsNotEmpty()
  hash: string;
}
