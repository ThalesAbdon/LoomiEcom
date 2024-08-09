import { OrderEntity } from 'src/core/orders/entity/order.entity';
import { UserEntity } from 'src/core/users/entity/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity('clients')
export class ClientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'full_name' })
  fullName: string;

  @Column()
  contact: string;

  @Column()
  address: string;

  @Column()
  status: boolean;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @OneToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
  @OneToMany(() => OrderEntity, (order) => order.client)
  order: OrderEntity[];
  constructor(input: Partial<ClientEntity>) {
    Object.assign(this, input);
  }
}
