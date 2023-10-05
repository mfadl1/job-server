import { Options, defineConfig } from '@mikro-orm/core';
import { UserModel } from './mikroorm/entities/user.entity';
import { RoleModel } from './mikroorm/entities/role.entity';

const config: Options = defineConfig({
    entities: [UserModel, RoleModel],
    dbName: 'vokraf',
    host: 'localhost',
    type: 'postgresql',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    schema: 'authenticator',
    migrations: {
        path: './mikroorm/migrations',
        disableForeignKeys: false,
        dropTables: false,
    },
});

export default config;
