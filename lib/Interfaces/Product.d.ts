export interface ICustomField {
    name: string;
    value: "text" | "number";
    required: boolean;
}
export interface IProductEmail {
    enabled: boolean;
    value?: string;
}
export interface IProductQuantity {
    min: number;
    max: number;
}
export interface IProductAccount {
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
//# sourceMappingURL=Product.d.ts.map