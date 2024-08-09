import { ClientEntity } from 'src/core/clients/entity/client.entity';
import { UserRole } from 'src/shared/user-role.enum';

import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRole })
  type: UserRole;

  @Column({ name: 'email_verified' })
  emailVerified: boolean;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @OneToOne(() => ClientEntity, (client) => client.user)
  client: ClientEntity;
  constructor(input: Partial<UserEntity>) {
    Object.assign(this, input);
  }
}
