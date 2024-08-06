import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';

export class ListClientDtoInput {
  @ApiProperty({ type: String, example: 'Son Goku' })
  @IsString()
  @MaxLength(400)
  @IsOptional()
  fullName: string;

  @ApiProperty({ type: String, example: '11954771162' })
  @IsString()
  @Length(11)
  @Matches('[0-9]')
  @IsOptional()
  contact: string;

  @ApiProperty({ type: String, example: 'Distrito Leste 439' })
  @IsString()
  @MaxLength(600)
  @IsOptional()
  address: string;
}

export class Client {
  id: number;
  fullName: string;
  contact: string;
  address: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class ListClientDtoOutput {
  clients: Client[];
}
