import { EntityRepository, EntityManager, Repository } from 'typeorm';
import { QuestionFormDto } from '../models/question-form';
import { Injectable } from '@nestjs/common';
import { Question } from './entities/question.entity';
import { QuestionBykey } from '../interfaces/QuestionBykey';
import { QuestionByDayModel } from '../models/questionByDay';

@Injectable()
@EntityRepository(Question)
export class NewQuestionRepo extends Repository<Question> {
  public async AskQuestion(user, QuestionForm: QuestionFormDto) {
    const query =
      "CALL ask_question('" +
      QuestionForm.title +
      "', '" +
      QuestionForm.body +
      "', array[" +
      QuestionForm.keywords.map((x) => "'" + x + "'") +
      '], ' +
      user.userId +
      ')';

    await this.query(query);
  }
  public async ShowCharts(): Promise<QuestionByDayModel[]> {
    const qry = `select * from questions_per_day()`;
    return await this.query(qry);
  }
  public async PaginateQuestions(
      kid: number,
    pageNumber: number,
    pageSize: number,
      dateFrom: string,
      dateTo: string,

  ): Promise<Question[]> {
    // const qry =
    //   `SELECT public.paginate_questions(` + pageNumber + `,` + pageSize + `)`;

    const keyFilter = kid ? 'and thkey."keywordId" = ' + kid : '';
    const joinKey = kid ? ' join thread_keywords_keyword as thkey on thkey."threadId"=th.id ' : '';

    let dateFilter = null;
    console.log(dateFrom);
    console.log(dateTo);
    if (dateFrom && dateTo){

      dateFilter = ` and qu."dateCreated" between '` + dateFrom + `' and '` + dateTo + `'`;

    }else if(dateFrom && !dateTo){
      dateFilter = ` and qu."dateCreated" >= '` + dateFrom + `'` ;
    }
    else if (!dateFrom && dateTo){
      dateFilter = ` and qu."dateCreated" <= '` + dateTo + `'` ;
    }
    else{
      dateFilter = '';
    }
    console.log(dateFilter);
    const start = (pageNumber - 1) * pageSize;
    const qry = `
        select 
          qu.id as id,
          qu.body as body,
          qu.title as title,
          qu."dateCreated" as dateCreated,
          qu."dateUpdated" as dateUpdated,
          qu."totalThumbsUp" as totalThumbsUp,
          qu."totalThumbsDown" as totalThumbsDown,
          case 
          when count(an.id) is null then 0
          else count(an.id)
          end as answers


       from question as qu 
       join thread as th on th."questionId" = qu.id `+
        joinKey +
       ` left join answer as an on an."threadId" = th.id
       where qu.id in 
       (
    select q.id from question as q offset ` +
      start +
      ` limit ` +
      pageSize +
      `
    ) ` + keyFilter + dateFilter + ` group by qu.id
    order by qu."dateCreated";`;
    return await this.query(qry);
  }
}
