import { KeywordsService } from './keywords.service';
import { CreateKeywordDto } from './dto/create-keyword.dto';
import { UpdateKeywordDto } from './dto/update-keyword.dto';
import RequestWithUser from '../auth/requestWithUser.interface';
import { JwtService } from "@nestjs/jwt";
export declare class KeywordsController {
    private readonly keywordsService;
    private readonly jwtService;
    constructor(keywordsService: KeywordsService, jwtService: JwtService);
    create(createKeywordDto: CreateKeywordDto): Promise<import("./entities/keyword.entity").Keyword>;
    KeysAnswersByQuestion(req: RequestWithUser): Promise<string>;
    Stats(req: RequestWithUser): Promise<{
        logged: boolean;
    }>;
    ShowCharts(): Promise<string>;
    findAll(): Promise<import("./entities/keyword.entity").Keyword[]>;
    findOne(id: string): Promise<import("./entities/keyword.entity").Keyword>;
    update(id: string, updateKeywordDto: UpdateKeywordDto): Promise<string | import("./entities/keyword.entity").Keyword>;
    remove(id: string): Promise<void>;
}
