import { Repository } from 'typeorm';
import { QuestionFormDto } from '../models/question-form';
import { Question } from './entities/question.entity';
import { QuestionByDayModel } from '../models/questionByDay';
export declare class NewQuestionRepo extends Repository<Question> {
    AskQuestion(user: any, QuestionForm: QuestionFormDto): Promise<void>;
    ShowCharts(): Promise<QuestionByDayModel[]>;
    PaginateQuestions(kid: number, pageNumber: number, pageSize: number, dateFrom: string, dateTo: string): Promise<Question[]>;
}
