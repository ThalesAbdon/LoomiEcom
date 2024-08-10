import { Inject, Injectable } from '@nestjs/common';
import {
  CreateClientUsecaseInput,
  CreateClientUsecaseOutput,
} from '../interfaces/create.client.usecase.interface';
import { IUseCase } from 'src/core/interfaces/IUsecase';
import { ClientRepository } from '../repository/client.repository';

@Injectable()
export class CreateClientUsecase
  implements IUseCase<CreateClientUsecaseInput, CreateClientUsecaseOutput>
{
  constructor(
    @Inject(ClientRepository)
    private readonly clientRepository: ClientRepository,
  ) {}
  async execute(
    input: CreateClientUsecaseInput,
  ): Promise<CreateClientUsecaseOutput> {
    return await this.clientRepository.create(input);
  }
}
