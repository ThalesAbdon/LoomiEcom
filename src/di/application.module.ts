import { Module, Provider } from '@nestjs/common';
import { CreateUserApplication } from 'src/application/users/create-user.application';
import { CoreModule } from './core.module';

const applicationProviders: Provider[] = [CreateUserApplication];

@Module({
  imports: [CoreModule],
  providers: applicationProviders,
  exports: applicationProviders,
})
export class ApplicationModule {}
