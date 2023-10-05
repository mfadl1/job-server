export interface IHttpResponse<T> {
    readonly success: boolean;
    readonly result: T | null;
    readonly message?: string;
}

export interface JobResponse {
    id: string;
    type: string;
    url: string;
    created_at: string;
    company: string;
    company_url: string;
    location: string;
    title: string;
    description: string;
    how_to_apply: string;
    company_logo: string;
}