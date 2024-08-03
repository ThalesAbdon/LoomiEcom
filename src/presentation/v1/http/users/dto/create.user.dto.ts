import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { UserRole } from 'src/shared/enum';

export class CreateUserDtoInput {
  @ApiProperty({ type: String, example: 'Luffy' })
  @IsString()
  name: string;

  @ApiProperty({ type: String, example: 'luffy@gmail.com' })
  @IsString()
  email: string;

  @ApiProperty({ type: String, example: 'Test*123456' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ type: String, example: 'client' })
  @IsEnum(UserRole)
  @IsNotEmpty()
  type: UserRole;
}

export class CreateUserDtoOutput {
  message: string;
}
