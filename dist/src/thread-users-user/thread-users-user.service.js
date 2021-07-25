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
exports.ThreadUsersUserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const thread_users_user_entity_1 = require("./entities/thread-users-user.entity");
let ThreadUsersUserService = class ThreadUsersUserService {
    constructor(manager) {
        this.manager = manager;
    }
    async create(createThreadUsersUserDto) {
        console.log("iam here");
        const threadUsers = await this.manager.create(thread_users_user_entity_1.ThreadUsersUser, createThreadUsersUserDto);
        return this.manager.save(threadUsers);
    }
    findAll() {
        return `This action returns all threadUsersUser`;
    }
    findOne(id) {
        return `This action returns a #${id} threadUsersUser`;
    }
    update(id, updateThreadUsersUserDto) {
        return `This action updates a #${id} threadUsersUser`;
    }
    remove(id) {
        return `This action removes a #${id} threadUsersUser`;
    }
};
ThreadUsersUserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectEntityManager()),
    __metadata("design:paramtypes", [typeorm_1.EntityManager])
], ThreadUsersUserService);
exports.ThreadUsersUserService = ThreadUsersUserService;
//# sourceMappingURL=thread-users-user.service.js.map