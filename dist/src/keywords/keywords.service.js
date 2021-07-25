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
exports.KeywordsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const keyword_entity_1 = require("./entities/keyword.entity");
const postgresErrorCodes_enum_1 = require("../database/postgresErrorCodes.enum");
const keyword_repository_1 = require("./keyword.repository");
const key_answers_ByQuestion_1 = require("../models/key.answers.ByQuestion");
let KeywordsService = class KeywordsService {
    constructor(manager, repo) {
        this.manager = manager;
        this.repo = repo;
    }
    async create(createKeywordDto) {
        try {
            const keyword = await this.manager.create(keyword_entity_1.Keyword, createKeywordDto);
            return this.manager.save(keyword);
        }
        catch (error) {
            if ((error === null || error === void 0 ? void 0 : error.code) === postgresErrorCodes_enum_1.PostgresErrorCode.UniqueViolation) {
                throw new common_1.HttpException('KeyWord with that name already exists', common_1.HttpStatus.BAD_REQUEST);
            }
        }
    }
    async findAll() {
        return this.manager.find(keyword_entity_1.Keyword);
    }
    async ShowCharts() {
        return await this.repo.ShowCharts();
    }
    async KeysAnswersByQuestion(qid) {
        const res = new key_answers_ByQuestion_1.KeysAnswersResponse();
        res.KList = await this.repo.GetKeywordsList(qid);
        res.AList = await this.repo.GetPrevAnswersList(qid);
        return res;
    }
    async findOne(id) {
        const keyword = await this.manager.findOne(keyword_entity_1.Keyword, id);
        if (!keyword)
            throw new common_1.NotFoundException(`Keyword ${id} not found.`);
        return keyword;
    }
    async update(id, updateKeywordDto) {
        return this.manager.transaction(async (manager) => {
            const keyword = await this.manager.findOne(keyword_entity_1.Keyword, id);
            if (!keyword)
                throw new common_1.NotFoundException(`Keyword ${id} not found.`);
            manager.merge(keyword_entity_1.Keyword, keyword, updateKeywordDto);
            return manager.save(keyword);
        });
        return `This action updates a #${id} keyword`;
    }
    async remove(id) {
        return this.manager.transaction(async (manager) => {
            const keyword = await this.manager.findOne(keyword_entity_1.Keyword, id);
            if (!keyword)
                throw new common_1.NotFoundException(`Keyword ${id} not found.`);
            await manager.delete(keyword_entity_1.Keyword, id);
        });
    }
};
KeywordsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectEntityManager()),
    __param(1, typeorm_1.InjectRepository(keyword_repository_1.AnswerFormRepo)),
    __metadata("design:paramtypes", [typeorm_2.EntityManager,
        keyword_repository_1.AnswerFormRepo])
], KeywordsService);
exports.KeywordsService = KeywordsService;
//# sourceMappingURL=keywords.service.js.map