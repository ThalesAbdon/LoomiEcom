import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class ListProductDtoInput {
  @ApiProperty({ type: String, example: 'Son Goku' })
  @IsString()
  @MaxLength(300)
  @IsOptional()
  @Transform(({ value }) => value.toLowerCase())
  name?: string;

  @ApiProperty({ type: String, example: '11954771162' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ type: Number, example: 4299 })
  @IsOptional()
  price?: number;

  @ApiProperty({ type: Number, example: 10 })
  @IsOptional()
  quantityStock?: number;
}

export class Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  quantityStock: number;
  createdAt: Date;
  updatedAt: Date;
}

export class ListProductDtoOutput {
  products: Product[];
}
