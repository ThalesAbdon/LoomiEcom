import { IsString } from 'class-validator';

export class ActivedAccountDtoInput {
  @IsString()
  id: string;

  @IsString()
  token: string;
}
