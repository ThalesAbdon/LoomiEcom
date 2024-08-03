import { UserRole } from 'src/shared/enum';

export interface CreateUserApplicationInput {
  name: string;
  email: string;
  password: string;
  type: UserRole;
}

export interface CreateUserApplicationOutput
  extends CreateUserApplicationInput {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
