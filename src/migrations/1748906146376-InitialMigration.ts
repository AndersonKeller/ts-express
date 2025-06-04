import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1748906146376 implements MigrationInterface {
    name = 'InitialMigration1748906146376'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "FK_2777ae8d96a7973cdf541e5ed77"`);
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "postsId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "postsId" integer`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "FK_2777ae8d96a7973cdf541e5ed77" FOREIGN KEY ("postsId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
