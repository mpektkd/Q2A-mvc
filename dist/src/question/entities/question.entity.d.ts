import { Thread } from '../../thread/entities/thread.entity';
export declare class Question {
    id: number;
    body: string;
    title: string;
    dateCreated: Date;
    dateUpdated: Date;
    totalThumbsUp: number;
    totalThumbsDown: number;
    thread: Thread;
}
