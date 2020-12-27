import { ICustomField } from "./Product";

export interface IPayV2CreateFields {
    webhook_urls?: Array<string>;
    custom_fields?: Array<string>;
    quantity?: number;
};

export interface IPayV2CreateData {
    title: string;
    value: number;
    white_label?: boolean;
    email?: string;
    gateway?: string;
    webhook_urls?: Array<string>;
    quantity?: number;
    custom_fields: Array<ICustomField>
};