import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { WavesService } from './waves.service';
import { WaveResultDTO } from 'src/waves/waves.dto';
import { Waves } from 'src/entities/wave.entity';
import {
  ResponseEntity,
  UploadResultEntity,
} from 'src/entities/response.entity';

@Controller('waves')
export class WavesController {
  constructor(private readonly service: WavesService) {}

  @Post()
  create(@Body() wave: WaveResultDTO): Promise<UploadResultEntity> {
    const waves = wave.results.map((result) => {
      const wave = new Waves();
      const members = result.members.sort();
      wave.ikura_num = result.ikura_num;
      wave.golden_ikura_num = result.golden_ikura_num;
      wave.golden_ikura_pop_num = result.golden_ikura_pop_num;
      wave.is_clear = result.is_clear;
      wave.event_type = result.event_type;
      wave.water_level = result.water_level;
      wave.quota_num = result.quota_num;
      wave.start_time = result.start_time;
      wave.player_1 = members[0];
      wave.player_2 = members[1];
      wave.player_3 = members[2];
      wave.player_4 = members[3];

      // オフセットを計算
      const offset = Math.floor((result.play_time - result.start_time) / 30);
      const play_time = result.start_time + offset * 30;
      wave.play_time = play_time;
      return wave;
    });
    return this.service.create(waves);
  }

  @Get()
  findAll(): Promise<Waves[]> {
    throw new HttpException(
      'Method Not Allowed',
      HttpStatus.METHOD_NOT_ALLOWED,
    );
  }

  @Get(':id')
  find(@Param('id') id): Promise<ResponseEntity> {
    return this.service.find(id);
  }
}
