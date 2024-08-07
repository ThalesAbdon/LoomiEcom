import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { FindByIdProductUsecase } from 'src/core/products/usecases/find-by-product.usecase';
import { DeleteProductApplicationInput } from './interfaces/delete-product.application.interface';
import { DeleteProductUsecase } from 'src/core/products/usecases/delete-product.usecase';

@Injectable()
export class DeleteProductApplication {
  constructor(
    @Inject(DeleteProductUsecase)
    private deleteProductUseCase: DeleteProductUsecase,
    @Inject(FindByIdProductUsecase)
    private findByIdProductUseCase: FindByIdProductUsecase,
  ) {}
  async execute(
    input: DeleteProductApplicationInput,
  ): Promise<Record<string, any>> {
    const product = await this.findByIdProductUseCase.execute(input);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    await this.deleteProductUseCase.execute({ id: product.id });
    return { message: 'Product deleted!' };
  }
}
