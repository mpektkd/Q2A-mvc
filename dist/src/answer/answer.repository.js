"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerFormRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const question_entity_1 = require("../question/entities/question.entity");
const answer_entity_1 = require("./entities/answer.entity");
let AnswerFormRepository = class AnswerFormRepository extends typeorm_1.Repository {
    async DisplayQuestionList() {
        return await typeorm_1.getConnection()
            .createQueryBuilder()
            .select('question')
            .from(question_entity_1.Question, 'question')
            .getMany();
    }
    async SubmitAnswer(submitAnswer) {
        console.log(submitAnswer.body);
        const body = submitAnswer.body.replace(/[']+/g, '`');
        const qry = "call submit_answer('" +
            body +
            "', " +
            submitAnswer.qid +
            ", " +
            submitAnswer.userId +
            ")";
        await this.query(qry);
    }
};
AnswerFormRepository = __decorate([
    common_1.Injectable(),
    typeorm_1.EntityRepository(question_entity_1.Question),
    typeorm_1.EntityRepository(answer_entity_1.Answer)
], AnswerFormRepository);
exports.AnswerFormRepository = AnswerFormRepository;
//# sourceMappingURL=answer.repository.js.map