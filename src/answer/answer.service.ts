import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { Question } from '../question/entities/question.entity';
import { Answer } from './entities/answer.entity';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { AnswerFormRepository } from './answer.repository';
import { SubmitAnswer } from '../interfaces/submitAnswer';
import { Thread } from '../thread/entities/thread.entity';
import {QuestionList} from "../models/questions_display";
import {Keyword} from "../keywords/entities/keyword.entity";

@Injectable()
export class AnswerService {
  constructor(
    @InjectEntityManager() private manager: EntityManager,
    @InjectRepository(AnswerFormRepository)
    private readonly repo: AnswerFormRepository,
  ) {}

  async SubmitAnswer(submitAnswer: SubmitAnswer) {
    try {
      await this.repo.SubmitAnswer(submitAnswer);
      return true;
    } catch (error) {
      return false;
    }
  }
  async GetQuestionList(): Promise<QuestionList> {

    const questionList = new QuestionList();
    questionList.QList = await this.repo.DisplayQuestionList();
    questionList.KList = await this.manager.find(Keyword);

    return questionList;
  }

  async SeeThread(id: number, fromProfile: boolean): Promise<Thread> {
    console.log('i am the question with ID: ', id);

    let thid = null;

    if(fromProfile){
      thid = id;
    }else{
      const question = await this.manager.findOne(Question, id, {
        relations: ['thread'],
      });

      console.log(question);
      if (!question) throw new NotFoundException(`Question ${id} not found.`);

      thid = question.thread.id;
    }

    const thread = await this.manager.findOne(Thread, thid, {
      relations: ['users', 'createdByUser', 'answers', 'question', 'keywords'],
    });

    console.log(thread);

    if (!thread)
      throw new NotFoundException(`Thread ${thid} not found.`);

    return thread;
  }

  async findAll(): Promise<Answer[]> {
    return this.manager.find(Answer, { relations: ['thread', 'user'] });
  }

  async findOne(id: number): Promise<Answer> {
    const answer = await this.manager.findOne(Answer, id);
    if (!answer) throw new NotFoundException(`Answer ${id} not found.`);
    return answer;
  }

  async update(id: number, updateAnswerDto: UpdateAnswerDto) {
    return this.manager.transaction(async (manager) => {
      const answer = await this.manager.findOne(Answer, id);
      if (!answer) throw new NotFoundException(`Answer ${id} not found.`);
      manager.merge(Answer, answer, updateAnswerDto);
      return manager.save(answer);
    });
  }

  async remove(id: number) {
    return this.manager.transaction(async (manager) => {
      const answer = await this.manager.findOne(Answer, id);
      if (!answer) throw new NotFoundException(`Answer ${id} not found.`);
      await manager.delete(Answer, id);
    });
  }
}
