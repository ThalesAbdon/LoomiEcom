import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Inject,
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

@Controller({
  path: 'users',
})
@ApiTags('user')
export class UserController {
  constructor(
    @Inject(CreateUserApplication)
    private _createUserApplication: CreateUserApplication,
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
}
