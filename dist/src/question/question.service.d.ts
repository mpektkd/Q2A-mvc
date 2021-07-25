import { UpdateQuestionDto } from './dto/update-question.dto';
import { EntityManager } from 'typeorm';
import { Question } from './entities/question.entity';
import { QuestionFormDto } from '../models/question-form';
import { NewQuestionRepo } from './new_question.repo';
import { QuestionByDayModel } from '../models/questionByDay';
export declare class QuestionService {
    private manager;
    private readonly repo;
    constructor(manager: EntityManager, repo: NewQuestionRepo);
    create(user: any, QuestionForm: QuestionFormDto): Promise<void>;
    ShowCharts(): Promise<QuestionByDayModel[]>;
    PaginateQuestions(kid: number, pageNumber: number, pageSize: number, dateFrom: string, dateTo: string): Promise<Question[]>;
    findAll(): Promise<Array<Question>>;
    findOne(id: number): Promise<Question>;
    update(id: number, updateQuestionDto: UpdateQuestionDto): Promise<Question>;
    remove(id: number): Promise<void>;
}
