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
exports.Answer = void 0;
const typeorm_1 = require("typeorm");
const thread_entity_1 = require("../../thread/entities/thread.entity");
const user_entity_1 = require("../../user/entities/user.entity");
let Answer = class Answer {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Answer.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Answer.prototype, "body", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Answer.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Answer.prototype, "dateUpdated", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        default: '0',
    }),
    __metadata("design:type", Number)
], Answer.prototype, "totalThumbsUp", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        default: '0',
    }),
    __metadata("design:type", Number)
], Answer.prototype, "totalThumbsDown", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.User, (user) => user.answers),
    __metadata("design:type", user_entity_1.User)
], Answer.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => thread_entity_1.Thread, (thread) => thread.answers),
    __metadata("design:type", thread_entity_1.Thread)
], Answer.prototype, "thread", void 0);
Answer = __decorate([
    typeorm_1.Entity()
], Answer);
exports.Answer = Answer;
//# sourceMappingURL=answer.entity.js.map