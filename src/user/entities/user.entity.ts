import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  OneToMany,
  ManyToOne,
  OneToOne, JoinColumn, BeforeInsert, BeforeUpdate
} from "typeorm";
import { Thread } from '../../thread/entities/thread.entity';
import { Role } from '../../roles/entities/role.entity';
import { Answer } from '../../answer/entities/answer.entity';
import { hash, hashSync } from "bcrypt";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @Column()
  totalKarma: number;

  @ManyToMany(() => Thread, (thread) => thread.users)
  threads: Thread[];

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @OneToMany(() => Thread, (thread) => thread.createdByUser)
  threadsOwned: Thread[];

  @OneToMany(() => Answer, (answer) => answer.user)
  answers: Answer[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = hashSync(this.password, 10);
  }

  @BeforeInsert()
  async default_values() {
    this.totalKarma = 0;
  }

}
