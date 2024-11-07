"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Client_1 = require("./entities/Client");
const Transaction_1 = require("./entities/Transaction");
const Banker_1 = require("./entities/Banker");
const Item_1 = require("./entities/Item");
const Person_1 = require("./entities/utils/Person");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "test",
    schema: "public",
    entities: [Client_1.Client, Transaction_1.Transaction, Banker_1.Banker, Item_1.Item, Person_1.Person],
    migrations: ['dist/migrations/*.js'],
    synchronize: false,
    logging: true,
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((error) => {
    console.error("Error during Data Source initialization:", error);
});
//# sourceMappingURL=DataSource.js.map