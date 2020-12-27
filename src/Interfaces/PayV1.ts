export interface IPayV1Create {
    title: string;
    price: number;
    webhook_urls: Array<string>;
    gateways: Array<string>;
    confirmations: number;
};