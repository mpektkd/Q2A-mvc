import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Render,
  UseGuards,
  Req,
  HttpStatus, Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProfileModel } from '../models/questionByDay';
import RequestWithUser from "../auth/requestWithUser.interface";
import {JwtService} from "@nestjs/jwt";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService,
              private readonly jwtService: JwtService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto, @Res() res) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @Render('profile')
  async findOne(@Param('id') id: number) {
    const user = await this.userService.findOne(id);
    if (!user) {
      return HttpStatus.NOT_FOUND;
    }
    const contr = await this.userService.ShowContr(id);
    const profile = new ProfileModel();
    profile.user = user;
    profile.contr = contr;
    return { profile: profile };
  }

  @Post('update')
  async update(@Request() req: RequestWithUser, @Body() updateUserDto: UpdateUserDto, @Res() res) {
    const token = this.jwtService.decode(req.cookies.Authentication);

    if(token){
      updateUserDto.username = updateUserDto.username ? updateUserDto.username : req.body.hidden_username;
      updateUserDto.email = updateUserDto.email ? updateUserDto.email : req.body.hidden_email;
      updateUserDto.password = updateUserDto.password ? updateUserDto.password : req.body.hidden_password;

      await this.userService.update(token['userId'], updateUserDto);
    }
    res.redirect(`/user/${token['userId']}`);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
