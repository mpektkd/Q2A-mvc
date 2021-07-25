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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionList = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_question_dto_1 = require("../question/dto/create-question.dto");
const class_validator_1 = require("class-validator");
class Question extends mapped_types_1.PartialType(create_question_dto_1.CreateQuestionDto) {
}
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], Question.prototype, "id", void 0);
class QuestionList {
}
exports.QuestionList = QuestionList;
//# sourceMappingURL=questions_display.js.map