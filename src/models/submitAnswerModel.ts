import { SubmitAnswer } from '../interfaces/submitAnswer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class SubmitAnswerModel implements SubmitAnswer {
  constructor(body: string, qid: number, userId: number) {
    this.body = body;
    this.qid = qid;
    this.userId = userId;
  }
  @IsNotEmpty()
  @IsString()
  body: string;

  @IsInt()
  qid: number;

  @IsInt()
  userId: number;
}
