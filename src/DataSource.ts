import { DataSource } from 'typeorm';
import { Banker } from './entities/Banker';
import { Client } from './entities/Client';
import { Transaction } from './entities/Transaction';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'typeorm',
    schema: 'public',
    entities: [Client, Transaction, Banker],
    migrations: ['dist/migrations/*.js'],
    synchronize: false,
});