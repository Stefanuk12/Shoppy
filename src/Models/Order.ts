// Dependencies
import { Shoppy } from '../Shoppy';

// Order Class
export class Order extends Shoppy {
    async all(){
        try {
            // Get Response
            const response = await Shoppy.HttpClient.post("orders");
            
            // Return Parsed Response
            return JSON.parse(response.body);
        } catch(error){
            // Return Error
            return error;
        };
    };

    async get(id: string){
        try {
            // Get Response
            const response = await Shoppy.HttpClient.post(`orders/${id}`);
            
            // Return Parsed Response
            return JSON.parse(response.body);
        } catch(error){
            // Return Error
            return error;
        };
    };
};