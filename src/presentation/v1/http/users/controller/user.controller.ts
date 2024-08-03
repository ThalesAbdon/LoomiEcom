import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Param,
  Post,
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

@Controller({
  path: 'users',
})
@ApiTags('user')
export class UserController {
  constructor(
    @Inject(CreateUserApplication)
    private _createUserApplication: CreateUserApplication,
    private _activedAccountApplication: ActivedAccountApplication,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('')
  @UsePipes(createPipe(CreateUserDtoInput))
  @ApiBody({ type: CreateUserDtoInput, required: true })
  async create(
    @Body()
    input: CreateUserDtoInput,
  ): Promise<CreateUserDtoOutput> {
    return await this._createUserApplication.execute(input);
  }

  @Get('/:id/:token')
  async get(
    @Param()
    input: ActivedAccountDtoInput,
  ): Promise<void> {
    await this._activedAccountApplication.execute(input);
  }
}
