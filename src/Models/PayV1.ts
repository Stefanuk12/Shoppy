// Dependencies
import { Shoppy } from "../Shoppy";

// PayV1 class
export class PayV1 extends Shoppy {
    async create(data: Object){
        try {
            // Get Response
            const response = await Shoppy.HttpClient.post("pay", {
                json: data
            });
            
            // Return Parsed Response
            return JSON.parse(response.body);
        } catch(error){
            // Return Error
            return error;
        }; 
    };

    async delete(id: string){
        try {
            // Get Response
            const response = await Shoppy.HttpClient.delete(`pay/${id}`);
            
            // Return Response
            return response.statusCode;
        } catch(error){
            // Return Error
            return error;
        };
    };
}