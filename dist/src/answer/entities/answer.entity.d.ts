import { Thread } from '../../thread/entities/thread.entity';
import { User } from '../../user/entities/user.entity';
export declare class Answer {
    id: number;
    body: string;
    dateCreated: Date;
    dateUpdated: Date;
    totalThumbsUp: number;
    totalThumbsDown: number;
    user: User;
    thread: Thread;
}
