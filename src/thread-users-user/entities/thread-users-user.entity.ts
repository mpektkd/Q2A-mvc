import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class ThreadUsersUser {
  @PrimaryColumn()
  threadId: number;

  @PrimaryColumn()
  userId: number;
}
