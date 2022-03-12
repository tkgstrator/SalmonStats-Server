import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';

export class WaveResult {
  @Type(() => WaveDTO)
  @ValidateNested()
  results: WaveDTO[];
}

export class WaveDTO {
  wave_id: number;

  @IsNotEmpty()
  start_time: number;

  @IsNotEmpty()
  @Min(0)
  @Max(5000)
  ikura_num: number;

  @IsNotEmpty()
  @Min(0)
  @Max(150)
  golden_ikura_num: number;

  @IsNotEmpty()
  @Min(0)
  @Max(150)
  golden_ikura_pop_num: number;

  @IsNotEmpty()
  @Min(0)
  @Max(25)
  quota_num: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(6)
  event_type: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(2)
  water_level: number;

  @IsNotEmpty()
  is_clear: boolean;
}

export enum WaterLevel {
  Low = 0,
  Middle = 1,
  High = 2,
}

export enum EventType {
  WaterLevels = 0,
  Rush = 1,
  GoldieSeeking = 2,
  Griller = 3,
  TheMothership = 4,
  Fog = 5,
  CohockCharge = 6,
}
