// Dependencies
import { IPayV2CreateData, IPayV2CreateFields } from '../Interfaces/PayV2';
import { Shoppy } from '..';

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