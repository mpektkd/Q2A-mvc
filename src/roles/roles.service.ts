import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { EntityManager } from 'typeorm';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(@InjectEntityManager() private manager: EntityManager) {}
  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const role = await this.manager.create(Role, createRoleDto);
    return this.manager.save(role);
  }

  async findAll(): Promise<Role[]> {
    return this.manager.find(Role);
  }

  async findOne(id: number): Promise<Role> {
    const role = await this.manager.findOne(Role, id);
    if (!role) throw new NotFoundException(`Role ${id} not found.`);
    return role;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.manager.transaction(async (manager) => {
      const role = await this.manager.findOne(Role, id);
      if (!role) throw new NotFoundException(`Role ${id} not found.`);
      manager.merge(Role, role, updateRoleDto);
      return manager.save(role);
    });
  }

  async remove(id: number) {
    return this.manager.transaction(async (manager) => {
      const role = await this.manager.findOne(Role, id);
      if (!role) throw new NotFoundException(`Role ${id} not found.`);
      await manager.delete(Role, id);
    });
  }
}
