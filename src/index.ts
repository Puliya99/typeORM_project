import { DataSource } from "typeorm";
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";
import { Transaction } from "./entities/Transaction";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'my_pgdb',
  entities: [Client, Banker, Transaction],
  synchronize: true,
  logging: true,
});

async function createSchema() {

  await AppDataSource.initialize();

  const queryRunner = AppDataSource.createQueryRunner();

  await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS new_schema`);

  await queryRunner.release();
}

createSchema().catch((error) => console.error("Error: ", error));
