import { Inject, Injectable } from '@nestjs/common';
import { IUseCase } from 'src/core/interfaces/IUsecase';
import { ClientRepository } from '../repository/client.repository';
import { Client } from 'src/application/clients/interfaces/list-client.application.interface';
import { ListClientUsecaseInput } from '../interfaces/list.client.usecase.interface';

@Injectable()
export class ListClientUsecase
  implements IUseCase<ListClientUsecaseInput, Client[]>
{
  constructor(
    @Inject(ClientRepository)
    private readonly _clientRepository: ClientRepository,
  ) {}
  async execute(input: ListClientUsecaseInput): Promise<Client[]> {
    return await this._clientRepository.get(input);
  }
}
