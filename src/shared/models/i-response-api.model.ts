import { IApiPaginator } from "./meta.-data.model";

export interface IResponseApiModel<T> {
    status: string;
    payload?: T;
    message?: string;
    errors?: string;
    metadata?: IApiPaginator;
}