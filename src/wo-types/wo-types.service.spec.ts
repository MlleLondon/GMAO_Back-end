import { Test, TestingModule } from '@nestjs/testing';
import { WoTypesService } from './wo-types.service';

describe('WoTypesService', () => {
  let service: WoTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WoTypesService],
    }).compile();

    service = module.get<WoTypesService>(WoTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
