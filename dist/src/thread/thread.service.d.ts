import { CreateThreadDto } from './dto/create-thread.dto';
import { UpdateThreadDto } from './dto/update-thread.dto';
import { EntityManager } from 'typeorm';
import { Thread } from './entities/thread.entity';
import { ThreadUsersUserService } from '../thread-users-user/thread-users-user.service';
export declare class ThreadService {
    private manager;
    private readonly threadsUsersService;
    constructor(manager: EntityManager, threadsUsersService: ThreadUsersUserService);
    create(userId: any, createThreadDto: CreateThreadDto): Promise<Thread>;
    findAll(): Promise<Thread[]>;
    findOne(id: number): Promise<Thread>;
    update(id: number, updateThreadDto: UpdateThreadDto): Promise<Thread>;
    remove(id: number): Promise<void>;
}
