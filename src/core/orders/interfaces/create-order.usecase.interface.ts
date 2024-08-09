import { OrderStatus } from 'src/shared/order-status.enum';

export interface CreateOrderUsecaseInput {
  clientId: number;
  total: number;
}

export interface CreateOrderUsecaseOutput {
  id: number;
  clientId: number;
  status: OrderStatus;
  orderDate: Date;
  total: number;
}
