import { UserRole } from 'src/shared/enum';

export interface CreateUserApplicationInput {
  name: string;
  email: string;
  password: string;
  type: UserRole;
}

export interface CreateUserApplicationOutput {
  message: string;
}
