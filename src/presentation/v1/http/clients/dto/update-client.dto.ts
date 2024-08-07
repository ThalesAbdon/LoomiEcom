import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';

export class UpdateClientDtoInput {
  @ApiProperty({ type: String, example: 'Son Goku' })
  @IsString()
  @MaxLength(400)
  @IsOptional()
  @Transform(({ value }) => value.toLowerCase())
  fullName?: string;

  @ApiProperty({ type: String, example: '11954771162' })
  @IsString()
  @Length(11)
  @Matches('[0-9]')
  @IsOptional()
  contact?: string;

  @ApiProperty({ type: String, example: 'Distrito Leste 439' })
  @IsString()
  @MaxLength(600)
  @IsOptional()
  @Transform(({ value }) => value.toLowerCase())
  address?: string;

  @ApiProperty({ type: Boolean, example: true })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}

export class UpdateClientDtoOutput {
  message: string;
}
