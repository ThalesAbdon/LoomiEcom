import { OrderEntity } from 'src/core/orders/entity/order.entity';
import { ProductEntity } from 'src/core/products/entity/product.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity('items')
export class ItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'order_id' })
  orderId: number;

  @Column({ name: 'product_id' })
  productId: number;

  @Column()
  quantity: number;

  @Column('decimal', { name: 'price_per_unit', precision: 6, scale: 2 })
  pricePerUnit: number;

  @Column('decimal', { precision: 6, scale: 2 })
  subtotal: number;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => OrderEntity)
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;

  @ManyToOne(() => ProductEntity, (product) => product.items)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;
  constructor(input: Partial<ItemEntity>) {
    Object.assign(this, input);
  }
}
