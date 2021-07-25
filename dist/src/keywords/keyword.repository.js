"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerFormRepo = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const thread_entity_1 = require("../thread/entities/thread.entity");
let AnswerFormRepo = class AnswerFormRepo extends typeorm_1.Repository {
    async GetKeywordsList(qid) {
        const query = `select 
        d.id,
        d.name
      from thread as a
      join question as b on b.id=a."questionId"
      join thread_keywords_keyword as c on c."threadId"=a.id
      join keyword as d on d.id=c."keywordId"
        where b.id=` + qid;
        return await this.query(query);
    }
    async GetPrevAnswersList(qid) {
        const qry = `select 
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
    async ShowCharts() {
        const qry = `SELECT * FROM questions_per_key()`;
        return await this.query(qry);
    }
};
AnswerFormRepo = __decorate([
    common_1.Injectable(),
    typeorm_1.EntityRepository(thread_entity_1.Thread)
], AnswerFormRepo);
exports.AnswerFormRepo = AnswerFormRepo;
//# sourceMappingURL=keyword.repository.js.map