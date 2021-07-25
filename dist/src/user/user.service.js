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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const user_repository_1 = require("./user.repository");
let UserService = class UserService {
    constructor(manager, repo) {
        this.manager = manager;
        this.repo = repo;
    }
    async create(createUserDto) {
        const user = await this.manager.create(user_entity_1.User, createUserDto);
        console.log(user);
        return this.manager.save(user);
    }
    async findAll() {
        return this.manager.find(user_entity_1.User, {
            relations: ['role', 'threads', 'threadsOwned'],
        });
    }
    async ShowContr(id) {
        return this.repo.ShowContr(id);
    }
    async findOne(id) {
        const user = await this.manager.findOne(user_entity_1.User, id, {
            relations: ['role', 'threads', 'threadsOwned', 'answers'],
        });
        if (!user)
            throw new common_1.NotFoundException(`User ${id} not found.`);
        return user;
    }
    async findByEmail(email) {
        const user = await this.manager.findOne(user_entity_1.User, { email: email });
        if (!user)
            throw new common_1.NotFoundException(`User with ${email} not found.`);
        return user;
    }
    async update(id, updateUserDto) {
        return this.manager.transaction(async (manager) => {
            const user = await this.manager.findOne(user_entity_1.User, id);
            if (!user)
                throw new common_1.NotFoundException(`User ${id} not found.`);
            manager.merge(user_entity_1.User, user, updateUserDto);
            return manager.save(user);
        });
    }
    async remove(id) {
        return this.manager.transaction(async (manager) => {
            const user = await this.manager.findOne(user_entity_1.User, id);
            if (!user)
                throw new common_1.NotFoundException(`User ${id} not found.`);
            await manager.delete(user_entity_1.User, id);
        });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectEntityManager()),
    __param(1, typeorm_1.InjectRepository(user_repository_1.UserRepo)),
    __metadata("design:paramtypes", [typeorm_2.EntityManager,
        user_repository_1.UserRepo])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map