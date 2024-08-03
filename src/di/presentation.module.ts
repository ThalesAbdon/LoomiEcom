import { Module } from '@nestjs/common';
import { ApplicationModule } from './application.module';
import { UserController } from 'src/presentation/v1/http/users/controller/user.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [UserController],
})
export class PresentationModule {}
