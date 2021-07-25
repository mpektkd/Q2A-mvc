import { MigrationInterface, QueryRunner } from "typeorm";
export declare class NewStart1625012772937 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
