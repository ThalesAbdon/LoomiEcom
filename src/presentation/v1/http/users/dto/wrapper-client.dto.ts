import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateUserDtoInput } from './create.dto';
import { UserRole } from 'src/shared/enum';

export class CreateClientRequest {
  @ApiProperty({ type: CreateUserDtoInput })
  input: CreateUserDtoInput;

  @ApiProperty({ type: String, example: 'client' })
  @IsString()
  type: UserRole = UserRole.CLIENT;
}
