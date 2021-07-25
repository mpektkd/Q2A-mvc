"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeywordsModule = void 0;
const common_1 = require("@nestjs/common");
const keywords_service_1 = require("./keywords.service");
const keywords_controller_1 = require("./keywords.controller");
const typeorm_1 = require("@nestjs/typeorm");
const question_entity_1 = require("../question/entities/question.entity");
const keyword_repository_1 = require("./keyword.repository");
const keyword_entity_1 = require("./entities/keyword.entity");
const thread_entity_1 = require("../thread/entities/thread.entity");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("../auth/constants");
let KeywordsModule = class KeywordsModule {
};
KeywordsModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([keyword_entity_1.Keyword, question_entity_1.Question, thread_entity_1.Thread, keyword_repository_1.AnswerFormRepo,]),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '1m' },
            }),
        ],
        controllers: [keywords_controller_1.KeywordsController],
        providers: [keywords_service_1.KeywordsService],
        exports: [keywords_service_1.KeywordsService],
    })
], KeywordsModule);
exports.KeywordsModule = KeywordsModule;
//# sourceMappingURL=keywords.module.js.map