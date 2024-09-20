import { AppDataSource } from './data-source';

const main = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Connected to Postgres');

        await AppDataSource.runMigrations();
        console.log('Migrations have been run successfully');
    } catch (error) {
        console.error('Error: ', error);
    } finally {
        await AppDataSource.destroy();
    }
};

main();
