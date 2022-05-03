import { Module } from '@nestjs/common';
import { S2SController } from './s2s.controller';
import { S2SService } from './s2s.service';

@Module({
  controllers: [S2SController],
  providers: [S2SService],
})
export class S2SModule {}
