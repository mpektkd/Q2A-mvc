import {
  EntityRepository,
  Repository,
  getConnection,
  getRepository,
} from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Question } from '../question/entities/question.entity';
import { Answer } from './entities/answer.entity';
import { SubmitAnswer } from '../interfaces/submitAnswer';

@Injectable()
@EntityRepository(Question)
@EntityRepository(Answer)
export class AnswerFormRepository extends Repository<Question> {
  public async DisplayQuestionList() {
    return await getConnection()
      .createQueryBuilder()
      .select('question')
      .from(Question, 'question')
      .getMany();
  }

  public async SubmitAnswer(submitAnswer: SubmitAnswer) {
    console.log(submitAnswer.body);
    const body = submitAnswer.body.replace(/[']+/g, '`');
    const qry =
      "call submit_answer('" +
        body +
      "', " +
      submitAnswer.qid +
      ", " +
      submitAnswer.userId +
      ")";

    await this.query(qry);
  }
}
