// Dependencies
import { Shoppy } from '../Shoppy';

// Product Class
export class Product extends Shoppy {
    async all(page: number = -1){
        try {
            // Get Response
            var response;

            // Page
            if (page > 0){
                response = await Shoppy.HttpClient.post("products", {
                    form: {page: page}
                });
            } else {
                response = await Shoppy.HttpClient.post("products");
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
            const response = await Shoppy.HttpClient.post(`products/${id}`);
            
            // Return Parsed Response
            return JSON.parse(response.body);
        } catch(error){
            // Return Error
            return error;
        }; 
    };

    async create(data: Object){
        try {
            // Get Response
            const response = await Shoppy.HttpClient.put("products", {
                form: data
            });
            
            // Return Parsed Response
            return response.statusCode;
        } catch(error){
            // Return Error
            return error;
        }; 
    };

    async update(id: string, data: Object){
        try {
            // Get Response
            const response = await Shoppy.HttpClient.post(`products/${id}`, {
                form: data
            });
            
            // Return Parsed Response
            return response.statusCode;
        } catch(error){
            // Return Error
            return error;
        };
    };

    async delete(id: string){
        try {
            // Get Response
            const response = await Shoppy.HttpClient.delete(`products/${id}`);
            
            // Return Response
            return response.statusCode;
        } catch(error){
            // Return Error
            return error;
        };
    };

    /* Not implemented because I do not know how to
    async updateImage(id: string, image: string){
        try {
            // Get Response
            const response = await Shoppy.HttpClient.post(`products/${id}/image`, {
                form: {file: image}
            });
            
            // Return Response
            return response.statusCode;
        } catch(error){
            // Return Error
            return error;
        };
    }
    */
}