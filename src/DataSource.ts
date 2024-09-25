import { DataSource} from "typeorm";
import { Banker } from "./entities/Banker";
import { Client } from "./entities/Client";
import { Transaction } from "./entities/Transaction";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'my_pgdb',
    entities: [Client, Banker, Transaction],
    migrations: ["dist/migrations/*.js"],
    synchronize: true,
    logging: true,
  });
  