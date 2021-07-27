"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerService = void 0;
const common_1 = require("@nestjs/common");
const question_entity_1 = require("../question/entities/question.entity");
const answer_entity_1 = require("./entities/answer.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const answer_repository_1 = require("./answer.repository");
const thread_entity_1 = require("../thread/entities/thread.entity");
const questions_display_1 = require("../models/questions_display");
const keyword_entity_1 = require("../keywords/entities/keyword.entity");
let AnswerService = class AnswerService {
    constructor(manager, repo) {
        this.manager = manager;
        this.repo = repo;
    }
    async SubmitAnswer(submitAnswer) {
        try {
            await this.repo.SubmitAnswer(submitAnswer);
            return true;
        }
        catch (error) {
            return false;
        }
    }
    async GetQuestionList() {
        const questionList = new questions_display_1.QuestionList();
        questionList.QList = await this.repo.DisplayQuestionList();
        questionList.KList = await this.manager.find(keyword_entity_1.Keyword);
        return questionList;
    }
    async SeeThread(id, fromProfile) {
        console.log('i am the question with ID: ', id);
        let thid = null;
        if (fromProfile) {
            thid = id;
        }
        else {
            const question = await this.manager.findOne(question_entity_1.Question, id, {
                relations: ['thread'],
            });
            console.log(question);
            if (!question)
                throw new common_1.NotFoundException(`Question ${id} not found.`);
            thid = question.thread.id;
        }
        const thread = await this.manager.findOne(thread_entity_1.Thread, thid, {
            relations: ['users', 'createdByUser', 'answers', 'question', 'keywords'],
        });
        console.log(thread);
        if (!thread)
            throw new common_1.NotFoundException(`Thread ${thid} not found.`);
        return thread;
    }
    async findAll() {
        return this.manager.find(answer_entity_1.Answer, { relations: ['thread', 'user'] });
    }
    async findOne(id) {
        const answer = await this.manager.findOne(answer_entity_1.Answer, id);
        if (!answer)
            throw new common_1.NotFoundException(`Answer ${id} not found.`);
        return answer;
    }
    async update(id, updateAnswerDto) {
        return this.manager.transaction(async (manager) => {
            const answer = await this.manager.findOne(answer_entity_1.Answer, id);
            if (!answer)
                throw new common_1.NotFoundException(`Answer ${id} not found.`);
            manager.merge(answer_entity_1.Answer, answer, updateAnswerDto);
            return manager.save(answer);
        });
    }
    async remove(id) {
        return this.manager.transaction(async (manager) => {
            const answer = await this.manager.findOne(answer_entity_1.Answer, id);
            if (!answer)
                throw new common_1.NotFoundException(`Answer ${id} not found.`);
            await manager.delete(answer_entity_1.Answer, id);
        });
    }
};
AnswerService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectEntityManager()),
    __param(1, typeorm_1.InjectRepository(answer_repository_1.AnswerFormRepository)),
    __metadata("design:paramtypes", [typeorm_2.EntityManager,
        answer_repository_1.AnswerFormRepository])
], AnswerService);
exports.AnswerService = AnswerService;
//# sourceMappingURL=answer.service.js.map