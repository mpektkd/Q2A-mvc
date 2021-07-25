import { Module } from '@nestjs/common';
import { ThreadUsersUserService } from './thread-users-user.service';
import { ThreadUsersUserController } from './thread-users-user.controller';

@Module({
  controllers: [ThreadUsersUserController],
  providers: [ThreadUsersUserService],
  exports: [ThreadUsersUserService],
})
export class ThreadUsersUserModule {}
