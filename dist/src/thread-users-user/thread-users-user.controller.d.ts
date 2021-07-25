import { ThreadUsersUserService } from './thread-users-user.service';
import { CreateThreadUsersUserDto } from './dto/create-thread-users-user.dto';
import { UpdateThreadUsersUserDto } from './dto/update-thread-users-user.dto';
export declare class ThreadUsersUserController {
    private readonly threadUsersUserService;
    constructor(threadUsersUserService: ThreadUsersUserService);
    create(createThreadUsersUserDto: CreateThreadUsersUserDto): Promise<import("./entities/thread-users-user.entity").ThreadUsersUser>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateThreadUsersUserDto: UpdateThreadUsersUserDto): string;
    remove(id: string): string;
}
