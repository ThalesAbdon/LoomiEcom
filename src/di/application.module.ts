import { Module, Provider } from '@nestjs/common';
import { CreateUserApplication } from 'src/application/users/create-user.application';
import { CoreModule } from './core.module';
import { ActivedAccountApplication } from 'src/application/users/actived-account.application';
import { AuthService } from 'src/presentation/guard/auth.service';
import { Bcrypt } from 'src/presentation/guard/bcrypt';
import { HttpContext } from 'src/presentation/guard/http.context';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from 'src/infra/mail/service/email.service';
import * as bcrypt from 'bcrypt';
import { LoginUserApplication } from 'src/application/users/login-user.application';

const applicationProviders: Provider[] = [
  CreateUserApplication,
  ActivedAccountApplication,
  LoginUserApplication,
  AuthService,
  Bcrypt,
  HttpContext,
  JwtService,
  EmailService,
  {
    provide: 'bcrypt',
    useValue: bcrypt,
  },
];

@Module({
  imports: [CoreModule],
  providers: applicationProviders,
  exports: applicationProviders,
})
export class ApplicationModule {}
