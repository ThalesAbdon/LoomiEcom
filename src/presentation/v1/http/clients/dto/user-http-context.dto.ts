import { UserRole } from 'src/shared/enum';

export interface ClientUserHttpDtoInput {
  id: number;
  name: string;
  email: string;
  type: UserRole;
  emailVerified: boolean;
}
