import { DataSource } from "typeorm";
import { Client } from "./entities/Client";
import { Transaction } from "./entities/Transaction";
import { Banker } from "./entities/Banker";
import { Item } from "./entities/Item";
import { Person } from "./entities/utils/Person";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "test",
    schema: "public", // Define default schema; entity-specific schemas will still be applied
    entities: [Client, Transaction, Banker, Item, Person],
    migrations: ['dist/migrations/*.js'],
    synchronize: false,  // For development only; set to false in production
    logging: true,      // Optional: enables logging for easier debugging
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((error) => {
        console.error("Error during Data Source initialization:", error);
    });
