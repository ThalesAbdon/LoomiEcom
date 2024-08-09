import { OrderStatus } from 'src/shared/order-status.enum';

export interface ListOrderUsecaseInput {
  status?: OrderStatus;
  clientId?: number;
  total?: number;
}

export interface Order {
  id: number;
  clientId: number;
  status: OrderStatus;
  total: number;
  orderDate: Date;
  updatedAt: Date;
}

export interface ListOrderUsecaseOutput {
  orders: Order[];
}
