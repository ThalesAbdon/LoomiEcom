import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertUserAdmin1722908814754 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO users("name","email","password","type","email_verified") values ('admin','admin@email.com','$2b$10$VlygwMGiI84NmWKR6JXgN.ah3yKKG/LiXVyYT8aM9zfz7K0roMTRy','admin',true)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM users WHERE email='admin@email.com'`);
  }
}
