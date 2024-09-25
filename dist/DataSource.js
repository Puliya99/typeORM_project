"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Banker_1 = require("./entities/Banker");
const Client_1 = require("./entities/Client");
const Transaction_1 = require("./entities/Transaction");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'my_pgdb',
    entities: [Client_1.Client, Banker_1.Banker, Transaction_1.Transaction],
    migrations: ["dist/migrations/*.js"],
    synchronize: true,
    logging: true,
});
//# sourceMappingURL=DataSource.js.map