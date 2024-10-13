"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Banker_1 = require("./entities/Banker");
const Client_1 = require("./entities/Client");
const Transaction_1 = require("./entities/Transaction");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'my_pgdb',
    schema: 'public',
    entities: [Client_1.Client, Transaction_1.Transaction, Banker_1.Banker],
    migrations: ['dist/migrations/*.js'],
    synchronize: false,
});
//# sourceMappingURL=DataSource.js.map