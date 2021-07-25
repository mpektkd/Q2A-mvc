import { Module } from '@nestjs/common';
import { KeywordsService } from './keywords.service';
import { KeywordsController } from './keywords.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from '../question/entities/question.entity';
import { AnswerFormRepo } from './keyword.repository';
import { Keyword } from './entities/keyword.entity';
import { Thread } from '../thread/entities/thread.entity';
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "../auth/constants";

@Module({
  imports: [
    TypeOrmModule.forFeature([Keyword, Question, Thread, AnswerFormRepo,]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1m' },
    }),
  ],
  controllers: [KeywordsController],
  providers: [KeywordsService],
  exports: [KeywordsService],
})
export class KeywordsModule {}
