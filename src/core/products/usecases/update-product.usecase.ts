import { Inject, Injectable } from '@nestjs/common';
import { IUseCase } from 'src/core/interfaces/IUsecase';
import {
  UpdateProductUsecaseInput,
  UpdateProductUsecaseOutput,
} from '../interfaces/update-product.usecase.interface';
import { ProductRepository } from '../repository/product.repository';

@Injectable()
export class UpdateProductUsecase
  implements IUseCase<UpdateProductUsecaseInput, UpdateProductUsecaseOutput>
{
  constructor(
    @Inject(ProductRepository)
    private readonly _productRepository: ProductRepository,
  ) {}
  async execute(
    input: UpdateProductUsecaseInput & { id: number },
  ): Promise<UpdateProductUsecaseOutput> {
    const id = input.id;
    delete input.id;
    return await this._productRepository.update(id, input);
  }
}
