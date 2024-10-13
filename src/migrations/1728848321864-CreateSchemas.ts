import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSchemas1728848321864 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS customer`);
        await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS accounting`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP SCHEMA IF EXISTS customer CASCADE`);
        await queryRunner.query(`DROP SCHEMA IF EXISTS accounting CASCADE`);
    }

}
