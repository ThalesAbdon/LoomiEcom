import { UserRole } from 'src/shared/enum';

export interface ListUserApplicationInput {
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

export interface ListUserApplicationOutput {
  users: User[];
}
