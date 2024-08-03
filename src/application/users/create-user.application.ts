import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateUserUsecase } from 'src/core/users/usecases/create-user.usecase';
import {
  CreateUserApplicationInput,
  CreateUserApplicationOutput,
} from './interfaces/create-user.application.interface';
import { VerifyEmailUsecase } from 'src/core/users/usecases/verify-email.usecase';
import { Bcrypt } from 'src/infra/database/postgres/auth/bcrypt';

@Injectable()
export class CreateUserApplication {
  constructor(
    @Inject(CreateUserUsecase) private _createUserUseCase: CreateUserUsecase,
    @Inject(VerifyEmailUsecase) private _verifyEmailUsecase: VerifyEmailUsecase,
    @Inject(Bcrypt) private _bcrypt: Bcrypt,
  ) {}
  async execute(
    input: CreateUserApplicationInput,
  ): Promise<CreateUserApplicationOutput> {
    const emailAlreadyRegistered = await this._verifyEmailUsecase.execute({
      email: input.email,
    });
    if (emailAlreadyRegistered) {
      throw new BadRequestException('Email Already Exist!');
    }
    input.password = await this._bcrypt.sign(input.password);
    const user = await this._createUserUseCase.execute(input);
    delete user.password;
    return user;
  }
}
