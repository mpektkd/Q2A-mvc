import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Thread } from '../thread/entities/thread.entity';
import { UserRepo } from './user.repository';
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "../auth/constants";

@Module({
  imports: [TypeOrmModule.forFeature([User, Thread, UserRepo]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),],
  controllers: [UserController],
  providers: [UserService],
  exports: [TypeOrmModule],
})
export class UserModule {}
