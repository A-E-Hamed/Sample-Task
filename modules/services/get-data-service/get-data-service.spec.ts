import { Test, TestingModule } from '@nestjs/testing';
import { GetDataServiceService } from './get-data-service';

describe('GetDataServiceService', () => {
  let service: GetDataServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetDataServiceService],
    }).compile();

    service = module.get<GetDataServiceService>(GetDataServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
