import { Body, Controller, Post, Get } from '@nestjs/common';
import { S2SService } from './s2s.service';
import { S2SRequestDTO, S2SResultDTO } from 'src/api/s2s/s2s.dto';

@Controller('api/s2s')
export class S2SController {
  constructor(private readonly service: S2SService) {}
}
