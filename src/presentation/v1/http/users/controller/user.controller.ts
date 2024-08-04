import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { CreateUserApplication } from 'src/application/users/create-user.application';
import {
  CreateUserDtoInput,
  CreateUserDtoOutput,
} from '../dto/create.user.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { createPipe } from 'src/shared/utils/create-pipe';
import { ActivedAccountDtoInput } from '../dto/actived.account.dto';
import { ActivedAccountApplication } from 'src/application/users/actived-account.application';
import { Roles } from 'src/presentation/roles.decorator';
import { Role } from 'src/presentation/enum/role.enum';
import { RolesGuard } from 'src/presentation/guard/roles.guard';
import { LoginUserDtoInput } from '../dto/login.user.dto';
import { LoginUserApplication } from 'src/application/users/login-user.application';

@Controller({
  path: 'users',
})
@ApiTags('user')
export class UserController {
  constructor(
    @Inject(CreateUserApplication)
    private createUserApplication: CreateUserApplication,
    @Inject(ActivedAccountApplication)
    private activedAccountApplication: ActivedAccountApplication,
    @Inject(LoginUserApplication)
    private loginUserApplication: LoginUserApplication,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('')
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @UsePipes(createPipe(CreateUserDtoInput))
  @ApiBody({ type: CreateUserDtoInput, required: true })
  async create(
    @Body()
    input: CreateUserDtoInput,
  ): Promise<CreateUserDtoOutput> {
    return await this.createUserApplication.execute(input);
  }

  @Get('/:id/:token')
  async get(
    @Param()
    input: ActivedAccountDtoInput,
  ): Promise<void> {
    await this.activedAccountApplication.execute(input);
  }

  @Post('/login')
  @UsePipes(createPipe(LoginUserDtoInput))
  @ApiBody({ type: LoginUserDtoInput, required: true })
  async login(
    @Body()
    input: LoginUserDtoInput,
  ): Promise<Record<string, any>> {
    return await this.loginUserApplication.execute(input);
  }
}
