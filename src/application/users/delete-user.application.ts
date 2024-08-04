import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { DeleteUserApplicationInput } from './interfaces/delete-user.application.interface';
import { FindByIdUserUsecase } from 'src/core/users/usecases/find-by-id-user.usecase';
import { DeleteUserUsecase } from 'src/core/users/usecases/delete-user.usecase';

@Injectable()
export class DeleteUserApplication {
  constructor(
    @Inject(DeleteUserUsecase) private deleteUserUseCase: DeleteUserUsecase,
    @Inject(FindByIdUserUsecase)
    private findByIdUserUseCase: FindByIdUserUsecase,
  ) {}
  async execute(
    input: DeleteUserApplicationInput,
  ): Promise<Record<string, any>> {
    const user = await this.findByIdUserUseCase.execute(input);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    await this.deleteUserUseCase.execute(user.id);
    return { message: 'user deleted!' };
  }
}
