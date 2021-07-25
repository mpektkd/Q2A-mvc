import { PartialType } from "@nestjs/mapped-types";
import { CreateQuestionDto } from "../question/dto/create-question.dto";
import { IsInt, IsNotEmpty, IsString } from "class-validator";
import { Key } from '../interfaces/interface.KeysByQuestion';
import {Keyword} from "../keywords/entities/keyword.entity";

class Question extends PartialType(CreateQuestionDto) {
  @IsInt()
  readonly id: number;
}
export class QuestionList {
  QList: Question[];
  KList: Keyword[];
}
