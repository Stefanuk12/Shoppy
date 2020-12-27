import { Shoppy } from '../Shoppy';
import { ICustomField } from './Product';
interface IPayV2CreateFields {
    webhook_urls?: Array<string>;
    custom_fields?: Array<string>;
    quantity?: number;
}
interface IPayV2CreateData {
    title: string;
    value: number;
    white_label?: boolean;
    email?: string;
    gateway?: string;
    webhook_urls?: Array<string>;
    quantity?: number;
    custom_fields: Array<ICustomField>;
}
export declare class PayV2 extends Shoppy {
    create(data: IPayV2CreateData, fields: IPayV2CreateFields): Promise<any>;
}
export {};
//# sourceMappingURL=PayV2.d.ts.map