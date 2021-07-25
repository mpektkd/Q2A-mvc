import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Thread } from '../../thread/entities/thread.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Keyword {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ 'unique': true })
  name: string;

  @ManyToMany(() => Thread, (thread) => thread.keywords)
  threads: Thread[];
}
