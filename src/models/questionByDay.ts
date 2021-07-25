import { User } from '../user/entities/user.entity';
import { Question } from '../question/entities/question.entity';
import { Answer } from '../answer/entities/answer.entity';

export class QuestionByDayModel {
  relatedthreads: number;
  datepost: Date;
}

export class ProfileModel {
  user: User;
  contr: QuestionByDayModel[];
}
