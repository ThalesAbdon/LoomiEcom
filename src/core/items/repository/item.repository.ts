import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository as RepositoryTypeorm } from 'typeorm';
import { Repository } from 'src/infra/database/postgres/repositories/repository';
import { ItemEntity } from '../entity/item.entity';

@Injectable()
export class ItemRepository extends Repository<ItemEntity> {
  constructor(
    @InjectRepository(ItemEntity)
    protected repository: Pick<
      RepositoryTypeorm<ItemEntity>,
      'save' | 'find' | 'findOne' | 'delete' | 'findBy'
    >,
  ) {
    super(repository);
  }
}
