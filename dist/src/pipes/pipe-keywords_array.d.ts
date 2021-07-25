import { PipeTransform, ArgumentMetadata } from "@nestjs/common";
import { QuestionFormDto } from "../models/question-form";
export declare class KeyWordsArrayPipe implements PipeTransform<QuestionFormDto, QuestionFormDto> {
    transform(value: QuestionFormDto, metadata: ArgumentMetadata): QuestionFormDto;
}
