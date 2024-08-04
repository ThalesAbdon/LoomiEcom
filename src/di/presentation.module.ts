import { Module } from '@nestjs/common';
import { ApplicationModule } from './application.module';
import { UserController } from 'src/presentation/v1/http/users/controller/user.controller';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/presentation/guard/roles.guard';
@Module({
  imports: [ApplicationModule],
  controllers: [UserController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class PresentationModule {}
