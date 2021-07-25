import { EntityRepository, EntityManager, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { QuestionByDayModel } from '../models/questionByDay';
import { User } from './entities/user.entity';

@Injectable()
@EntityRepository(User)
export class UserRepo extends Repository<User> {
  public async ShowContr(id: number): Promise<QuestionByDayModel[]> {
    const qry = `select * from contr_per_day(` + id + `)`;
    return await this.query(qry);
  }
}
