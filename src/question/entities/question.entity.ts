import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Thread } from '../../thread/entities/thread.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;

  @Column()
  title: string;

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

  @OneToOne(() => Thread, (thread) => thread.question)
  thread: Thread;
}
