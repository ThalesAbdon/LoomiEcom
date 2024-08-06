import { UserRole } from 'src/shared/enum';

export interface ClientUserHttpApplicationInput {
  id: number;
  name: string;
  email: string;
  type: UserRole;
  emailVerified: boolean;
}
