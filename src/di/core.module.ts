import { Module, Provider } from '@nestjs/common';
import { CreateUserUsecase } from 'src/core/users/usecases/create-user.usecase';
import { InfraModule } from './infra.module';
import { VerifyEmailUsecase } from 'src/core/users/usecases/verify-email.usecase';
import { ActivedAccountUsecase } from 'src/core/users/usecases/actived-account.usecase';
import { LoginUserUsecase } from 'src/core/users/usecases/login-user.usecase';
import { FindByIdUserUsecase } from 'src/core/users/usecases/find-by-id-user.usecase';
import { DeleteUserUsecase } from 'src/core/users/usecases/delete-user.usecase';

export const coreProviders: Provider[] = [
  CreateUserUsecase,
  ActivedAccountUsecase,
  VerifyEmailUsecase,
  FindByIdUserUsecase,
  DeleteUserUsecase,
  LoginUserUsecase,
  InfraModule,
];

@Module({
  imports: [InfraModule],
  providers: coreProviders,
  exports: coreProviders,
})
export class CoreModule {}
