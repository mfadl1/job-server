import ResponseDto, { JobDto } from '@/dtos/response.dto';
import { Request } from 'express';
import { injectable, inject } from 'inversify';
import {
    Get,
    JsonController,
    Param,
    QueryParams,
    Req,
} from 'routing-controllers';
import { AuthQuery, API as AuthenticatorAPI } from '@dans/user-service';
import axios from 'axios';
import { DANS_BASE_URL } from '@/config';
import { getJobQuery } from '@/dtos/query_param.dto';
import { JobResponse } from '@/dtos/interface';

@JsonController('/job')
@injectable()
export default class JobController {
    constructor(
        @inject(AuthenticatorAPI.AuthQuery)
        private authQuery: AuthQuery,
    ) {}

    @Get()
    async getJobByParams(
        @Req() req: Request,
        @QueryParams() queryParam: getJobQuery,
    ) {
        await this.authQuery.authMiddleware(req);

        const response = await axios.get(
            `${DANS_BASE_URL}/recruitment/positions.json`,
        );

        const limit = queryParam.limit || 5;
        const currPage = queryParam.page;
        let filteredData = response.data;

        if (queryParam.is_fulltime) {
            filteredData = filteredData.filter((elmt: JobDto) => {
                return elmt.type == 'Full Time';
            });
        }

        if (queryParam.location) {
            filteredData = filteredData.filter((elmt: JobDto) => {
                return (
                    elmt.location.toLowerCase().indexOf(queryParam.location) !=
                    -1
                );
            });
        }

        if (queryParam.description) {
            filteredData = filteredData.filter((elmt: JobDto) => {
                return (
                    elmt.description
                        .toLowerCase()
                        .indexOf(queryParam.description) != -1
                );
            });
        }

        const resultData = filteredData.slice(
            currPage * limit - limit,
            currPage * limit,
        );
        const totalData = filteredData.length;
        const result = resultData.map((val: JobResponse) => new JobDto(val))

        return ResponseDto.success({
            total_data: totalData,
            current_page: currPage,
            per_page: limit,
            total_pages: Math.ceil(totalData / limit),
            data: result,
        });
    }

    @Get('/:id')
    async getJobById(@Req() req: Request, @Param('id') jobId: string) {
        await this.authQuery.authMiddleware(req);

        const jobDetails = await axios.get(
            `${DANS_BASE_URL}/recruitment/positions/${jobId}`,
        );

        return ResponseDto.success(jobDetails.data);
    }
}
