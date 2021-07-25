import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
  HttpCode,
  UseGuards,
  Request,
  Res,
  Render,
  UsePipes, UseFilters,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import RequestWithUser from '../auth/requestWithUser.interface';
import { KeyWordsArrayPipe } from '../pipes/pipe-keywords_array';
import { Response } from 'express';
import { QuestionFormDto } from '../models/question-form';
import {HttpExceptionToLogin} from "../exception-filters/http-exception.filter";

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Request() req: RequestWithUser,
    @Body(KeyWordsArrayPipe) QuestionFormDto: QuestionFormDto,
    @Res() res: Response,
  ) {
    console.log(req.body);
    await this.questionService.create(req.user, QuestionFormDto);
    res.redirect(`/`);
  }

  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @UseFilters(HttpExceptionToLogin)
  @Get()
  @Render('new_question')
  form() {
    //i have to insert model with user-info
    return;
  }
  @HttpCode(200)
  @Post('/charts')
  async ShowCharts() {
    const res = await this.questionService.ShowCharts();
    return JSON.stringify(res);
  }
  @Get('/all')
  findAll() {
    return this.questionService.findAll();
  }
  @HttpCode(200)
  @Post('/pagination')
  async PaginateQuestions(@Request() req: RequestWithUser) {
    const res = await this.questionService.PaginateQuestions(
        req.body.kid,
        req.body.pageNumber,
        req.body.pageSize,
        req.body.dateFrom,
        req.body.dateTo,
    );
    return {
      data: res,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionService.update(+id, updateQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionService.remove(+id);
  }
}
