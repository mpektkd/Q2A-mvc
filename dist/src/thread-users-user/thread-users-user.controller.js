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
exports.ThreadUsersUserController = void 0;
const common_1 = require("@nestjs/common");
const thread_users_user_service_1 = require("./thread-users-user.service");
const create_thread_users_user_dto_1 = require("./dto/create-thread-users-user.dto");
const update_thread_users_user_dto_1 = require("./dto/update-thread-users-user.dto");
let ThreadUsersUserController = class ThreadUsersUserController {
    constructor(threadUsersUserService) {
        this.threadUsersUserService = threadUsersUserService;
    }
    create(createThreadUsersUserDto) {
        return this.threadUsersUserService.create(createThreadUsersUserDto);
    }
    findAll() {
        return this.threadUsersUserService.findAll();
    }
    findOne(id) {
        return this.threadUsersUserService.findOne(+id);
    }
    update(id, updateThreadUsersUserDto) {
        return this.threadUsersUserService.update(+id, updateThreadUsersUserDto);
    }
    remove(id) {
        return this.threadUsersUserService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_thread_users_user_dto_1.CreateThreadUsersUserDto]),
    __metadata("design:returntype", void 0)
], ThreadUsersUserController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ThreadUsersUserController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ThreadUsersUserController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_thread_users_user_dto_1.UpdateThreadUsersUserDto]),
    __metadata("design:returntype", void 0)
], ThreadUsersUserController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ThreadUsersUserController.prototype, "remove", null);
ThreadUsersUserController = __decorate([
    common_1.Controller('thread-users-user'),
    __metadata("design:paramtypes", [thread_users_user_service_1.ThreadUsersUserService])
], ThreadUsersUserController);
exports.ThreadUsersUserController = ThreadUsersUserController;
//# sourceMappingURL=thread-users-user.controller.js.map