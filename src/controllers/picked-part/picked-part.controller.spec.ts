import { Test, TestingModule } from '@nestjs/testing';
import { PickedPartController } from './picked-part.controller';

describe('PickedPartController', () => {
  let controller: PickedPartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PickedPartController],
    }).compile();

    controller = module.get<PickedPartController>(PickedPartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
