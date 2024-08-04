import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginUserDtoInput {
  @ApiProperty({ type: String, example: 'luffy@gmail.com' })
  @IsString()
  email: string;

  @ApiProperty({ type: String, example: '123456' })
  @IsString()
  password: string;
}
