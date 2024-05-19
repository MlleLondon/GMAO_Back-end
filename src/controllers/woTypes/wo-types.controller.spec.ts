import { Test, TestingModule } from '@nestjs/testing';
import { WoTypesController } from './wo-types.controller';

describe('WoTypesController', () => {
  let controller: WoTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WoTypesController],
    }).compile();

    controller = module.get<WoTypesController>(WoTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
