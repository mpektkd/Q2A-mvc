"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const app_service_1 = require("./app.service");
const common_1 = require("@nestjs/common");
const local_auth_guard_1 = require("./auth/local-auth.guard");
const auth_service_1 = require("./auth/auth.service");
const jwt_auth_guard_1 = require("./auth/jwt-auth.guard");
const create_user_dto_1 = require("./user/dto/create-user.dto");
const jwt_1 = require("@nestjs/jwt");
let AppController = class AppController {
    constructor(appService, authService, jwtService) {
        this.appService = appService;
        this.authService = authService;
        this.jwtService = jwtService;
    }
    async registerPage() {
        return {
            pageTitle: 'Register',
        };
    }
    async register(registrationData, res) {
        await this.authService.register(registrationData);
        res.redirect(`/`);
    }
    loginPage(req) {
        return {
            pageTitle: 'Login',
        };
    }
    async logIn(request, res) {
        const { user } = request;
        console.log(user);
        const cookie = this.authService.getCookieWithJwtToken(user.id);
        res.setHeader('Set-Cookie', cookie);
        user.password = undefined;
        res.redirect(`user/${user.id}`);
    }
    index() {
        return {
            url: 'answer'
        };
    }
    getProfile(req, res) {
        console.log(this.jwtService.decode(req.cookies.Authentication));
        const token = this.jwtService.decode(req.cookies.Authentication);
        res.redirect(`user/${token['userId']}`);
    }
    async logout(req, res) {
        await res.setHeader('Set-Cookie', this.authService.getCookieForLogOut());
        res.redirect(`/`);
    }
};
__decorate([
    common_1.Get('register'),
    common_1.Render('register'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "registerPage", null);
__decorate([
    common_1.HttpCode(200),
    common_1.Post('register'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "register", null);
__decorate([
    common_1.Get('login'),
    common_1.Render('login'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "loginPage", null);
__decorate([
    common_1.HttpCode(200),
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_1.Post('login'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "logIn", null);
__decorate([
    common_1.Get('/'),
    common_1.Redirect(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "index", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get('/profile'),
    common_1.Render('profile'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getProfile", null);
__decorate([
    common_1.HttpCode(200),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get('/logout'),
    __param(0, common_1.Request()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "logout", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        auth_service_1.AuthService,
        jwt_1.JwtService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map