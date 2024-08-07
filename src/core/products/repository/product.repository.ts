import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository as RepositoryTypeorm } from 'typeorm';
import { Repository } from 'src/infra/database/postgres/repositories/repository';
import { ProductEntity } from '../entity/product.entity';

@Injectable()
export class ProductRepository extends Repository<ProductEntity> {
  constructor(
    @InjectRepository(ProductEntity)
    protected repository: Pick<
      RepositoryTypeorm<ProductEntity>,
      'save' | 'find' | 'findOne' | 'delete' | 'findBy'
    >,
  ) {
    super(repository);
  }
}
