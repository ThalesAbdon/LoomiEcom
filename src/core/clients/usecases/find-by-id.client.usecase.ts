import { Inject, Injectable } from '@nestjs/common';
import { IUseCase } from 'src/core/interfaces/IUsecase';
import { FindByIdClientUsecaseInput } from '../interfaces/find-by-id.client.usecase.interface';
import { ClientEntity } from '../entity/client.entity';
import { ClientRepository } from '../repository/client.repository';

@Injectable()
export class FindByIdClientUsecase
  implements IUseCase<FindByIdClientUsecaseInput, ClientEntity>
{
  constructor(
    @Inject(ClientRepository)
    private readonly _clientRepository: ClientRepository,
  ) {}
  async execute(input: FindByIdClientUsecaseInput): Promise<ClientEntity> {
    const client = await this._clientRepository.findOne(input);
    return client;
  }
}
