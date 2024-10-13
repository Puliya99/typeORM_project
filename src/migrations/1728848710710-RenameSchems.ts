import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameSchems1728848710710 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER SCHEMA customer RENAME TO client;`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER SCHEMA client RENAME TO customer;`);
    }

}
