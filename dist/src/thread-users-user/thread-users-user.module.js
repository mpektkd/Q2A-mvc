"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUsersUserModule = void 0;
const common_1 = require("@nestjs/common");
const thread_users_user_service_1 = require("./thread-users-user.service");
const thread_users_user_controller_1 = require("./thread-users-user.controller");
let ThreadUsersUserModule = class ThreadUsersUserModule {
};
ThreadUsersUserModule = __decorate([
    common_1.Module({
        controllers: [thread_users_user_controller_1.ThreadUsersUserController],
        providers: [thread_users_user_service_1.ThreadUsersUserService],
        exports: [thread_users_user_service_1.ThreadUsersUserService],
    })
], ThreadUsersUserModule);
exports.ThreadUsersUserModule = ThreadUsersUserModule;
//# sourceMappingURL=thread-users-user.module.js.map