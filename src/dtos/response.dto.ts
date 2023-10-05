import { IsString } from 'class-validator';
import { IHttpResponse, JobResponse } from './interface';
import { calculateDifference } from '@/utils/util';

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
    last_posted: string;

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

    constructor(val?: JobResponse){
        this.id = val?.id;
        this.type = val?.type;
        this.url = val?.url;
        this.last_posted = calculateDifference(new Date(), new Date(val?.created_at));
        this.company = val?.company;
        this.company_url = val?.company_url;
        this.location = val?.location;
        this.title = val?.title;
        this.description = val?.description;
        this.how_to_apply = val?.how_to_apply;
        this.company_logo = val?.company_logo;
    }
}
