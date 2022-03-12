import { Module } from '@nestjs/common';
import { WavesController } from './waves.controller';
import { WavesService } from './waves.service';

@Module({
  controllers: [WavesController],
  providers: [WavesService]
})
export class WavesModule {}
