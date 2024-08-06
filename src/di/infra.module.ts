import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/core/users/entity/user.entity';
import { UserRepository } from 'src/core/users/repository/user.repository';
import { config } from 'src/infra/database/postgres/typeOrm.migration-config';
import { EmailService } from 'src/infra/mail/service/email.service';
import { JwtModule } from '@nestjs/jwt';
import { ClientRepository } from 'src/core/clients/repository/client.repository';
import { ClientEntity } from 'src/core/clients/entity/client.entity';

export const infraProviders: Provider[] = [
  UserRepository,
  ClientRepository,
  EmailService,
];

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([UserEntity, ClientEntity]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: parseInt(process.env.JWT_EXPIRATION_TIME),
      },
    }),
  ],
  exports: [
    TypeOrmModule.forRoot(config),
    UserRepository,
    EmailService,
    ClientRepository,
  ],
  providers: infraProviders,
})
export class InfraModule {}
