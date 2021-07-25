import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Question } from './entities/question.entity';
import { ThreadService } from '../thread/thread.service';
import { QuestionFormDto } from '../models/question-form';
import { NewQuestionRepo } from './new_question.repo';
import { QuestionByDayModel } from '../models/questionByDay';

@Injectable()
export class QuestionService {
  constructor(
    @InjectEntityManager() private manager: EntityManager,
    @InjectRepository(NewQuestionRepo) private readonly repo: NewQuestionRepo,
  ) {}

  async create(user, QuestionForm: QuestionFormDto): Promise<void> {
    console.log(user);
    await this.repo.AskQuestion(user, QuestionForm);
  }
  async ShowCharts(): Promise<QuestionByDayModel[]> {
    return await this.repo.ShowCharts();
  }
  async PaginateQuestions(
      kid: number,
    pageNumber: number,
    pageSize: number,
      dateFrom: string,
      dateTo: string,

  ): Promise<Question[]> {
    return await this.repo.PaginateQuestions(kid, pageNumber, pageSize, dateFrom, dateTo);
  }

  async findAll(): Promise<Array<Question>> {
    return this.manager.find(Question, { relations: ['thread'] });
  }

  async findOne(id: number): Promise<Question> {
    const question = await this.manager.findOne(Question, id, {
      relations: ['thread', 'user'],
    });
    if (!question) throw new NotFoundException(`Question ${id} not found.`);
    return question;
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return this.manager.transaction(async (manager) => {
      const question = await this.manager.findOne(Question, id);
      if (!question) throw new NotFoundException(`Question ${id} not found.`);
      manager.merge(Question, question, updateQuestionDto);
      return manager.save(question);
    });
  }

  async remove(id: number) {
    return this.manager.transaction(async (manager) => {
      const question = await this.manager.findOne(Question, id);
      if (!question) throw new NotFoundException(`Question ${id} not found.`);
      await manager.delete(Question, id);
    });
  }
}
