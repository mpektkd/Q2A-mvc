import { MigrationInterface, QueryRunner } from "typeorm";
export declare class NewStart21625012983302 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
