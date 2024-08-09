import { ClientEntity } from 'src/core/clients/entity/client.entity';
import { ItemEntity } from 'src/core/items/entity/item.entity';
import { OrderStatus } from 'src/shared/order-status.enum';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'client_id' })
  clientId: number;

  @Column({ type: 'enum', enum: OrderStatus })
  status: OrderStatus;

  @Column({ name: 'order_date' })
  orderDate: Date;

  @Column('decimal', { precision: 6, scale: 2 })
  total: number;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => ClientEntity)
  @JoinColumn({ name: 'client_id' })
  client: ClientEntity;
  @OneToMany(() => ItemEntity, (item) => item.order)
  item: ItemEntity[];
  constructor(input: Partial<ItemEntity>) {
    Object.assign(this, input);
  }
}
