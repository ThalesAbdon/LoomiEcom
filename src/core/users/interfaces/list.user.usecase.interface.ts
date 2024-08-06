import { UserRole } from 'src/shared/enum';

export interface ListUserUsecaseInput {
  name?: string;
  email?: string;
  type?: UserRole;
}

export interface User {
  id: number;
  name: string;
  email: string;
  type: UserRole;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
