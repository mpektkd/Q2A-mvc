import { Module } from '@nestjs/common';
import { ThreadService } from './thread.service';
import { ThreadController } from './thread.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Thread } from './entities/thread.entity';
import { Question } from '../question/entities/question.entity';
import { Answer } from '../answer/entities/answer.entity';
import { ThreadUsersUserModule } from '../thread-users-user/thread-users-user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Thread, Question, Answer]),
    ThreadUsersUserModule,
  ],
  controllers: [ThreadController],
  providers: [ThreadService],
  exports: [ThreadService],
})
export class ThreadModule {}
