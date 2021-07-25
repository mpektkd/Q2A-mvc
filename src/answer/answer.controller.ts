import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Headers,
  HttpCode,
  Request,
  Res,
  Render,
  HttpStatus,
  Redirect, UseFilters,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import RequestWithUser from '../auth/requestWithUser.interface';
import { KeyWordsArrayPipe } from '../pipes/pipe-keywords_array';
import { Response } from 'express';
import { QuestionList } from '../models/questions_display';
import { SubmitAnswerModel } from '../models/submitAnswerModel';
import {ExtractJwt} from "passport-jwt";
import {
  HttpExceptionFilter,
  HttpExceptionThread,
  HttpExceptionToLogin
} from "../exception-filters/http-exception.filter";

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @UseFilters(HttpExceptionFilter)
  @Render(`index`)
  async GetQuestions(@Request() req : RequestWithUser) {
    const questionList = await this.answerService.GetQuestionList();

    return {
      length: questionList.QList.length,
      KList: questionList.KList,
      logged: true
    };
  }

  @HttpCode(200)
  @Get('/unLogged')
  @Render(`index`)
  async unLoggedGetQuestions(@Request() req : RequestWithUser) {
    const questionList = await this.answerService.GetQuestionList();
    const length = questionList.QList.length <= 10 ? questionList.QList.length : 10;
    return {
      length: length,
      KList: questionList.KList,
      logged: false
    };
  }

  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @UseFilters(HttpExceptionThread)
  @Post('/answer-form')
  @Render(`answer_form`)
  async SeeThread(@Request() req: RequestWithUser) {
    console.log(typeof req.body.fromProfile);
    return {
      res: await this.answerService.SeeThread(req.body.questionId, JSON.parse(req.body.fromProfile)),
      logged: true
    };
  }

  @HttpCode(200)
  @Get('/answer-form/unLogged/:questionId')
  @Render(`answer_form`)
  async SeeThreadUnLogged(@Param('questionId') questionId: number) {
    console.log(questionId);
    return {
      res: await this.answerService.SeeThread(questionId, false),
      logged: false
    };
  }

  @UseGuards(JwtAuthGuard)
  @UseFilters(HttpExceptionToLogin)
  @Post()
  @Redirect()
  async SubmitAnswer(@Request() req: RequestWithUser, @Res() res: Response) {
    const submitAnswer = new SubmitAnswerModel(
      req.body.answer,
      req.body.qid,
      req.user['userId'],
    );
    console.log(req.user);
    console.log(submitAnswer);
    const submitted = await this.answerService.SubmitAnswer(submitAnswer);
    if (submitted) {
      // res.redirect(HttpStatus.CREATED, `user/` + req.user['userId']);
      return {
        url: `answer`,
        status: HttpStatus.CREATED,
      };
    } else {
      return {
        url: `answer`,
        status: HttpStatus.BAD_REQUEST,
      };
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.answerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnswerDto: UpdateAnswerDto) {
    return this.answerService.update(+id, updateAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.answerService.remove(+id);
  }
}
