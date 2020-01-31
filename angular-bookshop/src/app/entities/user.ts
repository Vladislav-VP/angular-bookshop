import { UserRole } from 'src/app/enums/user-role';

export class User{
    id: number;
    name: string;
    email: string;
    password: string;
    role: UserRole;
}
