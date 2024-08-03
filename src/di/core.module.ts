import { Module, Provider } from '@nestjs/common';
import { CreateUserUsecase } from 'src/core/users/usecases/create-user.usecase';
import { InfraModule } from './infra.module';
import { VerifyEmailUsecase } from 'src/core/users/usecases/verify-email.usecase';
import { ActivedAccountUsecase } from 'src/core/users/usecases/actived-account.usecase';

export const coreProviders: Provider[] = [
  CreateUserUsecase,
  ActivedAccountUsecase,
  VerifyEmailUsecase,
  InfraModule,
];

@Module({
  imports: [InfraModule],
  providers: coreProviders,
  exports: coreProviders,
})
export class CoreModule {}
