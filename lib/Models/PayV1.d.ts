import { Shoppy } from "../Shoppy";
interface IPayV1Create {
    title: string;
    price: number;
    webhook_urls: Array<string>;
    gateways: Array<string>;
    confirmations: number;
}
export declare class PayV1 extends Shoppy {
    create(data: IPayV1Create): Promise<any>;
    delete(id: string): Promise<any>;
}
export {};
//# sourceMappingURL=PayV1.d.ts.map