import { AppService } from './app.service';
import {
  Controller,
  Get,
  Request,
  Post,
  Res,
  Render,
  UseGuards,
  HttpCode,
  Body,
  Req, Redirect,
} from '@nestjs/common';
import { Response } from 'express';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import RequestWithUser from './auth/requestWithUser.interface';
import { CreateUserDto } from './user/dto/create-user.dto';
import {JwtService} from "@nestjs/jwt";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private jwtService: JwtService,

  ) {}

  @Get('register')
  @Render('register')
  async registerPage() {
    return {
      pageTitle: 'Register',
    };
  }

  @HttpCode(200)
  @Post('register')
  async register(@Body() registrationData: CreateUserDto, @Res() res) {
    await this.authService.register(registrationData);
    res.redirect(`/`);
  }

  @Get('login')
  @Render('login')
  loginPage(@Request() req) {
    return {
      pageTitle: 'Login',
    };
  }

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async logIn(@Req() request: RequestWithUser, @Res() res: Response) {
    const { user } = request;
    console.log(user);
    const cookie = this.authService.getCookieWithJwtToken(user.id);
    res.setHeader('Set-Cookie', cookie);
    user.password = undefined;
    res.redirect(`user/${user.id}`);
  }
  @Get('/')
  @Redirect()
  index() {
    return{
      url: 'answer'
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  @Render('profile')
  getProfile(@Req() req: RequestWithUser, @Res() res: Response) {
    console.log(this.jwtService.decode(req.cookies.Authentication));
    const token = this.jwtService.decode(req.cookies.Authentication);
    res.redirect(`user/${token['userId']}`);
  }

  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Get('/logout')
  async logout(@Request() req, @Res() res: Response) {
    await res.setHeader('Set-Cookie', this.authService.getCookieForLogOut());
    // return res.sendStatus(200);
    res.redirect(`/`);
  }
}
