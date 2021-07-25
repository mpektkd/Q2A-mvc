import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { ThreadUsersUserModule } from '../thread-users-user/thread-users-user.module';
import { ThreadModule } from '../thread/thread.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewQuestionRepo } from './new_question.repo';

@Module({
  imports: [
    TypeOrmModule.forFeature([NewQuestionRepo]),
    ThreadModule,
    ThreadUsersUserModule,
  ],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
