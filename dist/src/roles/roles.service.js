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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("./entities/role.entity");
let RolesService = class RolesService {
    constructor(manager) {
        this.manager = manager;
    }
    async create(createRoleDto) {
        const role = await this.manager.create(role_entity_1.Role, createRoleDto);
        return this.manager.save(role);
    }
    async findAll() {
        return this.manager.find(role_entity_1.Role);
    }
    async findOne(id) {
        const role = await this.manager.findOne(role_entity_1.Role, id);
        if (!role)
            throw new common_1.NotFoundException(`Role ${id} not found.`);
        return role;
    }
    update(id, updateRoleDto) {
        return this.manager.transaction(async (manager) => {
            const role = await this.manager.findOne(role_entity_1.Role, id);
            if (!role)
                throw new common_1.NotFoundException(`Role ${id} not found.`);
            manager.merge(role_entity_1.Role, role, updateRoleDto);
            return manager.save(role);
        });
    }
    async remove(id) {
        return this.manager.transaction(async (manager) => {
            const role = await this.manager.findOne(role_entity_1.Role, id);
            if (!role)
                throw new common_1.NotFoundException(`Role ${id} not found.`);
            await manager.delete(role_entity_1.Role, id);
        });
    }
};
RolesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectEntityManager()),
    __metadata("design:paramtypes", [typeorm_2.EntityManager])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map