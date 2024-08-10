import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Items1722993675882 implements MigrationInterface {
  readonly nameTable = 'items';
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
            name: 'order_id',
            type: 'int',
            unsigned: true,
          },
          {
            name: 'product_id',
            type: 'int',
            unsigned: true,
          },
          {
            name: 'quantity',
            type: 'int',
            unsigned: true,
            isNullable: false,
          },
          {
            name: 'price_per_unit',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'subtotal',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            isNullable: false,
            default: 'now()',
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
        columnNames: ['order_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'orders',
        onDelete: 'CASCADE',
        name: 'fk_order_id',
      }),
    );
    await queryRunner.createForeignKey(
      this.nameTable,
      new TableForeignKey({
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'products',
        onDelete: 'CASCADE',
        name: 'fk_product_id',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.nameTable, 'fk_order_id');
    await queryRunner.dropForeignKey(this.nameTable, 'fk_product_id');
    await queryRunner.dropTable(this.nameTable);
  }
}
