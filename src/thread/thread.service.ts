import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateThreadDto } from './dto/create-thread.dto';
import { UpdateThreadDto } from './dto/update-thread.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Thread } from './entities/thread.entity';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { CreateThreadUsersUserDto } from '../thread-users-user/dto/create-thread-users-user.dto';
import { ThreadUsersUserService } from '../thread-users-user/thread-users-user.service';

@Injectable()
export class ThreadService {
  constructor(
    @InjectEntityManager() private manager: EntityManager,
    private readonly threadsUsersService: ThreadUsersUserService,
  ) {}

  async create(userId, createThreadDto: CreateThreadDto): Promise<Thread> {
    console.log(userId);
    const threadDto = {
      ...createThreadDto,
      createdByUser: {
        id: parseInt(userId),
      },
    };
    const thread = await this.manager.create(Thread, threadDto);
    const threadPromise = await this.manager.save(thread);
    console.log(threadPromise);
    const threadUsersDto = new CreateThreadUsersUserDto(
      threadPromise.id,
      userId,
    );
    await this.threadsUsersService.create(threadUsersDto);
    return threadPromise;
  }

  async findAll(): Promise<Thread[]> {
    return this.manager.find(Thread, {
      relations: ['users', 'createdByUser', 'answers', 'question'],
    });
  }

  async findOne(id: number): Promise<Thread> {
    const thread = await this.manager.findOne(Thread, id, {
      relations: ['users', 'createdByUser', 'answers', 'question'],
    });
    if (!thread) throw new NotFoundException(`Thread ${id} not found.`);
    return thread;
  }

  async update(id: number, updateThreadDto: UpdateThreadDto): Promise<Thread> {
    return this.manager.transaction(async (manager) => {
      const thread = await this.manager.findOne(Thread, id);
      if (!thread) throw new NotFoundException(`Thread ${id} not found.`);
      manager.merge(Thread, thread, updateThreadDto);
      return manager.save(thread);
    });
  }

  async remove(id: number): Promise<void> {
    return this.manager.transaction(async (manager) => {
      const thread = await this.manager.findOne(Thread, id);
      if (!thread) throw new NotFoundException(`Thread ${id} not found.`);
      await manager.delete(Thread, id);
    });
  }
}
