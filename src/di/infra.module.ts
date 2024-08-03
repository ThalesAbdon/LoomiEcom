import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/core/users/entity/user.entity';
import { UserRepository } from 'src/core/users/repository/user.repository';
import { Bcrypt } from 'src/infra/database/postgres/auth/bcrypt';
import * as bcrypt from 'bcrypt';
import { config } from 'src/infra/database/postgres/typeOrm.migration-config';

export const infraProviders: Provider[] = [
  UserRepository,
  {
    provide: 'bcrypt',
    useValue: bcrypt,
  },
  Bcrypt,
];

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  exports: [TypeOrmModule.forRoot(config), UserRepository, Bcrypt],
  providers: infraProviders,
})
export class InfraModule {}
