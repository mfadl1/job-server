import { IsString } from 'class-validator';
import { IHttpResponse } from './interface';

export default class ResponseDto {
    static success<T>(result: T, message = null): IHttpResponse<T> {
        return {
            success: true,
            message,
            result,
        };
    }

    static fail<T>(message: string): IHttpResponse<T> {
        return {
            success: false,
            message,
            result: null,
        };
    }
}

export class JobDto {
    @IsString()
    id: string;

    @IsString()
    type: string;

    @IsString()
    url: string;

    @IsString()
    created_at: string;

    @IsString()
    company: string;

    @IsString()
    company_url: string;

    @IsString()
    location: string;

    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    how_to_apply: string;

    @IsString()
    company_logo: string;
}
