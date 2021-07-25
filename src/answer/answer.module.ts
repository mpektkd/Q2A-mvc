import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerFormRepository } from './answer.repository';
import { Question } from '../question/entities/question.entity';
import { Answer } from './entities/answer.entity';
import { Thread } from '../thread/entities/thread.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Thread, Answer, Question, AnswerFormRepository]),
  ],
  controllers: [AnswerController],
  providers: [AnswerService],
  exports: [AnswerService],
})
export class AnswerModule {}
