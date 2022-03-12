import { Injectable } from '@nestjs/common';
import { Waves } from 'src/entities/wave.entity';
import { WaveDTO, WaveResult } from './waves.dto';
import { Repository, InsertResult } from 'typeorm';
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

  // async create(wave: WaveDTO): Promise<InsertResult> {
  //   return this.waveRepository.insert(wave);
  // }

  async create(waves: WaveResult): Promise<InsertResult> {
    return this.waveRepository.insert(waves.results);
  }

  async find(id: number): Promise<Waves> | null {
    return await this.waveRepository.findOne({ wave_id: id });
  }
}
