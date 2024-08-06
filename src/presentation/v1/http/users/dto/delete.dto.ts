import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class DeleteUserDtoInput {
  @ApiProperty({ type: Number, example: 12 })
  @IsNumber()
  id: number;
}
