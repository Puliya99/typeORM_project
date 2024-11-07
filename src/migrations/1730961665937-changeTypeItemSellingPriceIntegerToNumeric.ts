import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeTypeItemSellingPriceIntegerToNumeric1730961665937 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE item
            ALTER COLUMN "sellingPriceRetail" TYPE numeric USING "sellingPriceRetail"::numeric
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE item
            ALTER COLUMN "sellingPriceRetail" TYPE integer USING "sellingPriceRetail"::integer
        `);
    }

}
