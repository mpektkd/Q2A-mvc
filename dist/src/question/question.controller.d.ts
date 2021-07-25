import { QuestionService } from './question.service';
import { UpdateQuestionDto } from './dto/update-question.dto';
import RequestWithUser from '../auth/requestWithUser.interface';
import { Response } from 'express';
import { QuestionFormDto } from '../models/question-form';
export declare class QuestionController {
    private readonly questionService;
    constructor(questionService: QuestionService);
    create(req: RequestWithUser, QuestionFormDto: QuestionFormDto, res: Response): Promise<void>;
    form(): void;
    ShowCharts(): Promise<string>;
    findAll(): Promise<import("./entities/question.entity").Question[]>;
    PaginateQuestions(req: RequestWithUser): Promise<{
        data: import("./entities/question.entity").Question[];
    }>;
    findOne(id: string): Promise<import("./entities/question.entity").Question>;
    update(id: string, updateQuestionDto: UpdateQuestionDto): Promise<import("./entities/question.entity").Question>;
    remove(id: string): Promise<void>;
}
