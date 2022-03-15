import { Injectable } from '@nestjs/common';
import { Waves } from 'src/entities/wave.entity';
import { Repository, InsertResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import {
  ResponseEntity,
  SQLEntity,
  DistributionEntity,
  ResultEntity,
  UploadEntity,
  UploadResultEntity,
} from 'src/entities/response.entity';

@Injectable()
export class WavesService {
  constructor(
    @InjectRepository(Waves)
    private readonly waveRepository: Repository<Waves>,
  ) {}

  async findAll(): Promise<Waves[]> {
    return await this.waveRepository.find();
  }

  async create(waves: Waves[]): Promise<UploadResultEntity> {
    const results: InsertResult = await this.waveRepository
      .createQueryBuilder()
      .insert()
      .into(Waves)
      .values(waves)
      .orIgnore()
      .execute();
    const response = new UploadResultEntity();
    response.results = results.identifiers.map((id) => {
      const upload = new UploadEntity();
      upload.wave_id = id === undefined ? null : Number(id['wave_id']);
      upload.created = id != null;
      return upload;
    });
    return response;
  }

  async find(id: number): Promise<ResponseEntity> {
    /// 辞書を宣言
    const res = await this.waveRepository
      .createQueryBuilder()
      .select('golden_ikura_num, COUNT(*) as count, event_type, water_level')
      .where('start_time = :id', { id })
      .groupBy('golden_ikura_num, event_type, water_level')
      .orderBy('event_type, water_level, golden_ikura_num')
      .execute();

    /// Waves[] => SQLEntity
    const results: SQLEntity[] = res.map((result) => {
      return plainToClass(SQLEntity, result);
    });

    const response = new ResponseEntity();
    /// SQLEntity => ResponseEntity
    [0, 1, 2, 3, 4, 5, 6].forEach((event_type) => {
      [0, 1, 2].forEach((water_level) => {
        const result = new ResultEntity();
        result.event_type = event_type;
        result.water_level = water_level;
        result.distribution = results
          .filter((data) => {
            return (
              data.event_type === event_type && data.water_level === water_level
            );
          })
          .map((data) => {
            const dist = new DistributionEntity();
            dist.golden_ikura_num = data.golden_ikura_num;
            dist.count = Number(data.count);
            return dist;
          });
        response.results.push(result);
      });
    });
    return response;
  }
}
