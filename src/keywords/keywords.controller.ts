import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, Request, HttpCode, UseGuards, Render, UseFilters
} from '@nestjs/common';
import { KeywordsService } from './keywords.service';
import { CreateKeywordDto } from './dto/create-keyword.dto';
import { UpdateKeywordDto } from './dto/update-keyword.dto';
import RequestWithUser from '../auth/requestWithUser.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {JwtService} from "@nestjs/jwt";

@Controller('keywords')
export class KeywordsController {
  constructor(private readonly keywordsService: KeywordsService,
              private readonly jwtService: JwtService) {}

  @Post()
  create(@Body() createKeywordDto: CreateKeywordDto) {
    return this.keywordsService.create(createKeywordDto);
  }

  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Post('keys-by-qid')
  async KeysAnswersByQuestion(@Request() req: RequestWithUser) {
    const res = await this.keywordsService.KeysAnswersByQuestion(req.body.qid);
    return JSON.stringify(res);
  }

  @HttpCode(200)
  @Get('/charts')
  @Render('site_stats')
  async Stats(@Request() req: RequestWithUser) {
    console.log(this.jwtService.decode(req.cookies.Authentication));
    const token = this.jwtService.decode(req.cookies.Authentication);
    if (token)
      return {
        logged: true
      };
    else{
      return {
        logged: false
      };
    }
    return;
  }

  @HttpCode(200)
  @Post('/charts')
  async ShowCharts() {
    const res = await this.keywordsService.ShowCharts();
    return JSON.stringify(res);
  }
  @Get()
  findAll() {
    return this.keywordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.keywordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKeywordDto: UpdateKeywordDto) {
    return this.keywordsService.update(+id, updateKeywordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.keywordsService.remove(+id);
  }
}
