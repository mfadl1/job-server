import { IsString } from 'class-validator';

export class AuthDto {
    @IsString()
    phone_number: string;

    @IsString()
    password: string;
}
