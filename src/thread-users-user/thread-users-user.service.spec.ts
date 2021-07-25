import { Test, TestingModule } from '@nestjs/testing';
import { ThreadUsersUserService } from './thread-users-user.service';

describe('ThreadUsersUserService', () => {
  let service: ThreadUsersUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThreadUsersUserService],
    }).compile();

    service = module.get<ThreadUsersUserService>(ThreadUsersUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
