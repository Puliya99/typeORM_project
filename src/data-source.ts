import { DataSource } from "typeorm";
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";
import { Transaction } from "./entities/Transaction";
import { Person } from "./entities/utils/Person";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'my_pgdb',
    entities: [Client, Banker, Transaction, Person],
    migrations: ["src/migrations/*.ts"],
    synchronize: false,
    logging: true
});
