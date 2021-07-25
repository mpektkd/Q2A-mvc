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
exports.QuestionController = void 0;
const common_1 = require("@nestjs/common");
const question_service_1 = require("./question.service");
const update_question_dto_1 = require("./dto/update-question.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const pipe_keywords_array_1 = require("../pipes/pipe-keywords_array");
const question_form_1 = require("../models/question-form");
const http_exception_filter_1 = require("../exception-filters/http-exception.filter");
let QuestionController = class QuestionController {
    constructor(questionService) {
        this.questionService = questionService;
    }
    async create(req, QuestionFormDto, res) {
        console.log(req.body);
        await this.questionService.create(req.user, QuestionFormDto);
        res.redirect(`/`);
    }
    form() {
        return;
    }
    async ShowCharts() {
        const res = await this.questionService.ShowCharts();
        return JSON.stringify(res);
    }
    findAll() {
        return this.questionService.findAll();
    }
    async PaginateQuestions(req) {
        const res = await this.questionService.PaginateQuestions(req.body.kid, req.body.pageNumber, req.body.pageSize, req.body.dateFrom, req.body.dateTo);
        return {
            data: res,
        };
    }
    findOne(id) {
        return this.questionService.findOne(+id);
    }
    update(id, updateQuestionDto) {
        return this.questionService.update(+id, updateQuestionDto);
    }
    remove(id) {
        return this.questionService.remove(+id);
    }
};
__decorate([
    common_1.HttpCode(200),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post(),
    __param(0, common_1.Request()),
    __param(1, common_1.Body(pipe_keywords_array_1.KeyWordsArrayPipe)),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, question_form_1.QuestionFormDto, Object]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "create", null);
__decorate([
    common_1.HttpCode(200),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UseFilters(http_exception_filter_1.HttpExceptionToLogin),
    common_1.Get(),
    common_1.Render('new_question'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "form", null);
__decorate([
    common_1.HttpCode(200),
    common_1.Post('/charts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "ShowCharts", null);
__decorate([
    common_1.Get('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "findAll", null);
__decorate([
    common_1.HttpCode(200),
    common_1.Post('/pagination'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "PaginateQuestions", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_question_dto_1.UpdateQuestionDto]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "remove", null);
QuestionController = __decorate([
    common_1.Controller('question'),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], QuestionController);
exports.QuestionController = QuestionController;
//# sourceMappingURL=question.controller.js.map