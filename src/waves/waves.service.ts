import { Injectable } from '@nestjs/common';
import { WaveDto } from 'src/waves/dto/waves.dto';

@Injectable()
export class WavesService {
  public waves: WaveDto[] = [];

  create(wave: WaveDto): WaveDto {
    this.waves.push(wave);
    return wave;
  }

  findAll() {
    return this.waves;
  }
}
