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
exports.AnswerController = void 0;
const common_1 = require("@nestjs/common");
const answer_service_1 = require("./answer.service");
const update_answer_dto_1 = require("./dto/update-answer.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const submitAnswerModel_1 = require("../models/submitAnswerModel");
const http_exception_filter_1 = require("../exception-filters/http-exception.filter");
let AnswerController = class AnswerController {
    constructor(answerService) {
        this.answerService = answerService;
    }
    async GetQuestions(req) {
        const questionList = await this.answerService.GetQuestionList();
        return {
            length: questionList.QList.length,
            KList: questionList.KList,
            logged: true
        };
    }
    async unLoggedGetQuestions(req) {
        const questionList = await this.answerService.GetQuestionList();
        const length = questionList.QList.length <= 10 ? questionList.QList.length : 10;
        return {
            length: length,
            KList: questionList.KList,
            logged: false
        };
    }
    async SeeThread(req) {
        console.log(typeof req.body.fromProfile);
        return {
            res: await this.answerService.SeeThread(req.body.questionId, JSON.parse(req.body.fromProfile)),
            logged: true
        };
    }
    async SeeThreadUnLogged(questionId) {
        console.log(questionId);
        return {
            res: await this.answerService.SeeThread(questionId, false),
            logged: false
        };
    }
    async SubmitAnswer(req, res) {
        const submitAnswer = new submitAnswerModel_1.SubmitAnswerModel(req.body.answer, req.body.qid, req.user['userId']);
        console.log(req.user);
        console.log(submitAnswer);
        const submitted = await this.answerService.SubmitAnswer(submitAnswer);
        if (submitted) {
            return {
                url: `answer`,
                status: common_1.HttpStatus.CREATED,
            };
        }
        else {
            return {
                url: `answer`,
                status: common_1.HttpStatus.BAD_REQUEST,
            };
        }
    }
    findOne(id) {
        return this.answerService.findOne(+id);
    }
    update(id, updateAnswerDto) {
        return this.answerService.update(+id, updateAnswerDto);
    }
    remove(id) {
        return this.answerService.remove(+id);
    }
};
__decorate([
    common_1.Get(),
    common_1.HttpCode(200),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UseFilters(http_exception_filter_1.HttpExceptionFilter),
    common_1.Render(`index`),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "GetQuestions", null);
__decorate([
    common_1.HttpCode(200),
    common_1.Get('/unLogged'),
    common_1.Render(`index`),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "unLoggedGetQuestions", null);
__decorate([
    common_1.HttpCode(200),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UseFilters(http_exception_filter_1.HttpExceptionThread),
    common_1.Post('/answer-form'),
    common_1.Render(`answer_form`),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "SeeThread", null);
__decorate([
    common_1.HttpCode(200),
    common_1.Get('/answer-form/unLogged/:questionId'),
    common_1.Render(`answer_form`),
    __param(0, common_1.Param('questionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "SeeThreadUnLogged", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UseFilters(http_exception_filter_1.HttpExceptionToLogin),
    common_1.Post(),
    common_1.Redirect(),
    __param(0, common_1.Request()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "SubmitAnswer", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AnswerController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_answer_dto_1.UpdateAnswerDto]),
    __metadata("design:returntype", void 0)
], AnswerController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AnswerController.prototype, "remove", null);
AnswerController = __decorate([
    common_1.Controller('answer'),
    __metadata("design:paramtypes", [answer_service_1.AnswerService])
], AnswerController);
exports.AnswerController = AnswerController;
//# sourceMappingURL=answer.controller.js.map