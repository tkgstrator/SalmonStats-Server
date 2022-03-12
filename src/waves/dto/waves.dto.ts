import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class WaveDto {
  @IsNotEmpty()
  play_time: number;

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
  @IsNumber()
  @Min(0)
  @Max(6)
  event_type: EventType;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(2)
  @ApiProperty({ enum: [0, 1, 2] })
  water_level: WaterLevel;

  @IsNotEmpty()
  @Min(0)
  @Max(25)
  quota_num: number;

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
