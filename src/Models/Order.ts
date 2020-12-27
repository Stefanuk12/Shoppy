// Dependencies
import { Shoppy } from '..';

// Order Class
export class Order {
    // Construtor
    constructor(){
        if (Shoppy.apiKey == undefined){
            throw(new Error("Please set the API key first by doing: const shoppy = new Shoppy(\"keyhere\");"))
        }
    }
    
    // Get all orders
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

    // Get a specific order
    async retrieve(id: string){
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