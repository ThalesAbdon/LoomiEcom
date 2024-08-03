import { Module, Provider } from '@nestjs/common';
import { CreateUserApplication } from 'src/application/users/create-user.application';
import { CoreModule } from './core.module';
import { ActivedAccountApplication } from 'src/application/users/actived-account.application';

const applicationProviders: Provider[] = [
  CreateUserApplication,
  ActivedAccountApplication,
];

@Module({
  imports: [CoreModule],
  providers: applicationProviders,
  exports: applicationProviders,
})
export class ApplicationModule {}
