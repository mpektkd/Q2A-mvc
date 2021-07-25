import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { CreateKeywordDto } from './dto/create-keyword.dto';
import { UpdateKeywordDto } from './dto/update-keyword.dto';
import { EntityManager } from 'typeorm';
import { Keyword } from './entities/keyword.entity';
import { PostgresErrorCode } from '../database/postgresErrorCodes.enum';
import { AnswerFormRepo } from './keyword.repository';
import { KeysAnswersResponse } from '../models/key.answers.ByQuestion';

@Injectable()
export class KeywordsService {
  constructor(
    @InjectEntityManager() private manager: EntityManager,
    @InjectRepository(AnswerFormRepo) private readonly repo: AnswerFormRepo,
  ) {}
  async create(createKeywordDto: CreateKeywordDto) {
    try {
      const keyword = await this.manager.create(Keyword, createKeywordDto);
      return this.manager.save(keyword);
    } catch (error) {
      if (error?.code === PostgresErrorCode.UniqueViolation) {
        throw new HttpException(
          'KeyWord with that name already exists',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  async findAll(): Promise<Keyword[]> {
    return this.manager.find(Keyword);
  }

  async ShowCharts() {
    return await this.repo.ShowCharts();
  }

  async KeysAnswersByQuestion(qid: number) {
    const res = new KeysAnswersResponse();
    res.KList = await this.repo.GetKeywordsList(qid);
    res.AList = await this.repo.GetPrevAnswersList(qid);
    return res;
  }

  async findOne(id: number): Promise<Keyword> {
    const keyword = await this.manager.findOne(Keyword, id);
    if (!keyword) throw new NotFoundException(`Keyword ${id} not found.`);
    return keyword;
  }

  async update(id: number, updateKeywordDto: UpdateKeywordDto) {
    return this.manager.transaction(async (manager) => {
      const keyword = await this.manager.findOne(Keyword, id);
      if (!keyword) throw new NotFoundException(`Keyword ${id} not found.`);
      manager.merge(Keyword, keyword, updateKeywordDto);
      return manager.save(keyword);
    });
    return `This action updates a #${id} keyword`;
  }

  async remove(id: number) {
    return this.manager.transaction(async (manager) => {
      const keyword = await this.manager.findOne(Keyword, id);
      if (!keyword) throw new NotFoundException(`Keyword ${id} not found.`);
      await manager.delete(Keyword, id);
    });
  }
}
