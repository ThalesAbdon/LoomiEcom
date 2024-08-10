import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository as RepositoryTypeorm } from 'typeorm';
import { Repository } from 'src/infra/database/postgres/repositories/repository';
import { OrderEntity } from '../entity/order.entity';

@Injectable()
export class OrderRepository extends Repository<OrderEntity> {
  protected relation = ['item', 'item.product'];
  constructor(
    @InjectRepository(OrderEntity)
    protected repository: Pick<
      RepositoryTypeorm<OrderEntity>,
      'save' | 'find' | 'findOne' | 'delete' | 'findBy'
    >,
  ) {
    super(repository);
  }
}
