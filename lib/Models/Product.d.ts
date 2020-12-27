import { Shoppy } from '../Shoppy';
export interface ICustomField {
    name: string;
    value: "text" | "number";
    required: boolean;
}
interface IProductEmail {
    enabled: boolean;
    value?: string;
}
interface IProductQuantity {
    min: number;
    max: number;
}
interface IProductAccount {
    account: string;
}
export interface IProduct {
    name: string;
    price: number;
    unlisted?: boolean;
    description?: string;
    type: "service" | "file" | "account" | "dynamic";
    stock_warning?: number;
    email: IProductEmail;
    quantity?: IProductQuantity;
    confirmations?: number;
    attachment_id?: string;
    custom_fields?: Array<ICustomField>;
    webhook_urls?: Array<string>;
    dynamic_url?: URL;
    gateways?: Array<string>;
    accounts: Array<IProductAccount>;
    currency: string;
}
export declare class Product extends Shoppy {
    all(page?: number): Promise<any>;
    get(id: string): Promise<any>;
    create(data: Object): Promise<any>;
    update(id: string, data: IProduct): Promise<any>;
    delete(id: string): Promise<any>;
}
export {};
//# sourceMappingURL=Product.d.ts.map