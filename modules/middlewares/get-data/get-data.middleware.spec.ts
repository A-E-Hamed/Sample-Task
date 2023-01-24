import { GetDataMiddleware } from './get-data.middleware';

describe('GetDataMiddleware', () => {
  it('should be defined', () => {
    expect(new GetDataMiddleware()).toBeDefined();
  });
});
