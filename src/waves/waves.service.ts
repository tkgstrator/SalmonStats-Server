import { Injectable } from '@nestjs/common';
import { Waves } from 'src/entities/wave.entity';
import { WaveDTO, WaveResult } from './waves.dto';
import { Repository, InsertResult, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';

@Injectable()
export class WavesService {
  constructor(
    @InjectRepository(Waves)
    private readonly waveRepository: Repository<Waves>,
  ) {}

  async findAll(): Promise<Waves[]> {
    return await this.waveRepository.find();
  }

  async create(waves: Waves[]): Promise<InsertResult> {
    return await this.waveRepository
      .createQueryBuilder()
      .insert()
      .into(Waves)
      .values(waves)
      .orIgnore()
      .execute();
  }

  async find(id: number): Promise<Waves[]> {
    /// 辞書を宣言
    return this.waveRepository
      .createQueryBuilder()
      .select('golden_ikura_num, COUNT(*) as count, event_type, water_level')
      .where('start_time = :id', { id })
      .groupBy('golden_ikura_num, event_type, water_level')
      .orderBy('event_type, water_level, golden_ikura_num')
      .execute();
  }
}
