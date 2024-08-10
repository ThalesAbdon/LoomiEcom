import { OrderStatus } from 'src/shared/order-status.enum';
import { FindOperator } from 'typeorm';

export interface GenerateFileApplicationInput {
  orderDate?: FindOperator<Date>;
  updatedAt?: FindOperator<Date>;
  status?: OrderStatus;
}
