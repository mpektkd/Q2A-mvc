import { QuestionBykey } from '../interfaces/QuestionBykey';

export class QuestionsByKeyModel implements QuestionBykey {
  RelatedThreads: number;
  id: number;
  name: string;
}
