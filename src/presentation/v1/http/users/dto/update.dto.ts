import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { UserRole } from 'src/shared/enum';

export class UpdateUserDtoInput {
  @ApiProperty({ type: String, example: 'Luffy' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ type: String, example: 'luffy@gmail.com' })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value.toLowerCase())
  email?: string;

  @ApiProperty({ type: String, example: 'Test*123456' })
  @IsString()
  @MinLength(6)
  @IsOptional()
  password?: string;

  @ApiProperty({ type: String, example: 'client' })
  @IsEnum(UserRole)
  @IsOptional()
  type?: UserRole;
}

export class UpdateUserDtoOutput {
  message: string;
}
