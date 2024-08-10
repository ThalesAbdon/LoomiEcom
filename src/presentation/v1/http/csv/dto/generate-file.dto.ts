import { ApiProperty } from '@nestjs/swagger';

import { IsDateString, IsEnum, IsOptional } from 'class-validator';
import { OrderStatus } from 'src/shared/order-status.enum';
import { FindOperator } from 'typeorm';

export class GenerateFileDtoInput {
  @ApiProperty({ type: Date, example: '2024-08-09' })
  @IsDateString()
  @IsOptional()
  orderDate?: FindOperator<Date>;

  @ApiProperty({ type: Date, example: '2024-08-08' })
  @IsDateString()
  @IsOptional()
  updatedAt?: FindOperator<Date>;

  @ApiProperty({ type: String, example: 'client' })
  @IsEnum(OrderStatus)
  @IsOptional()
  status?: OrderStatus;
}
