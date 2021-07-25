import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateAnswerDto {
  @IsNotEmpty()
  @IsString()
  readonly body: string;
  @IsInt()
  readonly threadId: number;
}
