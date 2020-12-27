// Dependencies
import { Shoppy } from '..';

// Feedback Class
export class Feedback extends Shoppy {
    // Get all feedback
    async all(page?: number){
        try {
            // Get Response
            var response;

            // Page
            if (page){
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

    // Get specific feedback
    async retrieve(id: string){
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