import { Test, TestingModule } from '@nestjs/testing';
import { S2SController } from './s2s.controller';

describe('S2SController', () => {
  let controller: S2SController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [S2SController],
    }).compile();

    controller = module.get<S2SController>(S2SController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
