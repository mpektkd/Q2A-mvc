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
exports.ThreadService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const thread_entity_1 = require("./entities/thread.entity");
const create_thread_users_user_dto_1 = require("../thread-users-user/dto/create-thread-users-user.dto");
const thread_users_user_service_1 = require("../thread-users-user/thread-users-user.service");
let ThreadService = class ThreadService {
    constructor(manager, threadsUsersService) {
        this.manager = manager;
        this.threadsUsersService = threadsUsersService;
    }
    async create(userId, createThreadDto) {
        console.log(userId);
        const threadDto = Object.assign(Object.assign({}, createThreadDto), { createdByUser: {
                id: parseInt(userId),
            } });
        const thread = await this.manager.create(thread_entity_1.Thread, threadDto);
        const threadPromise = await this.manager.save(thread);
        console.log(threadPromise);
        const threadUsersDto = new create_thread_users_user_dto_1.CreateThreadUsersUserDto(threadPromise.id, userId);
        await this.threadsUsersService.create(threadUsersDto);
        return threadPromise;
    }
    async findAll() {
        return this.manager.find(thread_entity_1.Thread, {
            relations: ['users', 'createdByUser', 'answers', 'question'],
        });
    }
    async findOne(id) {
        const thread = await this.manager.findOne(thread_entity_1.Thread, id, {
            relations: ['users', 'createdByUser', 'answers', 'question'],
        });
        if (!thread)
            throw new common_1.NotFoundException(`Thread ${id} not found.`);
        return thread;
    }
    async update(id, updateThreadDto) {
        return this.manager.transaction(async (manager) => {
            const thread = await this.manager.findOne(thread_entity_1.Thread, id);
            if (!thread)
                throw new common_1.NotFoundException(`Thread ${id} not found.`);
            manager.merge(thread_entity_1.Thread, thread, updateThreadDto);
            return manager.save(thread);
        });
    }
    async remove(id) {
        return this.manager.transaction(async (manager) => {
            const thread = await this.manager.findOne(thread_entity_1.Thread, id);
            if (!thread)
                throw new common_1.NotFoundException(`Thread ${id} not found.`);
            await manager.delete(thread_entity_1.Thread, id);
        });
    }
};
ThreadService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectEntityManager()),
    __metadata("design:paramtypes", [typeorm_2.EntityManager,
        thread_users_user_service_1.ThreadUsersUserService])
], ThreadService);
exports.ThreadService = ThreadService;
//# sourceMappingURL=thread.service.js.map