import { User } from '../user/entities/user.entity';
export declare class QuestionByDayModel {
    relatedthreads: number;
    datepost: Date;
}
export declare class ProfileModel {
    user: User;
    contr: QuestionByDayModel[];
}
