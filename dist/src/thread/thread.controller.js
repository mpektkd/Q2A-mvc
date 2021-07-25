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
exports.ThreadController = void 0;
const common_1 = require("@nestjs/common");
const thread_service_1 = require("./thread.service");
const create_thread_dto_1 = require("./dto/create-thread.dto");
const update_thread_dto_1 = require("./dto/update-thread.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ThreadController = class ThreadController {
    constructor(threadService) {
        this.threadService = threadService;
    }
    async create(headers, createThreadDto) {
        const token = headers.authorization.slice(7);
        return await this.threadService.create(token, createThreadDto);
    }
    findAll() {
        return this.threadService.findAll();
    }
    findOne(id) {
        return this.threadService.findOne(+id);
    }
    update(id, updateThreadDto) {
        return this.threadService.update(+id, updateThreadDto);
    }
    remove(id) {
        return this.threadService.remove(+id);
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post(),
    __param(0, common_1.Headers()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_thread_dto_1.CreateThreadDto]),
    __metadata("design:returntype", Promise)
], ThreadController.prototype, "create", null);
__decorate([
    common_1.Get(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ThreadController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ThreadController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_thread_dto_1.UpdateThreadDto]),
    __metadata("design:returntype", void 0)
], ThreadController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ThreadController.prototype, "remove", null);
ThreadController = __decorate([
    common_1.Controller('thread'),
    __metadata("design:paramtypes", [thread_service_1.ThreadService])
], ThreadController);
exports.ThreadController = ThreadController;
//# sourceMappingURL=thread.controller.js.map