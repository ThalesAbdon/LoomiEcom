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
import { FindByIdUserApplication } from 'src/application/users/find-by-id-user.application';
import { DeleteUserApplication } from 'src/application/users/delete-user.application';
import { CreateClientApplication } from 'src/application/clients/create-client.application';
import { UpdateUserApplication } from 'src/application/users/update-user.application';
import { ListUserApplication } from 'src/application/users/list-user.application';
import { FindByIdClientApplication } from 'src/application/clients/find-by-id-client.application';
import { UpdateClientApplication } from 'src/application/clients/update-client.application';
import { DeleteClientApplication } from 'src/application/clients/delete-client.application';
import { ListClientApplication } from 'src/application/clients/list-client.application';

const applicationProviders: Provider[] = [
  CreateUserApplication,
  ActivedAccountApplication,
  LoginUserApplication,
  FindByIdUserApplication,
  DeleteUserApplication,
  UpdateUserApplication,
  ListUserApplication,
  CreateClientApplication,
  FindByIdClientApplication,
  UpdateClientApplication,
  DeleteClientApplication,
  ListClientApplication,
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
