import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  OneToMany,
  JoinColumn,
  OneToOne,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Answer } from '../../answer/entities/answer.entity';
import { Question } from '../../question/entities/question.entity';
import { Keyword } from '../../keywords/entities/keyword.entity';
import { Role } from '../../roles/entities/role.entity';

@Entity()
export class Thread {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @ManyToMany(() => User, (user) => user.threads)
  @JoinTable()
  users: User[];

  @OneToMany(() => Answer, (answer) => answer.thread)
  answers: Answer[];

  @OneToOne(() => Question, (question) => question.thread)
  @JoinColumn()
  question: Question;

  @ManyToMany(() => Keyword, (keyword) => keyword.threads)
  @JoinTable()
  keywords: Keyword[];

  @ManyToOne(() => User, (user) => user.threadsOwned)
  createdByUser: User;
}
