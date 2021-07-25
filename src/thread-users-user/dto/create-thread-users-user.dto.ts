import { IsInt } from "class-validator";

export class CreateThreadUsersUserDto {
  constructor(threadId, userId) {
    this.threadId = threadId;
    this.userId = userId;
  }
  @IsInt()
  readonly threadId: number;
  @IsInt()
  readonly userId: number;
}
