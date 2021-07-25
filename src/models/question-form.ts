import { IsNotEmpty, IsString } from 'class-validator';

export class QuestionFormDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  body: string;

  @IsNotEmpty()
  @IsString()
  keywords: string[];
}
