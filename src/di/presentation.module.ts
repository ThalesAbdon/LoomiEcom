import { Module } from '@nestjs/common';
import { ApplicationModule } from './application.module';
import { UserController } from 'src/presentation/v1/http/users/controller/user.controller';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/presentation/guard/roles.guard';
import { ClientController } from 'src/presentation/v1/http/clients/controller/client.controller';
import { HttpContext } from 'src/presentation/guard/http.context';
@Module({
  imports: [ApplicationModule],
  controllers: [UserController, ClientController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    HttpContext,
  ],
})
export class PresentationModule {}
