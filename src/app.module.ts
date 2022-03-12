import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WavesModule } from './waves/waves.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [WavesModule],
})
export class AppModule {}
