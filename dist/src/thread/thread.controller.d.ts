import { ThreadService } from './thread.service';
import { CreateThreadDto } from './dto/create-thread.dto';
import { UpdateThreadDto } from './dto/update-thread.dto';
export declare class ThreadController {
    private readonly threadService;
    constructor(threadService: ThreadService);
    create(headers: any, createThreadDto: CreateThreadDto): Promise<import("./entities/thread.entity").Thread>;
    findAll(): Promise<import("./entities/thread.entity").Thread[]>;
    findOne(id: string): Promise<import("./entities/thread.entity").Thread>;
    update(id: string, updateThreadDto: UpdateThreadDto): Promise<import("./entities/thread.entity").Thread>;
    remove(id: string): Promise<void>;
}
