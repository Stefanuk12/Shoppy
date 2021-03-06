// Dependencies
import { Shoppy } from '..';

// Query Class
export class Query {
    // Construtor
    constructor(){
        if (Shoppy.apiKey == undefined){
            throw(new Error("Please set the API key first by doing: const shoppy = new Shoppy(\"keyhere\");"))
        }
    }
    
    // Get all queries
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

    // Get a specific query
    async retrieve(id: string){
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

    // Update a query
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

    // Reply to a query
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