import { Thread } from '../../thread/entities/thread.entity';
import { Role } from '../../roles/entities/role.entity';
import { Answer } from '../../answer/entities/answer.entity';
export declare class User {
    id: number;
    username: string;
    password: string;
    email: string;
    dateCreated: Date;
    dateUpdated: Date;
    totalKarma: number;
    threads: Thread[];
    role: Role;
    threadsOwned: Thread[];
    answers: Answer[];
    hashPassword(): Promise<void>;
    default_values(): Promise<void>;
}
