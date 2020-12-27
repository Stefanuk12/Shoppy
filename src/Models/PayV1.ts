// Dependencies
import { IPayV1Create } from "../Interfaces/PayV1";
import { Shoppy } from "../Shoppy";

// PayV1 class
export class PayV1 extends Shoppy {
    // Create a payment
    async create(data: IPayV1Create){
        try {
            // Get Response
            const response = await Shoppy.HttpClient.post("pay", {
                json: {product: data}
            });
            
            // Return Parsed Response
            return JSON.parse(response.body);
        } catch(error){
            // Return Error
            return error;
        }; 
    };

    // Delete a payment
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