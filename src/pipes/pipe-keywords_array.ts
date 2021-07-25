import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException, Body
} from "@nestjs/common";
import { isEmpty } from '@nestjs/common/utils/shared.utils';
import { QuestionFormDto } from "../models/question-form";

@Injectable()
export class KeyWordsArrayPipe
  implements PipeTransform<QuestionFormDto, QuestionFormDto>
{
  transform(
    value: QuestionFormDto,
    metadata: ArgumentMetadata,
  ): QuestionFormDto {
    const values = value.keywords.toString().split(', ');
    if (isEmpty(values)) {
      throw new BadRequestException('Keywords Array is Empty');
    }
    value.keywords = values;
    return value;
  }
}
