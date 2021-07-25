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
exports.Thread = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../user/entities/user.entity");
const answer_entity_1 = require("../../answer/entities/answer.entity");
const question_entity_1 = require("../../question/entities/question.entity");
const keyword_entity_1 = require("../../keywords/entities/keyword.entity");
let Thread = class Thread {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Thread.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Thread.prototype, "title", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Thread.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Thread.prototype, "dateUpdated", void 0);
__decorate([
    typeorm_1.ManyToMany(() => user_entity_1.User, (user) => user.threads),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Thread.prototype, "users", void 0);
__decorate([
    typeorm_1.OneToMany(() => answer_entity_1.Answer, (answer) => answer.thread),
    __metadata("design:type", Array)
], Thread.prototype, "answers", void 0);
__decorate([
    typeorm_1.OneToOne(() => question_entity_1.Question, (question) => question.thread),
    typeorm_1.JoinColumn(),
    __metadata("design:type", question_entity_1.Question)
], Thread.prototype, "question", void 0);
__decorate([
    typeorm_1.ManyToMany(() => keyword_entity_1.Keyword, (keyword) => keyword.threads),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Thread.prototype, "keywords", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.User, (user) => user.threadsOwned),
    __metadata("design:type", user_entity_1.User)
], Thread.prototype, "createdByUser", void 0);
Thread = __decorate([
    typeorm_1.Entity()
], Thread);
exports.Thread = Thread;
//# sourceMappingURL=thread.entity.js.map