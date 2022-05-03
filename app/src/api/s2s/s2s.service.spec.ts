import { Test, TestingModule } from '@nestjs/testing';
import { S2SService } from './s2s.service';

describe('S2SService', () => {
  let service: S2SService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [S2SService],
    }).compile();

    service = module.get<S2SService>(S2SService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
