import axios from "axios";
import {UsersType} from "../types/types";


export const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '6ad120af-0bfc-436d-831b-9102d76f6c05'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeEnumForCaptcha {
    CaptchaIsRequired = 10,
}

export type GetItemsType = {
    items: Array<UsersType>,
    totalCount: number,
    error: string | null
}

export type APIResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}