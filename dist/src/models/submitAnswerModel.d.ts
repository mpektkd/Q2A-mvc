import { SubmitAnswer } from '../interfaces/submitAnswer';
export declare class SubmitAnswerModel implements SubmitAnswer {
    constructor(body: string, qid: number, userId: number);
    body: string;
    qid: number;
    userId: number;
}
