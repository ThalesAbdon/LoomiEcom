import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserRole } from 'src/shared/enum';

export class ListUserDtoInput {
  @ApiProperty({ type: String, example: 'Luffy' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ type: String, example: 'luffy@gmail.com' })
  @IsString()
  @IsOptional()
  email?: string;

  @ApiProperty({ type: String, example: 'client' })
  @IsEnum(UserRole)
  @IsNotEmpty()
  @IsOptional()
  type?: UserRole;
}

export class User {
  id: number;
  name: string;
  email: string;
  type: UserRole;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class ListUserDtoOutput {
  users: User[];
}
