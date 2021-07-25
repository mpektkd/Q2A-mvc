import { Repository } from 'typeorm';
import { QuestionByDayModel } from '../models/questionByDay';
import { User } from './entities/user.entity';
export declare class UserRepo extends Repository<User> {
    ShowContr(id: number): Promise<QuestionByDayModel[]>;
}
