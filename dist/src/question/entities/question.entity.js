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
exports.Question = void 0;
const typeorm_1 = require("typeorm");
const thread_entity_1 = require("../../thread/entities/thread.entity");
let Question = class Question {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Question.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Question.prototype, "body", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Question.prototype, "title", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Question.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Question.prototype, "dateUpdated", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        default: '0',
    }),
    __metadata("design:type", Number)
], Question.prototype, "totalThumbsUp", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        default: '0',
    }),
    __metadata("design:type", Number)
], Question.prototype, "totalThumbsDown", void 0);
__decorate([
    typeorm_1.OneToOne(() => thread_entity_1.Thread, (thread) => thread.question),
    __metadata("design:type", thread_entity_1.Thread)
], Question.prototype, "thread", void 0);
Question = __decorate([
    typeorm_1.Entity()
], Question);
exports.Question = Question;
//# sourceMappingURL=question.entity.js.map