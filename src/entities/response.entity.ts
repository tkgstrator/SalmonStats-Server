import { Type } from 'class-transformer';

export class UploadResultEntity {
  results: UploadEntity[];
}

export class UploadEntity {
  wave_id: number;
  created: boolean;
}

export class ResponseEntity {
  constructor() {
    this.results = [];
  }
  @Type(() => ResultEntity)
  results: ResultEntity[];
}

export class ResultEntity {
  event_type: number;
  water_level: number;
  @Type(() => DistributionEntity)
  distribution: DistributionEntity[];
}

export class DistributionEntity {
  golden_ikura_num: number;
  count: number;
}

export class SQLEntity {
  golden_ikura_num: number;
  event_type: number;
  water_level: number;
  count: number;
}
