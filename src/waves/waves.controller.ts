import { Controller, Post, Get, Body } from '@nestjs/common';
import { WaveDto } from 'src/waves/dto/waves.dto';
import { WavesService } from './waves.service';

@Controller('waves')
export class WavesController {
  constructor(private service: WavesService) {}

  @Post('/')
  create(@Body() wave: WaveDto): WaveDto {
    return this.service.create(wave);
  }

  @Get('/')
  findAll(): WaveDto[] {
    return this.service.findAll();
  }
}
