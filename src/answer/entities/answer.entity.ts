import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Thread } from '../../thread/entities/thread.entity';
import { User } from '../../user/entities/user.entity';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @Column({
    type: 'int',
    default: '0',
  })
  totalThumbsUp: number;

  @Column({
    type: 'int',
    default: '0',
  })
  totalThumbsDown: number;

  @ManyToOne(() => User, (user) => user.answers)
  user: User;

  @ManyToOne(() => Thread, (thread) => thread.answers)
  thread: Thread;
}
