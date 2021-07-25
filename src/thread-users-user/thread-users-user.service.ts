import { Injectable } from '@nestjs/common';
import { CreateThreadUsersUserDto } from './dto/create-thread-users-user.dto';
import { UpdateThreadUsersUserDto } from './dto/update-thread-users-user.dto';
import { EntityManager } from "typeorm";
import { InjectEntityManager } from "@nestjs/typeorm";
import { ThreadUsersUser } from "./entities/thread-users-user.entity";

@Injectable()
export class ThreadUsersUserService {
  constructor(@InjectEntityManager() private manager: EntityManager) {}

  async create(createThreadUsersUserDto: CreateThreadUsersUserDto) {
    console.log("iam here");
    const threadUsers = await this.manager.create(
      ThreadUsersUser,
      createThreadUsersUserDto,
    );
    return this.manager.save(threadUsers);
  }

  findAll() {
    return `This action returns all threadUsersUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} threadUsersUser`;
  }

  update(id: number, updateThreadUsersUserDto: UpdateThreadUsersUserDto) {
    return `This action updates a #${id} threadUsersUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} threadUsersUser`;
  }
}
