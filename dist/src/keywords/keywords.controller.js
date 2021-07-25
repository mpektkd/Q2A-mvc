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
exports.KeywordsController = void 0;
const common_1 = require("@nestjs/common");
const keywords_service_1 = require("./keywords.service");
const create_keyword_dto_1 = require("./dto/create-keyword.dto");
const update_keyword_dto_1 = require("./dto/update-keyword.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const jwt_1 = require("@nestjs/jwt");
let KeywordsController = class KeywordsController {
    constructor(keywordsService, jwtService) {
        this.keywordsService = keywordsService;
        this.jwtService = jwtService;
    }
    create(createKeywordDto) {
        return this.keywordsService.create(createKeywordDto);
    }
    async KeysAnswersByQuestion(req) {
        const res = await this.keywordsService.KeysAnswersByQuestion(req.body.qid);
        return JSON.stringify(res);
    }
    async Stats(req) {
        console.log(this.jwtService.decode(req.cookies.Authentication));
        const token = this.jwtService.decode(req.cookies.Authentication);
        if (token)
            return {
                logged: true
            };
        else {
            return {
                logged: false
            };
        }
        return;
    }
    async ShowCharts() {
        const res = await this.keywordsService.ShowCharts();
        return JSON.stringify(res);
    }
    findAll() {
        return this.keywordsService.findAll();
    }
    findOne(id) {
        return this.keywordsService.findOne(+id);
    }
    update(id, updateKeywordDto) {
        return this.keywordsService.update(+id, updateKeywordDto);
    }
    remove(id) {
        return this.keywordsService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_keyword_dto_1.CreateKeywordDto]),
    __metadata("design:returntype", void 0)
], KeywordsController.prototype, "create", null);
__decorate([
    common_1.HttpCode(200),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post('keys-by-qid'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], KeywordsController.prototype, "KeysAnswersByQuestion", null);
__decorate([
    common_1.HttpCode(200),
    common_1.Get('/charts'),
    common_1.Render('site_stats'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], KeywordsController.prototype, "Stats", null);
__decorate([
    common_1.HttpCode(200),
    common_1.Post('/charts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], KeywordsController.prototype, "ShowCharts", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], KeywordsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KeywordsController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_keyword_dto_1.UpdateKeywordDto]),
    __metadata("design:returntype", void 0)
], KeywordsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KeywordsController.prototype, "remove", null);
KeywordsController = __decorate([
    common_1.Controller('keywords'),
    __metadata("design:paramtypes", [keywords_service_1.KeywordsService,
        jwt_1.JwtService])
], KeywordsController);
exports.KeywordsController = KeywordsController;
//# sourceMappingURL=keywords.controller.js.map