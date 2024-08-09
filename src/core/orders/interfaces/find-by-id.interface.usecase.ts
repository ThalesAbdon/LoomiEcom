import { OrderStatus } from 'src/shared/order-status.enum';

export interface FindByIdOrderUsecaseInput {
  id: number;
}

export interface FindByIdOrderUsecaseOutput extends FindByIdOrderUsecaseInput {
  total: number;
  status: OrderStatus;
}
