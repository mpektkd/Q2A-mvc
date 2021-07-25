import { PartialType } from '@nestjs/mapped-types';
import { CreateThreadUsersUserDto } from './create-thread-users-user.dto';

export class UpdateThreadUsersUserDto extends PartialType(CreateThreadUsersUserDto) {}
