import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { UserRole } from 'src/shared/enum';

export class UpdateUserDtoInput {
  @ApiProperty({ type: String, example: 'Luffy' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ type: String, example: 'luffy@gmail.com' })
  @IsString()
  @IsOptional()
  email?: string;

  @ApiProperty({ type: String, example: 'Test*123456' })
  @IsString()
  @MinLength(6)
  @IsOptional()
  password?: string;

  @ApiProperty({ type: String, example: 'client' })
  @IsEnum(UserRole)
  @IsNotEmpty()
  @IsOptional()
  type?: UserRole;
}

export class UpdateUserDtoOutput {
  message: string;
}
