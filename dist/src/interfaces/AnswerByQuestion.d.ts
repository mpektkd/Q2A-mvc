export interface AnswerByQuestion {
    id: number;
    body: string;
    dateCreated: Date;
    dateUpdated: Date;
    totalThumbsUp: number;
    totalThumbsDown: number;
    userId: number;
    threadId: number;
}
