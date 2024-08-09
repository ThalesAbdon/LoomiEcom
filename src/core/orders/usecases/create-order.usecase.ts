import { Inject, Injectable } from '@nestjs/common';

import { IUseCase } from 'src/core/interfaces/IUsecase';
import {
  CreateOrderUsecaseInput,
  CreateOrderUsecaseOutput,
} from '../interfaces/create-order.usecase.interface';
import { OrderRepository } from '../repository/order.repository';

@Injectable()
export class CreateOrderUsecase
  implements IUseCase<CreateOrderUsecaseInput, CreateOrderUsecaseOutput>
{
  constructor(
    @Inject(OrderRepository)
    private readonly orderRepository: OrderRepository,
  ) {}
  async execute(
    input: CreateOrderUsecaseInput,
  ): Promise<CreateOrderUsecaseOutput> {
    return await this.orderRepository.create({
      clientId: input.clientId,
      total: input.total,
    });
  }
}
