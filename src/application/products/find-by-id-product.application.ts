import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { FindByIdProductApplicationInput } from './interfaces/find-by-id-product.application.interface';
import { FindByIdProductUsecase } from 'src/core/products/usecases/find-by-product.usecase';

@Injectable()
export class FindByIdProductApplication {
  constructor(
    @Inject(FindByIdProductUsecase)
    private findByIdProductUseCase: FindByIdProductUsecase,
  ) {}
  async execute(
    input: FindByIdProductApplicationInput,
  ): Promise<Record<string, any>> {
    const product = await this.findByIdProductUseCase.execute(input);
    if (!product?.id) {
      throw new BadRequestException('Product not found');
    }
    return product;
  }
}
