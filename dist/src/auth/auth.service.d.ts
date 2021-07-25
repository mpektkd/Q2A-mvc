import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from '../user/dto/create-user.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    private readonly configService;
    constructor(userService: UserService, jwtService: JwtService, configService: ConfigService);
    register(registrationData: CreateUserDto): Promise<import("../user/entities/user.entity").User>;
    validateUser(email: string, plain_pass: string): Promise<any>;
    private verifyPassword;
    getCookieWithJwtToken(userId: number): string;
    getCookieForLogOut(): string;
}
