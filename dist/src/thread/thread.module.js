"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadModule = void 0;
const common_1 = require("@nestjs/common");
const thread_service_1 = require("./thread.service");
const thread_controller_1 = require("./thread.controller");
const typeorm_1 = require("@nestjs/typeorm");
const thread_entity_1 = require("./entities/thread.entity");
const question_entity_1 = require("../question/entities/question.entity");
const answer_entity_1 = require("../answer/entities/answer.entity");
const thread_users_user_module_1 = require("../thread-users-user/thread-users-user.module");
let ThreadModule = class ThreadModule {
};
ThreadModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([thread_entity_1.Thread, question_entity_1.Question, answer_entity_1.Answer]),
            thread_users_user_module_1.ThreadUsersUserModule,
        ],
        controllers: [thread_controller_1.ThreadController],
        providers: [thread_service_1.ThreadService],
        exports: [thread_service_1.ThreadService],
    })
], ThreadModule);
exports.ThreadModule = ThreadModule;
//# sourceMappingURL=thread.module.js.map