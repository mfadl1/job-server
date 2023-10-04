import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class getJobQuery {
    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    location: string;

    @IsOptional()
    @IsBoolean()
    is_fulltime: boolean;

    @IsNumber()
    page: number;

    @IsOptional()
    @IsNumber()
    limit: number;
}
