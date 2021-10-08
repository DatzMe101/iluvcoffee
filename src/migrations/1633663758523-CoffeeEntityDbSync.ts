import { MigrationInterface, QueryRunner } from 'typeorm';

export class CoffeeEntityDbSync1633663758523 implements MigrationInterface {
  name = 'CoffeeEntityDbSync1633663758523';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "label" TO "name"`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_8103866bb2599e7f7682c2cc24" ON "coffee" ("name") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "name" TO "label"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_8103866bb2599e7f7682c2cc24"`,
    );
  }
}
