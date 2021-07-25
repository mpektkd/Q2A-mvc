import {
  EntityRepository,
  EntityManager,
  Repository,
  getConnection,
  createQueryBuilder,
} from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Key } from '../interfaces/interface.KeysByQuestion';
import { Thread } from '../thread/entities/thread.entity';
import { AnswerByQuestion } from '../interfaces/AnswerByQuestion';
import { QuestionBykey } from '../interfaces/QuestionBykey';

@Injectable()
@EntityRepository(Thread)
export class AnswerFormRepo extends Repository<Thread> {
  public async GetKeywordsList(qid: number): Promise<Key[]> {
    const query =
      `select 
        d.id,
        d.name
      from thread as a
      join question as b on b.id=a."questionId"
      join thread_keywords_keyword as c on c."threadId"=a.id
      join keyword as d on d.id=c."keywordId"
        where b.id=` + qid;

    return await this.query(query);
  }
  public async GetPrevAnswersList(qid: number): Promise<AnswerByQuestion[]> {
    const qry =
      `select 
        a."dateCreated",
        a."dateUpdated",
        a."totalThumbsUp",
        a."totalThumbsDown",
        a."userId",
        a."threadId",
        a.id, 
        a.body
      from answer as a
      join thread as b on b.id=a."threadId"
      join question as c on c.id=b."questionId"
        where c.id=` + qid;
    return await this.query(qry);
  }

  public async ShowCharts(): Promise<QuestionBykey[]> {
    const qry = `SELECT * FROM questions_per_key()`;
    return await this.query(qry);
  }
}
