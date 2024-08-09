import { Inject, Injectable } from '@nestjs/common';
import { IUseCase } from 'src/core/interfaces/IUsecase';
import {
  FindByIdItemUsecaseInput,
  FindByIdItemUsecaseOutput,
} from '../interfaces/find-by-id-item.usecase.interface';
import { ItemRepository } from '../repository/item.repository';

@Injectable()
export class FindByIdItemUsecase
  implements IUseCase<FindByIdItemUsecaseInput, FindByIdItemUsecaseOutput>
{
  constructor(
    @Inject(ItemRepository) private readonly _itemRepository: ItemRepository,
  ) {}
  async execute(
    input: FindByIdItemUsecaseInput,
  ): Promise<FindByIdItemUsecaseOutput> {
    const item = await this._itemRepository.findOne(input);
    return item;
  }
}
