import { Inject, Injectable } from '@nestjs/common';
import { IUseCase } from 'src/core/interfaces/IUsecase';
import { UserRepository } from '../repository/user.repository';
import { DeleteUserUsecaseInput } from '../interfaces/delete.user.usecase.interface';

@Injectable()
export class DeleteUserUsecase
  implements IUseCase<DeleteUserUsecaseInput, Record<string, any>>
{
  constructor(
    @Inject(UserRepository) private readonly _userRepository: UserRepository,
  ) {}
  async execute(input: DeleteUserUsecaseInput): Promise<Record<string, any>> {
    const user = await this._userRepository.delete(+input);
    return user;
  }
}
