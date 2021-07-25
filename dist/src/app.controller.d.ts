import { AppService } from './app.service';
import { Response } from 'express';
import { AuthService } from './auth/auth.service';
import RequestWithUser from './auth/requestWithUser.interface';
import { CreateUserDto } from './user/dto/create-user.dto';
import { JwtService } from "@nestjs/jwt";
export declare class AppController {
    private readonly appService;
    private authService;
    private jwtService;
    constructor(appService: AppService, authService: AuthService, jwtService: JwtService);
    registerPage(): Promise<{
        pageTitle: string;
    }>;
    register(registrationData: CreateUserDto, res: any): Promise<void>;
    loginPage(req: any): {
        pageTitle: string;
    };
    logIn(request: RequestWithUser, res: Response): Promise<void>;
    index(): {
        url: string;
    };
    getProfile(req: RequestWithUser, res: Response): void;
    logout(req: any, res: Response): Promise<void>;
}
