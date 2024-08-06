import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { FindByIdUserApplicationInput } from './interfaces/find-by-id-user.application.interface';
import { FindByIdUserUsecase } from 'src/core/users/usecases/find-by-id-user.usecase';

@Injectable()
export class FindByIdUserApplication {
  constructor(
    @Inject(FindByIdUserUsecase)
    private findByIdUserUseCase: FindByIdUserUsecase,
  ) {}
  async execute(
    input: FindByIdUserApplicationInput,
  ): Promise<Record<string, any>> {
    const user = await this.findByIdUserUseCase.execute(input);
    if (!user?.id) {
      throw new BadRequestException('User not found');
    }
    return user;
  }
}
