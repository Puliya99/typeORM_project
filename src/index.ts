import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'my_pgdb',
  entities: ["dist/**/*.entity.js"],
  synchronize: false,
  logging: true,
});

async function createSchema() {

  await AppDataSource.initialize();

  const queryRunner = AppDataSource.createQueryRunner();

  await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS new_schema`);

  await queryRunner.query(`
    CREATE TABLE IF NOT EXISTS new_schema.example_table (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )
  `);

  await queryRunner.release();
}

createSchema().catch((error) => console.error("Error: ", error));
