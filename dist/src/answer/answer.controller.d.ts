import { HttpStatus } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import RequestWithUser from '../auth/requestWithUser.interface';
import { Response } from 'express';
export declare class AnswerController {
    private readonly answerService;
    constructor(answerService: AnswerService);
    GetQuestions(req: RequestWithUser): Promise<{
        length: number;
        KList: import("../keywords/entities/keyword.entity").Keyword[];
        logged: boolean;
    }>;
    unLoggedGetQuestions(req: RequestWithUser): Promise<{
        length: number;
        KList: import("../keywords/entities/keyword.entity").Keyword[];
        logged: boolean;
    }>;
    SeeThread(req: RequestWithUser): Promise<{
        res: import("../thread/entities/thread.entity").Thread;
        logged: boolean;
    }>;
    SeeThreadUnLogged(questionId: number): Promise<{
        res: import("../thread/entities/thread.entity").Thread;
        logged: boolean;
    }>;
    SubmitAnswer(req: RequestWithUser, res: Response): Promise<{
        url: string;
        status: HttpStatus;
    }>;
    findOne(id: string): Promise<import("./entities/answer.entity").Answer>;
    update(id: string, updateAnswerDto: UpdateAnswerDto): Promise<import("./entities/answer.entity").Answer>;
    remove(id: string): Promise<void>;
}
