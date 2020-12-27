// Dependencies
import { Shoppy } from '../Shoppy';

// Feedback Class
export class Feedback extends Shoppy {
    async all(page: number = -1){
        try {
            // Get Response
            var response;

            // Page
            if (page > 0){
                response = await Shoppy.HttpClient.post("feedbacks", {
                    form: {page: page}
                });
            } else {
                response = await Shoppy.HttpClient.post("feedbacks");
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
            const response = await Shoppy.HttpClient.post(`feedback/${id}`);
            
            // Return Parsed Response
            return JSON.parse(response.body);
        } catch(error){
            // Return Error
            return error;
        }; 
    };
}