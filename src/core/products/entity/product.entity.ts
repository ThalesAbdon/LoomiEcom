import { ItemEntity } from 'src/core/items/entity/item.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal', { precision: 6, scale: 2 })
  price: number;

  @Column({ name: 'quantity_stock' })
  quantityStock: number;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => ItemEntity, (item) => item.product)
  items: ItemEntity[];
  constructor(input: Partial<ProductEntity>) {
    Object.assign(this, input);
  }
}
