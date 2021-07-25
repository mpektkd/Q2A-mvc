import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AnswerModule } from './answer/answer.module';
import { ThreadModule } from './thread/thread.module';
import { QuestionModule } from './question/question.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { KeywordsModule } from './keywords/keywords.module';
import { ThreadUsersUserModule } from './thread-users-user/thread-users-user.module';
import { ModelsModule } from './models/models.module';
import * as connectionOptions from '../ormconfig';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { PipesModule } from './pipes/pipes.module';
import {JwtModule, JwtService} from "@nestjs/jwt";
import {JwtStrategy} from "./auth/jwt.strategy";
import {jwtConstants} from "./auth/constants";

@Module({
  imports: [
    TypeOrmModule.forRoot(connectionOptions),
    UserModule,
    AnswerModule,
    ThreadModule,
    QuestionModule,
    AuthModule,
    RolesModule,
    KeywordsModule,
    ThreadUsersUserModule,
    ModelsModule,
    PipesModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
