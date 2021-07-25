import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThreadUsersUserService } from './thread-users-user.service';
import { CreateThreadUsersUserDto } from './dto/create-thread-users-user.dto';
import { UpdateThreadUsersUserDto } from './dto/update-thread-users-user.dto';

@Controller('thread-users-user')
export class ThreadUsersUserController {
  constructor(private readonly threadUsersUserService: ThreadUsersUserService) {}

  @Post()
  create(@Body() createThreadUsersUserDto: CreateThreadUsersUserDto) {
    return this.threadUsersUserService.create(createThreadUsersUserDto);
  }

  @Get()
  findAll() {
    return this.threadUsersUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.threadUsersUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThreadUsersUserDto: UpdateThreadUsersUserDto) {
    return this.threadUsersUserService.update(+id, updateThreadUsersUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.threadUsersUserService.remove(+id);
  }
}
