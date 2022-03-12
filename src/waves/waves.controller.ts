import { Controller, Post, Get, Body } from '@nestjs/common';
import { WavesService } from './waves.service';
import { WaveDTO, WaveResult } from 'src/waves/waves.dto';
import { InsertResult } from 'typeorm';

@Controller('waves')
export class WavesController {
  constructor(private readonly service: WavesService) {}

  // @Post()
  // create(@Body() waves: WaveResult): Promise<InsertResult> {
  //   return this.service.create(waves);
  // }

  @Post()
  create(@Body() wave: WaveResult): Promise<InsertResult> {
    return this.service.create(wave);
  }

  @Get()
  async getWaves(): Promise<WaveDTO[]> {
    return await this.service.findAll();
  }
}
