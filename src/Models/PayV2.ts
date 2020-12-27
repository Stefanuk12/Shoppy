// Dependencies
import { Shoppy } from '../Shoppy';

// PayV2 Class
export class PayV2 extends Shoppy {
    async create(data: Object, fields: Object = {webhook_urls: [], custom_fields: [], quantity: 1} ){
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