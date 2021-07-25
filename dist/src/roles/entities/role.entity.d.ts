import { User } from '../../user/entities/user.entity';
export declare class Role {
    id: number;
    name: string;
    karma: string;
    users: User[];
}
