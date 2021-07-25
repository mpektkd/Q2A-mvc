"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewStart21625012983302 = void 0;
class NewStart21625012983302 {
    constructor() {
        this.name = 'NewStart21625012983302';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "thread_users_user" DROP CONSTRAINT "FK_1cb65947909789a0101566ceab2"`);
        await queryRunner.query(`ALTER TABLE "thread_users_user" DROP CONSTRAINT "FK_5f595612fc5b8b717e08b5e4871"`);
        await queryRunner.query(`DROP INDEX "IDX_1cb65947909789a0101566ceab"`);
        await queryRunner.query(`DROP INDEX "IDX_5f595612fc5b8b717e08b5e487"`);
        await queryRunner.query(`CREATE INDEX "IDX_1cb65947909789a0101566ceab" ON "thread_users_user" ("threadId") `);
        await queryRunner.query(`CREATE INDEX "IDX_5f595612fc5b8b717e08b5e487" ON "thread_users_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "thread_users_user" ADD CONSTRAINT "FK_1cb65947909789a0101566ceab2" FOREIGN KEY ("threadId") REFERENCES "thread"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "thread_users_user" ADD CONSTRAINT "FK_5f595612fc5b8b717e08b5e4871" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "thread_users_user" DROP CONSTRAINT "FK_5f595612fc5b8b717e08b5e4871"`);
        await queryRunner.query(`ALTER TABLE "thread_users_user" DROP CONSTRAINT "FK_1cb65947909789a0101566ceab2"`);
        await queryRunner.query(`DROP INDEX "IDX_5f595612fc5b8b717e08b5e487"`);
        await queryRunner.query(`DROP INDEX "IDX_1cb65947909789a0101566ceab"`);
        await queryRunner.query(`CREATE INDEX "IDX_5f595612fc5b8b717e08b5e487" ON "thread_users_user" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_1cb65947909789a0101566ceab" ON "thread_users_user" ("threadId") `);
        await queryRunner.query(`ALTER TABLE "thread_users_user" ADD CONSTRAINT "FK_5f595612fc5b8b717e08b5e4871" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "thread_users_user" ADD CONSTRAINT "FK_1cb65947909789a0101566ceab2" FOREIGN KEY ("threadId") REFERENCES "thread"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
}
exports.NewStart21625012983302 = NewStart21625012983302;
//# sourceMappingURL=1625012983302-NewStart2.js.map