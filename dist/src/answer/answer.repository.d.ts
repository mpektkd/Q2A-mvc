import { Repository } from 'typeorm';
import { Question } from '../question/entities/question.entity';
import { SubmitAnswer } from '../interfaces/submitAnswer';
export declare class AnswerFormRepository extends Repository<Question> {
    DisplayQuestionList(): Promise<Question[]>;
    SubmitAnswer(submitAnswer: SubmitAnswer): Promise<void>;
}
