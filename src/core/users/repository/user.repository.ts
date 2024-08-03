import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository as RepositoryTypeorm } from 'typeorm';
import { Repository } from 'src/infra/database/postgres/repositories/repository';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    protected repository: Pick<
      RepositoryTypeorm<UserEntity>,
      'save' | 'find' | 'findOne' | 'delete' | 'findBy'
    >,
  ) {
    super(repository);
  }
}
