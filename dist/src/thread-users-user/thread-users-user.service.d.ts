import { CreateThreadUsersUserDto } from './dto/create-thread-users-user.dto';
import { UpdateThreadUsersUserDto } from './dto/update-thread-users-user.dto';
import { EntityManager } from "typeorm";
import { ThreadUsersUser } from "./entities/thread-users-user.entity";
export declare class ThreadUsersUserService {
    private manager;
    constructor(manager: EntityManager);
    create(createThreadUsersUserDto: CreateThreadUsersUserDto): Promise<ThreadUsersUser>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateThreadUsersUserDto: UpdateThreadUsersUserDto): string;
    remove(id: number): string;
}
