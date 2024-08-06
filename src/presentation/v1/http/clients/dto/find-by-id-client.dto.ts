import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class FindByIdClientDtoInput {
  @ApiProperty({ type: Number, example: 6 })
  @IsString()
  id: number;
}
