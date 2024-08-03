import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/core/users/entity/user.entity';
import { UserRepository } from 'src/core/users/repository/user.repository';

import * as bcrypt from 'bcrypt';
import { config } from 'src/infra/database/postgres/typeOrm.migration-config';
import { EmailService } from 'src/infra/mail/service/email.service';
import { Bcrypt } from 'src/infra/auth/bcrypt';
import { AuthService } from 'src/infra/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { HttpContext } from 'src/infra/auth/http.context';

export const infraProviders: Provider[] = [
  UserRepository,
  {
    provide: 'bcrypt',
    useValue: bcrypt,
  },
  Bcrypt,
  EmailService,
  AuthService,
  HttpContext,
];

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([UserEntity]),
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
    Bcrypt,
    EmailService,
    AuthService,
    HttpContext,
  ],
  providers: infraProviders,
})
export class InfraModule {}
