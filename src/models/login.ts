import { Expose } from 'class-transformer';
import { IsDate, IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {

  @Expose()
  @IsNotEmpty()
  readonly username: string;

  @Expose()
  @IsNotEmpty()
  readonly password: string;
}
