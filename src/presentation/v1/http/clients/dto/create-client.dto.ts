import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';

export class CreateClientDtoInput {
  @ApiProperty({ type: String, example: 'Son Goku' })
  @IsString()
  @MaxLength(400)
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ type: String, example: '11954771162' })
  @IsString()
  @Length(11)
  @Matches('[0-9]')
  @IsNotEmpty()
  contact: string;

  @ApiProperty({ type: String, example: 'Distrito Leste 439' })
  @IsString()
  @MaxLength(600)
  @IsNotEmpty()
  address: string;
}

export class CreateClientDtoOutput {
  message: string;
}
