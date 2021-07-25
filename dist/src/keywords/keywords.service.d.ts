import { CreateKeywordDto } from './dto/create-keyword.dto';
import { UpdateKeywordDto } from './dto/update-keyword.dto';
import { EntityManager } from 'typeorm';
import { Keyword } from './entities/keyword.entity';
import { AnswerFormRepo } from './keyword.repository';
import { KeysAnswersResponse } from '../models/key.answers.ByQuestion';
export declare class KeywordsService {
    private manager;
    private readonly repo;
    constructor(manager: EntityManager, repo: AnswerFormRepo);
    create(createKeywordDto: CreateKeywordDto): Promise<Keyword>;
    findAll(): Promise<Keyword[]>;
    ShowCharts(): Promise<import("../interfaces/QuestionBykey").QuestionBykey[]>;
    KeysAnswersByQuestion(qid: number): Promise<KeysAnswersResponse>;
    findOne(id: number): Promise<Keyword>;
    update(id: number, updateKeywordDto: UpdateKeywordDto): Promise<string | Keyword>;
    remove(id: number): Promise<void>;
}
