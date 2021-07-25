import { Test, TestingModule } from '@nestjs/testing';
import { ThreadUsersUserController } from './thread-users-user.controller';
import { ThreadUsersUserService } from './thread-users-user.service';

describe('ThreadUsersUserController', () => {
  let controller: ThreadUsersUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThreadUsersUserController],
      providers: [ThreadUsersUserService],
    }).compile();

    controller = module.get<ThreadUsersUserController>(ThreadUsersUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
