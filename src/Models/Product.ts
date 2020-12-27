// Dependencies
import { Shoppy } from '../Shoppy';

// Custom Field Interface
export interface ICustomField {
    name: string;
    value: "text" | "number";
    required: boolean;
};

// Product Interface
interface IProductEmail {
    enabled: boolean;
    value?: string;
}
interface IProductQuantity {
    min: number;
    max: number;
}
interface IProductAccount {
    account: string;
}
export interface IProduct {
    name: string;
    price: number;
    unlisted?: boolean;
    description?: string;
    type: "service" | "file" | "account" | "dynamic";
    stock_warning?: number;
    email: IProductEmail;
    quantity?: IProductQuantity;
    confirmations?: number;
    attachment_id?: string;
    custom_fields?: Array<ICustomField>;
    webhook_urls?: Array<string>;
    dynamic_url?: URL;
    gateways?: Array<string>;
    accounts: Array<IProductAccount>;
    currency: string;
};

// Product Class
export class Product extends Shoppy {
    // Get all products
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

    // Get a specific product
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

    // Create a product
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

    // Update a product
    async update(id: string, data: IProduct){
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

    // Delete a product
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