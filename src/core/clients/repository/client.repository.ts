import { Injectable } from '@nestjs/common';
import { ClientEntity } from '../entity/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository as RepositoryTypeorm } from 'typeorm';
import { Repository } from 'src/infra/database/postgres/repositories/repository';

@Injectable()
export class ClientRepository extends Repository<ClientEntity> {
  constructor(
    @InjectRepository(ClientEntity)
    protected repository: Pick<
      RepositoryTypeorm<ClientEntity>,
      'save' | 'find' | 'findOne' | 'delete' | 'findBy'
    >,
  ) {
    super(repository);
  }
}
