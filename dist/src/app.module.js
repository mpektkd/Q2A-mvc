"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./user/user.module");
const answer_module_1 = require("./answer/answer.module");
const thread_module_1 = require("./thread/thread.module");
const question_module_1 = require("./question/question.module");
const auth_module_1 = require("./auth/auth.module");
const roles_module_1 = require("./roles/roles.module");
const keywords_module_1 = require("./keywords/keywords.module");
const thread_users_user_module_1 = require("./thread-users-user/thread-users-user.module");
const models_module_1 = require("./models/models.module");
const connectionOptions = require("../ormconfig");
const pipes_module_1 = require("./pipes/pipes.module");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("./auth/constants");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(connectionOptions),
            user_module_1.UserModule,
            answer_module_1.AnswerModule,
            thread_module_1.ThreadModule,
            question_module_1.QuestionModule,
            auth_module_1.AuthModule,
            roles_module_1.RolesModule,
            keywords_module_1.KeywordsModule,
            thread_users_user_module_1.ThreadUsersUserModule,
            models_module_1.ModelsModule,
            pipes_module_1.PipesModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '1h' },
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map