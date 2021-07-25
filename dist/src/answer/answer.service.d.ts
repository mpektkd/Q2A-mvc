import { UpdateAnswerDto } from './dto/update-answer.dto';
import { Answer } from './entities/answer.entity';
import { EntityManager } from 'typeorm';
import { AnswerFormRepository } from './answer.repository';
import { SubmitAnswer } from '../interfaces/submitAnswer';
import { Thread } from '../thread/entities/thread.entity';
import { QuestionList } from "../models/questions_display";
export declare class AnswerService {
    private manager;
    private readonly repo;
    constructor(manager: EntityManager, repo: AnswerFormRepository);
    SubmitAnswer(submitAnswer: SubmitAnswer): Promise<boolean>;
    GetQuestionList(): Promise<QuestionList>;
    SeeThread(id: number, fromProfile: boolean): Promise<Thread>;
    findAll(): Promise<Answer[]>;
    findOne(id: number): Promise<Answer>;
    update(id: number, updateAnswerDto: UpdateAnswerDto): Promise<Answer>;
    remove(id: number): Promise<void>;
}
