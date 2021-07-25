import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { EntityManager } from 'typeorm';
import { UserRepo } from './user.repository';
import { QuestionByDayModel } from "../models/questionByDay";
export declare class UserService {
    private manager;
    private readonly repo;
    constructor(manager: EntityManager, repo: UserRepo);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    ShowContr(id: number): Promise<QuestionByDayModel[]>;
    findOne(id: number): Promise<User>;
    findByEmail(email: string): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<void>;
}
