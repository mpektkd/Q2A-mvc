"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewQuestionRepo = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const question_entity_1 = require("./entities/question.entity");
let NewQuestionRepo = class NewQuestionRepo extends typeorm_1.Repository {
    async AskQuestion(user, QuestionForm) {
        const query = "CALL ask_question('" +
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
    async ShowCharts() {
        const qry = `select * from questions_per_day()`;
        return await this.query(qry);
    }
    async PaginateQuestions(kid, pageNumber, pageSize, dateFrom, dateTo) {
        const keyFilter = kid ? 'and thkey."keywordId" = ' + kid : '';
        const joinKey = kid ? ' join thread_keywords_keyword as thkey on thkey."threadId"=th.id ' : '';
        let dateFilter = null;
        console.log(dateFrom);
        console.log(dateTo);
        if (dateFrom && dateTo) {
            dateFilter = ` and qu."dateCreated" between '` + dateFrom + `' and '` + dateTo + `'`;
        }
        else if (dateFrom && !dateTo) {
            dateFilter = ` and qu."dateCreated" >= '` + dateFrom + `'`;
        }
        else if (!dateFrom && dateTo) {
            dateFilter = ` and qu."dateCreated" <= '` + dateTo + `'`;
        }
        else {
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
       join thread as th on th."questionId" = qu.id ` +
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
};
NewQuestionRepo = __decorate([
    common_1.Injectable(),
    typeorm_1.EntityRepository(question_entity_1.Question)
], NewQuestionRepo);
exports.NewQuestionRepo = NewQuestionRepo;
//# sourceMappingURL=new_question.repo.js.map