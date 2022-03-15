import { Module } from '@nestjs/common';
import { WavesController } from './waves.controller';
import { WavesService } from './waves.service';
import { Waves } from 'src/entities/wave.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Waves])],
  controllers: [WavesController],
  providers: [WavesService],
})
export class WavesModule {}
