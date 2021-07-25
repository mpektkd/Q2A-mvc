import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { EntityManager } from 'typeorm';
import { UserRepo } from './user.repository';
import {QuestionByDayModel} from "../models/questionByDay";

@Injectable()
export class UserService {
  constructor(
    @InjectEntityManager() private manager: EntityManager,
    @InjectRepository(UserRepo) private readonly repo: UserRepo,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.manager.create(User, createUserDto);
    console.log(user);
    return this.manager.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.manager.find(User, {
      relations: ['role', 'threads', 'threadsOwned'],
    });
  }

  async ShowContr(id: number): Promise<QuestionByDayModel[]> {
    return this.repo.ShowContr(id);
  }

  async findOne(id: number): Promise<User> {
    const user = await this.manager.findOne(User, id, {
      relations: ['role', 'threads', 'threadsOwned', 'answers'],
    });
    if (!user) throw new NotFoundException(`User ${id} not found.`);
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.manager.findOne(User, { email: email });
    if (!user) throw new NotFoundException(`User with ${email} not found.`);
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.manager.transaction(async (manager) => {
      const user = await this.manager.findOne(User, id);
      if (!user) throw new NotFoundException(`User ${id} not found.`);
      manager.merge(User, user, updateUserDto);
      return manager.save(user);
    });
  }

  async remove(id: number): Promise<void> {
    return this.manager.transaction(async (manager) => {
      const user = await this.manager.findOne(User, id);
      if (!user) throw new NotFoundException(`User ${id} not found.`);
      await manager.delete(User, id);
    });
  }
}
