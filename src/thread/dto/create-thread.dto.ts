import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Question } from "../../question/entities/question.entity";

export class CreateThreadDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;
}
