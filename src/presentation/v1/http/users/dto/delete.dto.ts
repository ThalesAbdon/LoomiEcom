import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class DeleteUserDtoInput {
  @ApiProperty({ type: String, example: '12' })
  @IsString()
  id: string;
}
