import { AppDataSource } from './DataSource';

async function initialize() {
  try {
    await AppDataSource.initialize();


    await AppDataSource.runMigrations();

    console.log('Migrations have been executed.');


  } catch (error) {
    console.error('Error during Data Source initialization or migrations execution:', error);
  } finally {
    await AppDataSource.destroy();
  }
}

initialize().catch((error) => console.error("Initialization Error:", error));
