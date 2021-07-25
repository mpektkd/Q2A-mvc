import { CreateQuestionDto } from "../question/dto/create-question.dto";
import { Keyword } from "../keywords/entities/keyword.entity";
declare const Question_base: import("@nestjs/mapped-types").MappedType<Partial<CreateQuestionDto>>;
declare class Question extends Question_base {
    readonly id: number;
}
export declare class QuestionList {
    QList: Question[];
    KList: Keyword[];
}
export {};
