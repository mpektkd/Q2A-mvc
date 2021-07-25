import { Repository } from 'typeorm';
import { Key } from '../interfaces/interface.KeysByQuestion';
import { Thread } from '../thread/entities/thread.entity';
import { AnswerByQuestion } from '../interfaces/AnswerByQuestion';
import { QuestionBykey } from '../interfaces/QuestionBykey';
export declare class AnswerFormRepo extends Repository<Thread> {
    GetKeywordsList(qid: number): Promise<Key[]>;
    GetPrevAnswersList(qid: number): Promise<AnswerByQuestion[]>;
    ShowCharts(): Promise<QuestionBykey[]>;
}
