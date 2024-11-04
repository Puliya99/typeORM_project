import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeColumnType1730758508239 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE client
            ALTER COLUMN balance TYPE integer USING balance::integer
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE client
            ALTER COLUMN balance TYPE numeric USING balance::numeric
        `);
    }

}
