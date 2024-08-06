import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDtoInput {
  @ApiProperty({ type: String, example: 'Luffy' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: String, example: 'luffy@gmail.com' })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: String, example: 'Test*123456' })
  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}

export class CreateUserDtoOutput {
  message: string;
}
