import {
  Repository as RepositoryTypeorm,
  DeleteResult,
  DeepPartial,
} from 'typeorm';

export class Repository<I> {
  constructor(
    protected repository: Pick<
      RepositoryTypeorm<I>,
      'save' | 'find' | 'findOne' | 'delete' | 'findBy'
    >,
  ) {}

  async create(input: DeepPartial<I>): Promise<I> {
    return this.repository.save(input);
  }

  async update(id: number, input: DeepPartial<I>): Promise<I> {
    return this.repository.save({ id, ...input });
  }

  async findById(id: any): Promise<any> {
    return this.repository.findOne(id);
  }

  async findOne(input: Record<string, any>): Promise<I> {
    return this.repository.findOne({ where: input });
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }

  async get(where: Record<string, any>): Promise<I[]> {
    return this.repository.find({ where: where });
  }
}
