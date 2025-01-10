import { DataState } from "src/app/shared/enum/datastate";


export interface IState {
    dataState:DataState;
    authSuccess?: boolean;
    error?: string;
    message?: string;
}


