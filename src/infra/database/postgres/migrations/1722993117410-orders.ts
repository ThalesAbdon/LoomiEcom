import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Orders1722993117410 implements MigrationInterface {
  readonly nameTable = 'orders';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.nameTable,
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
            generationStrategy: 'increment',
            unsigned: true,
          },
          {
            name: 'client_id',
            type: 'int',
            unsigned: true,
          },
          {
            name: 'status',
            type: 'enum',
            enum: [
              'received',
              'preparation',
              'dispatched',
              'delivered',
              'refused',
            ],
            default: "'received'",
            isNullable: false,
          },
          {
            name: 'order_date',
            type: 'timestamptz',
            isNullable: false,
            default: 'now()',
          },
          {
            name: 'total',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            isNullable: false,
            default: 'now()',
          },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      this.nameTable,
      new TableForeignKey({
        columnNames: ['client_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'clients',
        onDelete: 'CASCADE',
        name: 'fk_client_id',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.nameTable, 'fk_client_id');
    await queryRunner.dropTable(this.nameTable);
  }
}
