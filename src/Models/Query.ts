// Dependencies
import { Shoppy } from '../Shoppy';

// Query Class
export class Query extends Shoppy {
    async all(page: number = -1){
        try {
            // Get Response
            var response;

            // Page
            if (page > 0){
                response = await Shoppy.HttpClient.post("queries", {
                    form: {page: page}
                });
            } else {
                response = await Shoppy.HttpClient.post("queries");
            };    
            
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
            const response = await Shoppy.HttpClient.post(`queries/${id}`);
            
            // Return Parsed Response
            return JSON.parse(response.body);
        } catch(error){
            // Return Error
            return error;
        }; 
    };

    async update(id: string, status: string = "close"){
        try {
            // Get Response
            const response = await Shoppy.HttpClient.post(`queries/${id}/${status}`, {
                form: {action: status}
            });
            
            // Return Parsed Response
            return response.statusCode;
        } catch(error){
            // Return Error
            return error;
        };
    };

    async reply(id: string, message: string){
        try {
            // Get Response
            const response = await Shoppy.HttpClient.post(`queries/${id}/reply`, {
                form: {message: message}
            });
            
            // Return Parsed Response
            return response.statusCode;
        } catch(error){
            // Return Error
            return error;
        };
    }
};