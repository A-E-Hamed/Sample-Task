import { Test, TestingModule } from '@nestjs/testing';
import { UpdateDataController } from './update-data.controller';

describe('UpdateDataController', () => {
  let controller: UpdateDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateDataController],
    }).compile();

    controller = module.get<UpdateDataController>(UpdateDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
