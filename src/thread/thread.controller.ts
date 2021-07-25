import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Headers
} from '@nestjs/common';
import { ThreadService } from './thread.service';
import { CreateThreadDto } from './dto/create-thread.dto';
import { UpdateThreadDto } from './dto/update-thread.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('thread')
export class ThreadController {
  constructor(private readonly threadService: ThreadService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Headers() headers, @Body() createThreadDto: CreateThreadDto) {
    const token = headers.authorization.slice(7);
    return await this.threadService.create(token, createThreadDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.threadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.threadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThreadDto: UpdateThreadDto) {
    return this.threadService.update(+id, updateThreadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.threadService.remove(+id);
  }
}
