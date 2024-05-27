import { Test, TestingModule } from '@nestjs/testing';
import { PickedPartService } from './picked-part.service';

describe('PickedPartService', () => {
  let service: PickedPartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PickedPartService],
    }).compile();

    service = module.get<PickedPartService>(PickedPartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
