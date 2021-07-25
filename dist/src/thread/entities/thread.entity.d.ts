import { User } from '../../user/entities/user.entity';
import { Answer } from '../../answer/entities/answer.entity';
import { Question } from '../../question/entities/question.entity';
import { Keyword } from '../../keywords/entities/keyword.entity';
export declare class Thread {
    id: number;
    title: string;
    dateCreated: Date;
    dateUpdated: Date;
    users: User[];
    answers: Answer[];
    question: Question;
    keywords: Keyword[];
    createdByUser: User;
}
