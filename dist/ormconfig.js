"use strict";
const connectionOptions = {
    name: 'deafult',
    type: 'postgres',
    host: 'ec2-54-220-195-236.eu-west-1.compute.amazonaws.com',
    port: 5432,
    username: 'vtzrffjbqxcrmn',
    password: 'cc967ef9547db0b4febd78f33a581f2c122728495c536df1ebccceb19a5d7a4d',
    database: 'd9hn101fd53u27',
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