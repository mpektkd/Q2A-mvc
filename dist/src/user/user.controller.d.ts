import { HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ProfileModel } from '../models/questionByDay';
import RequestWithUser from "../auth/requestWithUser.interface";
import { JwtService } from "@nestjs/jwt";
export declare class UserController {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    create(createUserDto: CreateUserDto, res: any): Promise<import("./entities/user.entity").User>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findOne(id: number): Promise<HttpStatus.NOT_FOUND | {
        profile: ProfileModel;
    }>;
    update(req: RequestWithUser, updateUserDto: UpdateUserDto, res: any): Promise<void>;
    remove(id: string): Promise<void>;
}
