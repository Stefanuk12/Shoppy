// Dependencies
import { Shoppy } from '../Shoppy';
import { ICustomField } from './Product';

// PayV2 Custom Field Interface
interface IPayV2CreateFields {
    webhook_urls?: Array<string>;
    custom_fields?: Array<string>;
    quantity?: number;
};

// PayV2 Create Data
interface IPayV2CreateData {
    title: string;
    value: number;
    white_label?: boolean;
    email?: string;
    gateway?: string;
    webhook_urls?: Array<string>;
    quantity?: number;
    custom_fields: Array<ICustomField>
};

// PayV2 Class
export class PayV2 extends Shoppy {
    // Create a payment
    async create(data: IPayV2CreateData, fields: IPayV2CreateFields){
        try {
            // Get Response
            const response = await Shoppy.HttpClient2.post("pay", {
                form: fields,
                json: data
            });
            
            // Return Parsed Response
            return JSON.parse(response.body);
        } catch(error){
            // Return Error
            return error;
        }; 
    };
};