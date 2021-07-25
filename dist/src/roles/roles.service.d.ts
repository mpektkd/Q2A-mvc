import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { EntityManager } from 'typeorm';
import { Role } from './entities/role.entity';
export declare class RolesService {
    private manager;
    constructor(manager: EntityManager);
    create(createRoleDto: CreateRoleDto): Promise<Role>;
    findAll(): Promise<Role[]>;
    findOne(id: number): Promise<Role>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<Role>;
    remove(id: number): Promise<void>;
}
