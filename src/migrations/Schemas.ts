import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInitialSchema1680420234600 implements MigrationInterface {
    name = 'CreateInitialSchema1680420234600'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create client table
        await queryRunner.query(`
            CREATE TABLE "client" (
                "id" SERIAL NOT NULL,
                "first_name" character varying NOT NULL,
                "last_name" character varying NOT NULL,
                "email" character varying NOT NULL,
                "card_number" character varying(10) NOT NULL,
                "balance" numeric NOT NULL,
                "is_active" boolean DEFAULT true,
                "additional_info" jsonb,
                "family_members" text array,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_client_id" PRIMARY KEY ("id")
            )
        `);

        // Create banker table
        await queryRunner.query(`
            CREATE TABLE "banker" (
                "id" SERIAL NOT NULL,
                "first_name" character varying NOT NULL,
                "last_name" character varying NOT NULL,
                "email" character varying NOT NULL,
                "card_number" character varying(10) NOT NULL,
                "employee_number" character varying(10) UNIQUE NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_banker_id" PRIMARY KEY ("id")
            )
        `);

        // Create transaction table
        await queryRunner.query(`
            CREATE TABLE "transactions" (
                "id" SERIAL NOT NULL,
                "type" character varying NOT NULL CHECK ("type" IN ('deposit', 'withdraw')),
                "amount" numeric NOT NULL,
                "client_id" integer,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_transaction_id" PRIMARY KEY ("id"),
                CONSTRAINT "FK_transaction_client" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE CASCADE
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`DROP TABLE "transactions"`);

        await queryRunner.query(`DROP TABLE "banker"`);

        await queryRunner.query(`DROP TABLE "client"`);
    }
}
