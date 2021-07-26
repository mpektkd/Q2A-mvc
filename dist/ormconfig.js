"use strict";
const connectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'mpekristkd68',
    database: 'ntua',
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migration/*{.ts,.js}'],
    cli: {
        migrationsDir: 'migration',
    },
    logging: true,
    synchronize: false,
};
module.exports = connectionOptions;
//# sourceMappingURL=ormconfig.js.map