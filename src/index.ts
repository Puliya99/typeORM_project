import { DataSource } from "typeorm";
import { Banker } from "./entities/Banker";
import { Client } from "./entities/Client";
import { Transaction } from "./entities/Transaction";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'my_pgdb',
  entities: [Client, Banker, Transaction],
  synchronize: false,
  logging: true,
});

async function initialize() {
  try {
    await AppDataSource.initialize();

    await AppDataSource.query(`CREATE SCHEMA IF NOT EXISTS customer`);
    await AppDataSource.query(`CREATE SCHEMA IF NOT EXISTS accounting`);

    console.log('Schemas have been created or already exist.');
  } catch (error) {
    console.error('Error during Data Source initialization or schema creation:', error);
  } finally {
    await AppDataSource.destroy();
  }
}

initialize().catch((error) => console.error("Initialization Error:", error));
