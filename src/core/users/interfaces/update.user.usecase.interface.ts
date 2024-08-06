import { UserRole } from 'src/shared/enum';

export interface UpdateUserUsecaseInput {
  name?: string;
  email?: string;
  password?: string;
  type?: UserRole;
}

export interface UpdateUserUsecaseOutput extends UpdateUserUsecaseInput {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
