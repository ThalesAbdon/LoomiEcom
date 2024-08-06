import { Module, Provider } from '@nestjs/common';
import { CreateUserUsecase } from 'src/core/users/usecases/create-user.usecase';
import { InfraModule } from './infra.module';
import { VerifyEmailUsecase } from 'src/core/users/usecases/verify-email.usecase';
import { ActivedAccountUsecase } from 'src/core/users/usecases/actived-account.usecase';
import { LoginUserUsecase } from 'src/core/users/usecases/login-user.usecase';
import { FindByIdUserUsecase } from 'src/core/users/usecases/find-by-id-user.usecase';
import { DeleteUserUsecase } from 'src/core/users/usecases/delete-user.usecase';
import { CreateClientUsecase } from 'src/core/clients/usecases/create-client.usecase';
import { UpdateUserUsecase } from 'src/core/users/usecases/update-user.usecase';
import { ListUserUsecase } from 'src/core/users/usecases/list-user.usecase';
import { FindByIdClientUsecase } from 'src/core/clients/usecases/find-by-id.client.usecase';
import { UpdateClientUsecase } from 'src/core/clients/usecases/update-client.usecase';
import { DeleteClientUsecase } from 'src/core/clients/usecases/delete-client.usecase';
import { ListClientUsecase } from 'src/core/clients/usecases/list-client.usecase';

export const coreProviders: Provider[] = [
  CreateUserUsecase,
  ActivedAccountUsecase,
  VerifyEmailUsecase,
  FindByIdUserUsecase,
  UpdateUserUsecase,
  DeleteUserUsecase,
  ListUserUsecase,
  LoginUserUsecase,
  CreateClientUsecase,
  FindByIdClientUsecase,
  UpdateClientUsecase,
  DeleteClientUsecase,
  ListClientUsecase,
  InfraModule,
];

@Module({
  imports: [InfraModule],
  providers: coreProviders,
  exports: coreProviders,
})
export class CoreModule {}
